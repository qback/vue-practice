new Vue ({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y: 0,
		name: 'Oleg'
	},
	methods: {
		add: function(step, e) {
			this.counter += step;
			console.log(e.target);
		},
		changeCoordinates: function(e) {
			this.x = e.clientX;
			this.y = e.clientY;
		},
		alertMe: function(e) {
			alert(e.target.value);
		}
	}
});
