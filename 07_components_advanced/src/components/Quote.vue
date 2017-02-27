<template>
	<div>
		<div class='title'>
			<slot name='title'></slot>
			<!-- span have slot with default content -->
			<span style='color: #ccc'>
				<slot name='subtitle'>Quote Subtitle</slot>
			</span>
		</div>
			<slot></slot>
	</div>
</template>
<script>

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
	.title {
		text-transform: uppercase;
	}
	/*Style for h2 inside slots*/
	h2 {
		color: red;
	}

</style>
