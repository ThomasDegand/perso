<!---- PLAYER ------->


<!------------------->
<!---- CODE JS ------>
<!------------------->
<script>
	export let srcMP4 = "";
	export let srcCaptions = "";
</script>


<!------------------->
<!---- CODE HTML ---->
<!------------------->
<div id="player" class="player">
	<video id="playerVideo" class="playerVideo" src="{srcMP4}">
		<source type="video/mp4" src="{srcMP4}"/>
		<track default kind="captions" srclang="fr" src="{srcCaptions}"/>
	</video>
	
</div>


<!------------------->
<!---- CODE CSS ----->
<!------------------->
<style>
	.player
	{
		margin: 0;
		padding: 0;
		background: #000000;
		height: 180px;
		width: 320px;
	}

	.playerVideo
	{
		margin: 0;
		padding: 0;
		background: #000000;
		width: 320px;
	}
</style>