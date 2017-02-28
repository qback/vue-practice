import Vue from 'vue'
import App from './App.vue'

// registering new global filter
Vue.filter('to-lowercase', function(value) {
	return value.toLowerCase();
})

// global mixin - Don't recommend to use!
Vue.mixin({
	created() {
		console.info('Привет из глобального миксина!!')
	}
})

new Vue({
	el: '#app',
	render: h => h(App)
})
