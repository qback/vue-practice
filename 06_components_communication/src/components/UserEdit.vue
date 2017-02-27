<template>
	<div class="component">
		<h3>You may edit the User here</h3>
		<p>Edit me!</p>
		<p>Age: {{age}}</p>
		<button class='btn' @click='editAge'>Edit age <small>via EventBus</small></button>
		<br><br>
		<button class='btn' @click='editAgeFn'>Edit age <small>via EventBus Fn</small></button>
		<br><br>
		<button class='btn' @click='editParentAge'>Edit age <small>via parent-child</small></button>
	</div>
</template>

<script>
	import {eventBus} from '../main.js';

	export default {
		props: ['age'],
		methods: {
			editAge() {
				this.age = 30;
				// eventBus from main.js is used
				eventBus.$emit('ageWasEdited', this.age);
			},
			editAgeFn() {
				this.age = 30;
				// eventBus method from main.js is used
				eventBus.changeAge(this.age);
			},
			editParentAge() {
				this.age = 30;
				// child -> parent is used
				this.$emit('ageWasEdited', this.age);
			}
		}
	}
</script>

<style scoped>
	div {
		background-color: lightgreen;
	}
</style>
