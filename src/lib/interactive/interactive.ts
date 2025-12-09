/*
	RESIN Interactive Element System
	Author: Martin Bykov
*/

import { RElement } from "./element";

//main element class
export class RInteractive {
	elements: RElement[] = [];
	bgcolor = "#dddddd";

	//aspect ratio as x/y
	aspect: number = 16/9;
};