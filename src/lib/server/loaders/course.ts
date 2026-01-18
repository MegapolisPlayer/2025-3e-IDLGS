import type { CourseType, UserType } from '$lib/types';
import { schema } from '$lib/server/db/mainSchema';
import { eq } from 'drizzle-orm';
import { getRequestEvent } from '$app/server';
import markdownit from 'markdown-it';
import { MARKDOWN_CONFIG_OPTIONS } from '$lib';

export const loadCourses = async (user: UserType): Promise<CourseType[]> => {
	const db = getRequestEvent().locals.db;

	const courses = db
		.select({
			uuid: schema.course.uuid,
			description: schema.course.description,
			createdAt: schema.course.createdAt,
			modifiedAt: schema.course.modifiedAt,
			red: schema.course.red,
			green: schema.course.green,
			blue: schema.course.blue,
			name: schema.course.name,
			subject: schema.course.subject,
		})
		.from(schema.course)
		.innerJoin(
			schema.userCourseLinker,
			eq(schema.course.id, schema.userCourseLinker.course), //join condition
		)
		.where(eq(schema.userCourseLinker.user, user.id));

	const md = markdownit(MARKDOWN_CONFIG_OPTIONS);

	return courses
		.then((coursesData) => {
			for (let i = 0; i < coursesData.length; i++) {
				coursesData[i].description = md.renderInline(
					coursesData[i].description,
				);
			}
			return coursesData;
		})
		.finally(() => [] as CourseType[]);
};

export const loadSingleCourse = async (
	user: UserType | undefined,
	courseUuid: string,
	people: boolean = false,
	assignments: boolean = false,
): Promise<CourseType | null> => {
	const db = getRequestEvent().locals.db;

	let course = await db
		.select({
			id: schema.course.id,
			uuid: schema.course.uuid,
			description: schema.course.description,
			createdAt: schema.course.createdAt,
			modifiedAt: schema.course.modifiedAt,
			red: schema.course.red,
			green: schema.course.green,
			blue: schema.course.blue,
			name: schema.course.name,
			subject: schema.course.subject,
		})
		.from(schema.course)
		.innerJoin(
			schema.userCourseLinker,
			eq(schema.course.id, schema.userCourseLinker.course), //join condition
		)
		.where(eq(schema.course.uuid, courseUuid));

	if (course.length === 0) {
		return null;
	}

	const md = markdownit(MARKDOWN_CONFIG_OPTIONS);
	course[0].description = md.renderInline(course[0].description);

	if (people) {
		const peopleData = await db
			.select({
				uuid: schema.user.uuid,
				name: schema.user.name,
				surname: schema.user.surname,
				email: schema.user.email,
				degree: schema.user.degree,
				isOwner: schema.userCourseLinker.owner,
				isTeacher: schema.userCourseLinker.teacher,
			})
			.from(schema.user)
			.innerJoin(
				schema.userCourseLinker,
				eq(schema.user.id, schema.userCourseLinker.user),
			)
			.where(eq(schema.userCourseLinker.course, course[0].id));
		(course[0] as CourseType).people = peopleData;
	}

	if (assignments) {
		const assignmentsData = await db
			.select({
				uuid: schema.assignment.uuid,
				title: schema.assignment.title,
				description: schema.assignment.description,
				deadline: schema.assignment.deadline,
				createdAt: schema.assignment.createdAt,
				modifiedAt: schema.assignment.modifiedAt,
			})
			.from(schema.assignment)
			.where(eq(schema.assignment.course, course[0].id));
		(course[0] as CourseType).assignments = assignmentsData;
	}

	return course[0] as CourseType;
};
