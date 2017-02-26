// data can be preset from outside
const data = {
	title: 'The VueJS Instance',
	showParagraph: false
}

const vm1 = new Vue({
	data: data,
	methods: {
		show: function() {
			this.showParagraph = true;
			this.updateTitle('The VueJS Instance (Updated)');
			// we can access elements in instance by refs
			this.$refs.myButton.innerText = 'Test';
		},
		updateTitle: function(title) {
			this.title = title;
		}
	},
	computed: {
		lowercaseTitle: function() {
			return this.title.toLowerCase();
		}
	},
	watch: {
		title: function(value) {
			console.warn('Title changed, new value: ' + value);
		}
	}
});

// tie #app1 and *vm1* instance
vm1.$mount('#app1');

// will be true
console.log(vm1.$data === data);
// DOM methods works too
vm1.$refs.heading.innerText = 'Something else';

setTimeout(function() {
	vm1.title = 'Changed by Timer';
	vm1.show();
}, 3000);

// second instance
const vm2 = new Vue({
	el: '#app2',
	data: {
		title: 'The second Instance'
	},
	methods: {
		onChange: function() {
			// will change first instance title from second
			vm1.title = 'Changed!';
		}
	}
});

const vm3 = new Vue({
	template: '<h1>Hello!</h1>'
});

// third instance mounted
vm3.$mount();
// append instance in the existing DOM tree, *vm3.$el* return template
document.getElementById('app3').appendChild(vm3.$el);
