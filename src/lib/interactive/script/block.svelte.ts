/*
	RESIN Interactive Element System
	Author: Martin Bykov
*/

/*
Connection types:
- R: round
- A: arrow
- S: square
*/

//in px
export const RESIN_CONNECTION_SPACING = 5;
export const RESIN_CONNECTION_Y_SIZE = 10;
export const RESIN_CONNECTION_X_SIZE = 10;
export const RESIN_CONNECTION_PADDING = 20;
export const RESIN_RADIUS = 10;
export const RESIN_COMMENT_COLOR = "#808080";
export const RESIN_COMMENT_INDICATION_COLOR = "#606060";

export class RScriptBlock {
	connectionBottom: string = "";
	connectionTop: string = "";
	horizontalBlock: boolean = false; //if false: top/bottom have connections, if true; left/right have connections

	x: number = $state(0);
	y: number = $state(0);
	width: number = $state(0);
	height: number = $state(0);

	bgcolor: string = $state("");
	fgcolor: string = $state("");

	commented: boolean = $state(true);

	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
		bgcolor: string,
		fgcolor: string,
		commented: boolean
	) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.bgcolor = bgcolor;
		this.fgcolor = fgcolor;
		this.commented = commented;
	}

	drawBackground = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		if(this.commented) {
			ctx.fillStyle = RESIN_COMMENT_COLOR;
			ctx.globalAlpha = 0.75;
		}
		else {
			ctx.fillStyle = this.bgcolor;
			ctx.globalAlpha = 1;
		}

		ctx.beginPath();
		
		//body
		ctx.rect(0, RESIN_CONNECTION_Y_SIZE, ctx.canvas.width, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE * 2);
		
		//rounded start
		ctx.roundRect(0, 0, RESIN_CONNECTION_PADDING, ctx.canvas.height, [RESIN_RADIUS, 0, 0, RESIN_RADIUS]);

		//rounded end
		ctx.roundRect(ctx.canvas.width-RESIN_CONNECTION_PADDING, 0, RESIN_CONNECTION_PADDING, ctx.canvas.height, [0, RESIN_RADIUS, RESIN_RADIUS, 0]);

		ctx.fill();

		let x = RESIN_CONNECTION_PADDING;

		ctx.beginPath();
		ctx.moveTo(RESIN_CONNECTION_PADDING, ctx.canvas.height);

		for (let c of this.connectionBottom) {
			switch (c) {
				case 'R':
					ctx.arcTo(x, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE, x + RESIN_CONNECTION_X_SIZE / 2, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE, RESIN_CONNECTION_Y_SIZE / 2);
					ctx.arcTo(x + RESIN_CONNECTION_X_SIZE, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE, x + RESIN_CONNECTION_X_SIZE, ctx.canvas.height, RESIN_CONNECTION_Y_SIZE / 2);
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE, ctx.canvas.height);
					break;
				case 'A':
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE / 2, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE);
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE, ctx.canvas.height);
					break;
				case 'S':
					ctx.lineTo(x, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE);
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE);
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE, ctx.canvas.height);
					break;
			}
			x += RESIN_CONNECTION_X_SIZE + RESIN_CONNECTION_SPACING;
			ctx.lineTo(x, ctx.canvas.height);
		}

		ctx.lineTo(ctx.canvas.width - RESIN_CONNECTION_PADDING, ctx.canvas.height);
		ctx.lineTo(ctx.canvas.width - RESIN_CONNECTION_PADDING, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE);
		ctx.lineTo(RESIN_CONNECTION_PADDING, ctx.canvas.height - RESIN_CONNECTION_Y_SIZE);

		ctx.fill();

		//top connections: inverted

		x = RESIN_CONNECTION_PADDING;

		ctx.beginPath();
		ctx.moveTo(RESIN_CONNECTION_PADDING, 0);

		//TODO add inverted variants too!
		//add 2 types: O(ut) and I(n)
		//OUT types out on bottom in on top
		//IN types in on bottom out on top
		//(easier comparison this way)
		for (let c of this.connectionTop) {
			switch (c) {
				case 'R':
					ctx.arcTo(x, RESIN_CONNECTION_Y_SIZE, x + RESIN_CONNECTION_X_SIZE / 2,  RESIN_CONNECTION_Y_SIZE, RESIN_CONNECTION_Y_SIZE / 2);
					ctx.arcTo(x + RESIN_CONNECTION_X_SIZE, RESIN_CONNECTION_Y_SIZE, x + RESIN_CONNECTION_X_SIZE, 0, RESIN_CONNECTION_Y_SIZE / 2);
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE, 0);
					break;
				case 'A':
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE / 2, RESIN_CONNECTION_Y_SIZE);
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE, 0);
					break;
				case 'S':
					ctx.lineTo(x, RESIN_CONNECTION_Y_SIZE);
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE, RESIN_CONNECTION_Y_SIZE);
					ctx.lineTo(x + RESIN_CONNECTION_X_SIZE, 0);
					break;
			}

			x += RESIN_CONNECTION_X_SIZE + RESIN_CONNECTION_SPACING;
			ctx.lineTo(x, 0);
		}

		ctx.lineTo(ctx.canvas.width-RESIN_CONNECTION_PADDING, 0);
		ctx.lineTo(ctx.canvas.width-RESIN_CONNECTION_PADDING, RESIN_CONNECTION_Y_SIZE);
		ctx.lineTo(RESIN_CONNECTION_PADDING, RESIN_CONNECTION_Y_SIZE);

		ctx.fill();

		//comment indicator

		if(this.commented) {
			ctx.strokeStyle = RESIN_COMMENT_INDICATION_COLOR;
			ctx.lineWidth = 10;

			ctx.beginPath();

			ctx.moveTo(ctx.canvas.width*8.5/10, ctx.canvas.height+10);
			ctx.lineTo(ctx.canvas.width*9.0/10, -10);

			ctx.moveTo(ctx.canvas.width*9.0/10, ctx.canvas.height+10);
			ctx.lineTo(ctx.canvas.width*9.5/10, -10);

			ctx.stroke();
		}
	}
};

//B before A
export const isCompatibleBefore = (a: RScriptBlock, b: RScriptBlock): boolean => {
	//TODO compare connections
	return true;
}

//B after A
export const isCompatibleAfter = (a: RScriptBlock, b: RScriptBlock): boolean => {
	//TODO compare connections
	return true;
}