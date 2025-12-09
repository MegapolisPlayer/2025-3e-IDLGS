/*
	RESIN Interactive Element System
	Author: Martin Bykov
*/

export class RElement {
	x: number = 0;
	y: number = 0;
	width: number = 0;
	height: number = 0;
	visible: boolean = true;
	bgcolor: string = "#aaaaaa";
	fgcolor: string = "#000000";
	rounded: number = 0;
	uuid: string = "";

	constructor(
		x: number, 
		y: number,
		width: number,
		height: number,
		visible: boolean,
		bgcolor: string,
		fgcolor: string,
		rounded: number,
		uuid: string,
	) {	
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.visible = visible;
		this.bgcolor = bgcolor;
		this.fgcolor = fgcolor;
		this.rounded = rounded;
		this.uuid = uuid;
	}
};

export class RAnswerElement extends RElement {
	answer: string = "";

	checkAnswer(): boolean {
		return false;
	}
};