<!---- LINE --------->


<!------------------->
<!---- CODE JS ------>
<!------------------->
<script>
    export let top = 50;
    export let left = 25 - 0.4/2;
	export let height = 50; //en vh
    export let zMin = 0;
    export let cBorder = "#FFFFFF";
    export let wBorder = 0.4;

    function I(name) { return document.getElementById(name); }
	
</script>


<!------------------->
<!---- CODE HTML ---->
<!------------------->
<div class="mainLine" style="top:{top}vh;left:{left}vw;z-index:{zMin};height:{height}vh;width:{wBorder}vw;background:{cBorder};"></div>

<!------------------->
<!---- CODE CSS ----->
<!------------------->
<style>
.mainLine
{
    margin: 0;
    padding: 0;
    position: absolute;
}
</style>