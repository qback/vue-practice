<template>
	<div>
		Author component
		<button @click='counter++'>Add</button>
		<p>Counter: {{counter}}</p>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				counter: 0
			}
		}
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
