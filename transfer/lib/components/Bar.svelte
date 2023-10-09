<!---- BAR ---------->


<!------------------->
<!---- CODE JS ------>
<!------------------->
<script>
    export let top = "0";
    export let left = "0";
	export let height = "20";
	export let width = "100";
    export let pLoad = 0.7;
    let pLoadOld = pLoad;
    export let pFore = 0.3;
    export let zMin = 1;
    export let cBack = "#34302D";
    export let cLoad = "#8CBFF3";
    export let cFore = "#246ABA";
    let cCursor = cLoad;
    let onBar = false;
    let onBarClick = false;

    function I(name) { return document.getElementById(name); }
	
	function mouseClick(event) {
        if (!onBar) { pLoadOld = pLoad; }
        pFore = (event.x - left)/width;
        pLoadOld = pFore;
        onBar = true;
        cCursor = cFore;
    }
    function mouseMove(event) {
        if (!onBar) { pLoadOld = pLoad; }
        if (!onBarClick) {
            pLoad = (event.x - left)/width;
            if (pLoad <= 0) { pLoad = 0; mouseOut(); mouseUp(); }
            if (pLoad >= 1) { pLoad = 1; mouseOut(); mouseUp(); }
            onBar = true;
            cCursor = cLoad;
        }
        else {
            pFore = (event.x - left)/width;
            if (pFore <= 0) { pFore = 0; mouseOut(); mouseUp(); }
            if (pFore >= 1) { pFore = 1; mouseOut(); mouseUp(); }
            pLoad = pFore;
            pLoadOld = pFore;
            onBar = true;
            cCursor = cFore;
        }
    }
    function mouseOut(event) {
        onBar = false;
        pLoad = pLoadOld;
    }
    function mouseDown(event) {
        onBarClick = true;
    }
    function mouseUp(event) {
        onBarClick = false;
    }
</script>


<!------------------->
<!---- CODE HTML ---->
<!------------------->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:click={mouseClick} on:mouseover={mouseMove} on:mousemove={mouseMove} on:mouseout={mouseOut} on:mousedown={mouseDown} on:mouseup={mouseUp} class="bar barBack" style="top:{top}px;left:{left}px;z-index:{zMin};background:{cBack};height:{height}px;width:{width}px;">
    <div class="bar barLoad" style="z-index:{zMin+1};background:{cLoad};height:{height}px;width:{pLoad*width}px;"></div>
    <div class="bar barFore" style="z-index:{zMin+2};background:{cFore};height:{height}px;width:{pFore*width}px;"></div>
    <div class="barCursor" style="top:-{0.5*height}px;left:{pLoad*width -1*height}px;z-index:{zMin+3};background:{cCursor};height:{2*height}px;width:{2*height}px;display:{onBar ? 'block':'none'}"></div>
</div>


<!------------------->
<!---- CODE CSS ----->
<!------------------->
<style>
	.bar
	{
		margin: 0;
		padding: 0;
        position: absolute;
        cursor: pointer;
        border-radius: 10px;
	}
    .barBack
    {
        box-shadow: inset 0 0 4px 0 #000000, -0.5px -0.5px 8px 2px #FFFFFF, 0.5px 0.5px 8px 2px #00000044;
    }
    .barLoad
    {
        background: linear-gradient(to top, #246ABA99, #3F89DC77) !important;
    }
    .barFore
    {
        background: linear-gradient(to top, #246ABA, #3F89DC) !important;
    }
    .barCursor
    {
        margin: 0;
        padding: 0;
        position: absolute;
        cursor: pointer;
        border-radius: 100%;
        background: #00000000 !important;
    }
</style>