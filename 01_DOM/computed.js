new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0
	},
	computed: {
		output: function() {
			console.log('Computed');
			// will work by perforce (only when first counter changes)
			return this.counter > 5 ? 'Greater than 5' : 'Not enough ';
		}
	},
	watch: {
		//will work only when counter in data has changed
		//can be used in asyncronious operations
		counter: function(value) {
			const self = this;
			setTimeout(function() {
				self.counter = 0;
			}, 3000);
		}
	},
	methods: {
		//will work always(reexecutes always)
		result: function() {
			console.log('Method');
			return this.counter > 5 ? 'Greater than 5' : 'Not enough ';
		}
	}
})
