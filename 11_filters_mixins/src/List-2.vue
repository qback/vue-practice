<template>
	<div >
		<input type="text" name="filterText" v-model='filterText'>
		<ul>
			<li v-for='fruit in filteredFruits'>{{fruit}}</li>
		</ul>
		<!-- new value added to array will merge with mixin data and won't affect other components where mixin is used-->
		<button @click='fruits.push("Огурчик")'>Add another fruit</button>
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
