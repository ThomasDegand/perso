<!---- PROFIL ------->


<!------------------->
<!---- CODE JS ------>
<!------------------->
<script>
    export let top = 25;
    export let right = 100/(6*2); //en vw
    export let height = 60; //en vh
	export let width = 5*100/(6*2); //en vw
    export let zMin = 1;
    export let title = "";
    export let cTitle = "#FFFFFF";
    export let pTitle = 0.15;
    export let subtitle = "";
    export let cSubtitle = "#FFFFFF";
    export let pSubtitle = 0.13;
    export let description = "";
    export let cDescription = "#FFFFFF";
    export let pDescription = 0.72;
    export let nLines = 10;

    function I(name) { return document.getElementById(name); }
	
</script>


<!------------------->
<!---- CODE HTML ---->
<!------------------->
<div class="boxProfil" style="top:{top}vh;right:{right}vw;z-index:{zMin};height:{height}vh;width:{width}vw;">
    <div class="titleProfil" style="height:{pTitle*height}vh;width:{width}vw;line-height:{pTitle*height}vh;font-size:{0.9*pTitle*height}vh;color:{cTitle};">{title}</div>
    <div class="subtitleProfil" style="top:{pTitle*height}vh;height:{pSubtitle*height}vh;width:{width}vw;line-height:{pTitle*height/2}vh;font-size:{0.9*pSubtitle*height/2}vh;color:{cSubtitle};">{subtitle}</div>
    <div class="descriptionProfil" style="top:{(pTitle+pSubtitle)*height}vh;height:{pDescription*height}vh;width:{width}vw;line-height:{pDescription*height/nLines}vh;font-size:{0.9*pDescription*height/nLines}vh;color:{cDescription};">{description}</div>
</div>

<!------------------->
<!---- CODE CSS ----->
<!------------------->
<style>
.boxProfil
{
    margin: 0;
    padding: 0;
    position: absolute;
    font-family: 'Roboto';
}
.titleProfil
{
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    font-weight: 500;
}
.subtitleProfil
{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    text-align: left;
    font-weight: 300;
}
.descriptionProfil
{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    text-align: justify;
    font-weight: 400;
}
</style>