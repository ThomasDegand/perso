<!---- MENU --------->


<!------------------->
<!---- CODE JS ------>
<!------------------->
<script>
    export let height = 12; //en vh
    export let links = ["Profil 0", "Contact 1"];
    let Nlinks = links.length;
    export let wElement = 10; //en vw
    export let margin = 1; //en vw
    export let cElement = "#FFFFFF";

    function I(name) { return document.getElementById(name); }
	
</script>


<!------------------->
<!---- CODE HTML ---->
<!------------------->
<div class="barMenu" style="height:{height}vh;">
    {#each links as link, index}
		<a class="elementMenu" style="top:0;right:{(Nlinks-1-index)*wElement + margin}vw;height:{height}vh;width:{wElement}vw;line-height:{height}vh;font-size:{0.26*height}vh;color:{cElement};" href="#{link}">{link}</a>
	{/each}
</div>

<!------------------->
<!---- CODE CSS ----->
<!------------------->
<style>
.barMenu
{
    margin: 0;
    padding: 0;
    position: absolute;
    width:100vw;
}
.elementMenu
{
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: center;
    text-decoration: none;
    font-family: 'Roboto';
    font-weight: 400;
}
.elementMenu:hover { font-weight: 500; }
</style>