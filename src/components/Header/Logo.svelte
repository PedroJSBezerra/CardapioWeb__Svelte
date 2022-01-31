<script>
	export let logoSrc
	let imgSrc 
	imgSrc = logoSrc

</script>

<div class="logo">
  <a href="/#" class="logo-link">
		{#if imgSrc}
    	<img src="{imgSrc}" alt="" class="logo-link__img">
		{:else}
    	<img src="" alt="" class="no-logo-link__img">
		{/if}
  </a>
</div>

<style lang="scss">
	.logo {
		flex: 1;
		display: block;
	}

	.logo-link {
		&__img {
			max-width: 100%;
      max-height: 70px;
		}
	}

	.no-logo-link {
		&__img {
			width: 150px;
			height: 70px;
		}
	}
</style>