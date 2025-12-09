/*
	RESIN Interactive Element System
	Author: Martin Bykov
*/

import { RElement } from "./element.svelte";

//main element class
//array is polymorphic
export class RInteractive {
	elements: RElement[] = $state([]);
	bgcolor = $state("#dddddd");

	//aspect ratio as x/y
	aspect: number = $state(16/9);

	addElement(
		x: number,
		y: number,
		width: number,
		height: number,
		visible: boolean,
		bgcolor: string,
		fgcolor: string,
		rounded: number
	) {
		this.elements.push(new RElement(
			x, y, width, height, visible, bgcolor, fgcolor, rounded
		));
	}
	addElementDone(el: RElement) {
		this.elements.push(el);
	}
};