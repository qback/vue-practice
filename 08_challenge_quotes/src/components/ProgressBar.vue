<template>
	<div class="row">
		<div class="col-sm-12">
			<h3 class='text-center'>Quotes added</h3>
			<div class="progress">
				<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" :style='divStyle'>
					{{quotesCount}} / {{maxCount}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			'quotesCount': Number,
			'maxCount': Number
		},
		computed: {
			divStyle: function () {
				return {
					width: this.quotesCount  / this.maxCount * 100 + '%'
				}
			}
		}
	}
</script>

<style>

</style>
