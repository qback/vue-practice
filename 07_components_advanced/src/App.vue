<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
			<!-- buttons switch dynamic component content -->
				<button @click='selectedComponent="app-quote"'>Quote</button>
				<button @click='selectedComponent="app-author"'>Author</button>
				<button @click='selectedComponent="app-new"'>New</button>
				<br>
				<p>Selected Component: <span style='color: red'>
					{{selectedComponent}}
				</span></p>
				<!-- *component* - reserved word for dynamic component -->
				<!-- allows to switch components using button -->
				<component :is='selectedComponent'>
					<p>Default Content</p>
				</component>
				<hr>
				<!-- will prevent components from destroying -->
				<keep-alive>
					<component :is='selectedComponent'>
						<p>Default Content</p>
					</component>
				</keep-alive>
				<hr>
				<app-quote>
					<!-- will render in the named slot -->
					<h2 slot='title'>Quote header</h2>
					<!-- will be rendered in the default slot -->
					<p>{{quote}}</p>
				</app-quote>
			</div>
		</div>
	</div>
</template>

<script>
	import Quote from './components/Quote.vue'
	import New from './components/New.vue'
	import Author from './components/Author.vue'

	export default {
		// data can be interpolated inside *app-quote*
		data: function() {
			return {
				quote: 'Wonderful quote!',
				selectedComponent: 'app-quote'
			}
		},
		components: {
			'app-quote': Quote,
			'app-author': Author,
			'app-new': New
		}
	}
</script>

<style>
	/*will not affect h2 inside *app-quote* */
	h2 {
		color: green;
	}
</style>
