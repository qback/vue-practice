<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Directives</h1>
				<div>
					<h3>Built-in directives</h3>
					<p v-text='"v-text directive text"'></p>
					<p v-html='"<strong>v-html directive text</strong>"'></p>
				</div>
				<div>
					<h3>Custom directives</h3>
					<p v-highlight> Text with global custom directive</p>
					<p v-highlight-value='"lightblue"'> Text with global custom directive</p>
					<p v-highlight-arg:background='"chocolate"'> Text with global custom directive</p>
					<p v-highlight-mod.delayed='"coral"'> Text with global custom directive</p>
					<p v-highlight-local:background.blink=
						'{defaultColor:"teal", customColor:"lawngreen", delay: 500}'>
						Text with local custom directive</p>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		// local custom directive
		directives: {
			'highlight-local': {
				bind(el, binding, vnode) {
					const defaultColor = binding.value.defaultColor;
					const customColor = binding.value.customColor;
					const delay = binding.value.delay;
					let currentColor = defaultColor;
					if (binding.modifiers['blink']) {
						setInterval(() => {
							currentColor === defaultColor ? currentColor = customColor : currentColor = defaultColor;
							if (binding.arg === 'background') {
								el.style.backgroundColor = currentColor;
							} else {
								el.style.color = currentColor;
							}
						}, delay)
					} else {
						if (binding.arg === 'background') {
							el.style.backgroundColor = binding.value.defaultColor;
						} else {
							el.style.color = binding.value.defaultColor;
						}
					}
				}
			}
		}
	}
</script>

<style>

</style>
