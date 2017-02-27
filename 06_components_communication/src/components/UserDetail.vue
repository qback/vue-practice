<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User name: {{name}}</p>
		<p>User name reversed: {{switchName()}}</p>
		<p>User age: {{age}}</p>
		<button class='btn btn-secondary' @click='resetName'>Reset Name <small>(back to parent)</small></button>
		<!-- by click activate function from parent without $emit-->
		<button class='btn btn-secondary' @click='resetFn()'>Reset Name <small>(Fn from parent)</small></button>
	</div>
</template>

<script>
	import {eventBus} from '../main.js';

	export default {
		//  props from parent (array or object)
		props: {
			age: Number,
			resetFn: Function,
			name: {
				type: String,
				default: 'Max'
			}
				// if default is array or object
				/*default: function() {
					return {
						name: 'Max'
					}
				}*/
		},
		methods: {
			switchName() {
				// we can use incoming props as a data (this.name)
				return this.name.split('').reverse().join('');
			},
			resetName() {
				// this.name = 'Max';
				// event go up to the parrent, data - second argument
				this.$emit('nameWasChanged', 'Max');
			}
		},
		created() {
			eventBus.$on('ageWasEdited', (data) => {
				this.age = data;
			})
		}
	}
</script>

<style scoped>
	div {
		background-color: lightcoral;
	}
</style>
