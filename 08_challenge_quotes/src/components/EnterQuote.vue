<template>
	<div class='row'>
		<form>
			<div class='col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group'>
				<label for="quote">Quote</label>
				<textarea id='quote' class='form-control' type="text" ref='quote-input' name="enter" v-model='quote'></textarea>
			</div>
			<div class='col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group'>
				<button type='submit' class='btn btn-primary' @click.prevent='addQuote'>Add Quote</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				quote: ''
			}
		},
		methods: {
			addQuote(event) {
				if (this.quote === '') {
					return alert('Please add something as a Quote!')
				}
				this.$emit('onAddQuote', this.quote);
				this.quote = '';
			}
		}
	}
</script>

<style>

</style>
