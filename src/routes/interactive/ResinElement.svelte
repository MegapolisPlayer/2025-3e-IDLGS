<!--

RESIN
Graphical representation of a single RElement.
Author: Martin Bykov

-->

<script lang="ts">
	let {
		x,
		y,
		width,
		height,
		visible,
		bgcolor,
		fgcolor,
		rounded,
		uuid,
		uuidVariable = $bindable(),
	}: {
		x: number,
		y: number,
		width: number,
		height: number,
		visible: boolean,
		bgcolor: string,
		fgcolor: string,
		rounded: number,
		uuid: string,
		uuidVariable: string,
	} = $props();
</script>

<button 
	class="
	p-1 z-50 absolute {visible ? "" : "hidden"}
	{uuid === uuidVariable ? "border-2 border-violet-700" : ""}
	" 
	id={uuid}
	style="
		top:              {y}%;
		left:             {x}%;
		width:            {width}%;
		height:           {height}%;
		background-color: {bgcolor};
		color:            {fgcolor};
		border-radius:    {rounded}px;
	"
	onclick={() => uuidVariable = uuid}
	aria-label={"RESIN ELEMENT"}
></button>