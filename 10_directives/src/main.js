import Vue from 'vue'
import App from './App.vue'

//creating custom directive
Vue.directive('highlight', {
	// *bind* is hook (first of 5)
	bind(el, binding, vnode) {
		// hardcoded variant
		el.style.backgroundColor = 'lightgreen';
	}
});

Vue.directive('highlight-value', {
	bind(el, binding, vnode) {
		// using binding
		el.style.backgroundColor = binding.value;
	}
});

Vue.directive('highlight-arg', {
	bind(el, binding, vnode) {
		// using arguments [:arg]
		if (binding.arg === 'background') {
			el.style.backgroundColor = binding.value;
		} else {
			el.style.color = binding.value;
		}
	}
});

Vue.directive('highlight-mod', {
	bind(el, binding, vnode) {
		// using modifiers [.mod]
		let delay = 0;
		if (binding.modifiers['delayed']) {
			delay = 3000;
		}
		setTimeout(function() {
			el.style.backgroundColor = binding.value;
			console.warn('Custom directive worked out!');
		}, delay)
	}
});

new Vue({
	el: '#app',
	render: h => h(App)
})
