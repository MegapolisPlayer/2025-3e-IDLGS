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
		uuid
	}: {
		x: number,
		y: number,
		width: number,
		height: number,
		visible: boolean,
		bgcolor: string,
		fgcolor: string,
		rounded: number,
		uuid: string
	} = $props();
</script>

<div 
	class="p-1 z-50 absolute {visible ? "" : "hidden"}" id={uuid}
	style="
		top:              {y}%;
		left:             {x}%;
		width:            {width}%;
		height:           {height}%;
		background-color: {bgcolor};
		color:            {fgcolor};
		border-radius:    {rounded}px;
	"
>
	ELEMENT???
</div>