<!---- MAIN PAGE ---->

<!------------------->
<!---- CODE JS ------>
<!------------------->
<script>
	import Player from "../lib/components/Player.svelte";
	import Bar from "../lib/components/Bar.svelte";
	import Menu from "../lib/components/Menu.svelte"
	import Line from "../lib/components/Line.svelte"
	import Avatar from "../lib/components/Avatar.svelte"
	import Profil from "../lib/components/Profil.svelte"
	
	let links = ["Profil", "Parcours", "Contact"];
</script>


<!------------------->
<!---- CODE HTML ---->
<!------------------->
<section>
	<Menu links={links}></Menu>
	<Line height="60"></Line>
	<Avatar src="https://data.aerles.fr/svelte/avatar.png"></Avatar>
	<Profil title="Thomas DEGAND" subtitle="né le 20/09/2000, Croix, France" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Nullam fringilla enim nec leo aliquet venenatis. Phasellus sodales convallis lorem nec imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt diam eu imperdiet tincidunt."></Profil>
</section>


<!------------------->
<!---- CODE CSS ----->
<!------------------->
<style>
</style>