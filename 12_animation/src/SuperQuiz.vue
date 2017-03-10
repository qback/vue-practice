<template>
	<div class="container">
		<div class="col-sm-8 col-sm-offset-2">
			<div class="panel panel-default">
				<div class="panel-heading">What's {{firstNumber}} - {{secondNumber}}</div>
				<div class="panel-body">
					<button class="btn btn-primary">{{result}}</button>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	function calculateRandom(max) {
		return Math.floor(Math.random() * max + 1);
	}
	export default {
		data() {
			return {
				numbers: [],
				firstNumber: 0,
				secondNumber: 0,
				randomButton: calculateRandom(4)
			}
		},
		computed: {
			result() {
				return this.firstNumber - this.secondNumber;
			}
		},
		created() {
			this.firstNumber = calculateRandom(100);
			this.secondNumber = calculateRandom(100);
		},
		beforeMount() {
			// todo later
		}
	}

</script>
<style >


</style>
