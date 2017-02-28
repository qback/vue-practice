<template>
	<div >
		<input type="text" name="filterText" v-model='filterText'>
		<ul>
			<li v-for='fruit in filteredFruits'>{{fruit}}</li>
		</ul>
	</div>
</template>

<script>
	import {fruitMixin} from './Mixins.js'

	export default {
		mixins: [fruitMixin],
		created() {
			console.warn('Привет из компонента');
		}
	}
</script>

<style>

</style>
