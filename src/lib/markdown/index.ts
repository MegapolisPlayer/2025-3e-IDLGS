import markdownit from 'markdown-it';
import hljs from 'highlight.js';
import katex from 'katex';

//config values

export const MARKDOWN_CONFIG_OPTIONS = {
	html: true,
	linkify: true,
	typographer: true,
	xhtmlOut: true,
	langPrefix: 'language-',
	highlight: (str: string, lang: string) => {
		return hljs.highlightAuto(str, [lang]).value;
	},
	breaks: true,
};

export const renderMarkdown = (markdown: string): string => {
	const md = markdownit(MARKDOWN_CONFIG_OPTIONS);

	markdown = markdown.replaceAll(/\$([^\$]+)\$[^\$]?/gums, (_match, p1) => {
		return katex.renderToString(p1, { 
			throwOnError: false,
			fleqn: true,
			displayMode: true,
		});
	});

	return `<div class="markdownText">${md.render(markdown)}</div>`;
};