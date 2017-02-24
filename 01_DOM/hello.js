new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'https://google.com',
		linkHTML: '<a href="https://google.com" target="_blank">Google</a>'
	},
	methods: {
		sayHello:function() {
			//vue proxies *this.title* for more convinient usage inside app
			this.title = 'Hello!';
			return this.title;
		}
	}
});
