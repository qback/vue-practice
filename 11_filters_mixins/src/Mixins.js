export const fruitMixin = {
	data() {
		return {
			fruits: ['Бананчик', 'Манго', 'Апельсинчик', 'Мандаринчик'],
			filterText: ''
		}
	},
	computed: {
		// using computed instead filter for better perfomance
		filteredFruits() {
			return this.fruits.filter((item) => {
				return item.toLowerCase().match(this.filterText.toLowerCase());
			});
		}
	},
	created() {
		// data from mixin ca be merged with component data and can be rewrited
		console.warn('Привет из миксина!');
	}
}
