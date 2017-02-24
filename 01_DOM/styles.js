new Vue({
	el: '#app',
	data: {
		attachRed: false,
		color: 'green',
		width: 120
	},
	computed: {
		// need to be in computed because depends on attachRed
		divClasses: function() {
			return {
				blue: true,
				red: this.attachRed
			}
		},
		divStyles: function() {
			return {
				backgroundColor: this.color,
				width: this.width + 'px'
			}
		}
	}
})
