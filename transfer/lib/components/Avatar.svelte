<!---- AVATAR ------->


<!------------------->
<!---- CODE JS ------>
<!------------------->
<script>
    export let top = 50;
    export let left = 25 - 100/(5*2);
	export let width = 100/5; //en vw
    export let zMin = 2;
    export let cBack = "#111111";
    export let cBorder = "#FFFFFF";
    export let wBorder = 0.4;
    export let src = "https://data.aerles.fr/svelte/avatar.png";
    export let x = 1;

    function I(name) { return document.getElementById(name); }
	
</script>


<!------------------->
<!---- CODE HTML ---->
<!------------------->
<div class="frameAvatar" style="top:calc({top}vh - {width/2}vw);left:{left}vw;z-index:{zMin};height:{width}vw;width:{width}vw;background:{cBack};border:solid {wBorder}vw {cBorder};box-shadow:inset 0 0 {2*wBorder}vw {cBorder};">
    <div class="photoAvatar" style="top:{x*2*wBorder}vw;left:{x*2*wBorder}vw;z-index:{zMin+1};height:{width - (2+ x*4)*wBorder}vw;width:{width - (2+ x*4)*wBorder}vw;background:url('{src}'),{cBorder};border:solid {wBorder}vw {cBorder};">

    </div>
</div>

<!------------------->
<!---- CODE CSS ----->
<!------------------->
<style>
.frameAvatar
{
    margin: 0;
    padding: 0;
    position: absolute;
    box-sizing: border-box;
    transform: rotate(-45deg);
}
.photoAvatar
{
    margin: 0;
    padding: 0;
    position: absolute;
    box-sizing: border-box;
    background-size: cover !important;
}
</style>