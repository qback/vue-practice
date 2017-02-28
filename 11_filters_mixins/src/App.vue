<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters an Mixins</h1>
				<!-- using filter *toUpperCase* after pipe -->
				<p>{{text | toUpperCase}}</p>
				<p>{{text | to-lowercase}}</p>
				<!-- couple filters combined -->
				<p>{{text | toUpperCase | to-lowercase}}</p>
				<hr>
				<h3>Filter with computed property usage</h3>
				<input type="text" name="filterText" v-model='filterText'>
				<ul>
					<li v-for='fruit in filteredFruits'>{{fruit}}</li>
				</ul>
				<hr>
				<div>
					<h3>Imported component using mixin</h3>
					<app-list></app-list>
					<h3>Another imported component using mixin</h3>
					<app-list2></app-list2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import List from './List.vue'
	import List2 from './List-2.vue'

	export default {
		data() {
			return {
				text: 'Дратути',
				fruits: ['Бананчик', 'Манго', 'Апельсинчик', 'Мандаринчик'],
				filterText: ''
			}
		},
		components: {
			'app-list': List,
			'app-list2': List2
		},
		//local filters (don't change data, only view)
		filters: {
			// value is necessary
			toUpperCase(value) {
				return value.toUpperCase();
			}
		},
		computed: {
			// using computed instead filter for better perfomance
			filteredFruits() {
				return this.fruits.filter((item) => {
					return item.toLowerCase().match(this.filterText.toLowerCase());
				});
			}
		}
	}
</script>

<style>

</style>
