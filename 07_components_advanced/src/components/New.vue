<template>
	<div>
		New component
	</div>
</template>
<script>
	export default {
		destroyed() {
			//allows see that instance will be destroyed when we use dynamic *component*
			console.warn('New was destroyed!!!');
		},
		// hooks could be used if destoyed is not avaliable
		activated() {
			console.warn('New was activated!!!');
		},
		deactivated() {
			console.warn('New was deactivated!!!');
		},
	}

</script>
<style scoped>
	div {
		bottom: 1px solid  #ccc;
		-webkit-box-shadow: 1px 1px 2px black;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin: 30px auto;
		text-align: center;
	}

</style>
