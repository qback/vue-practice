import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
	// code can be used everywhere in the app
	methods: {
		changeAge(age) {
			this.$emit('ageWasEdited', age);
		}
	}
});

new Vue({
	el: '#app',
	render: h => h(App)
})
