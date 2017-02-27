<template>
	<div class="container">
		<app-header :quotesCount='quotes.length' :maxCount='maxQuotes'></app-header>
		<app-enter @onAddQuote='handleAddQuote'></app-enter>
		<app-grid :quotes='quotes' @onDeleteQuote='handleDeleteQuote'></app-grid>
		<div class="row">
			<div class="col-sm-12 text-center">
				<div class="alert alert-info">
					Info: CLick on a Quote to delete it!
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import EnterQuote from './components/EnterQuote.vue';
	import GridQuotes from './components/GridQuotes.vue';
	import ProgressBar from './components/ProgressBar.vue';

	export default {
		data: function() {
			return {
				quotes: ['Default Quote', 'second quote'],
				maxQuotes: 10
			}
		},
		components: {
			'app-grid': GridQuotes,
			'app-header': ProgressBar,
			'app-enter': EnterQuote
		},
		methods: {
			handleAddQuote: function(data) {
				if (this.quotes.length >= this.maxQuotes) {
					return alert('Before add Quote, please remove another one!');
				}
				this.quotes.push(data);
			},
			handleDeleteQuote: function(index) {
				this.quotes.splice(index, 1);
			}
		}
	}
</script>

<style>
</style>
