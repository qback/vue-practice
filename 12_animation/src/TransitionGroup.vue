<template>
	<div>
		<h2>Transition group</h2>
		<button class="btn btn-primary" @click='addItem'>Add item</button>
		<br>
		<ul class="list-group">
			<!-- *key* is necessary-->
			<transition-group name='slide'>
				<li class="list-group-item text-center"
					v-for='(number, index) in numbers'
					@click='removeItem(index)'
					style='cursor: pointer'
					:key='number'>
						{{number}}
					</li>
			</transition-group>

		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				numbers: [1, 2, 3, 4, 5]
			}
		},
		methods: {
			addItem() {
				this.numbers.unshift(this.numbers.length + 1);
			},
			removeItem(index) {
				this.numbers.splice(index, 1);
			}
		}
	}
</script>
<style >
	.slide-enter {
		opacity: 0;
	}
	.slide-enter-active {
		animation: slide-in .5s forwards;
		transition: opacity .5s;
	}
	.slide-leave {

	}
	.slide-leave-active {
		animation: slide-out .5s forwards;
		transition: opacity 1s;
		opacity: 0;
		/* is required for killing snap between items*/
		position: absolute;
	}
	/*siblings move class*/
	.slide-move {
		/*is required for list item animation*/
		transition: transform .5s;
	}
	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>
