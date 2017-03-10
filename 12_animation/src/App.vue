<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations </h1>
				<hr>
				<button class="btn btn-primary" @click='show = !show'>Show Alert</button>
				<br>
				<br>
				<!-- component *transition* allows to animate SINGLE element -->
				<transition name='fade'>
					<div class="alert alert-info" v-show='show'>Alert with fade transition</div>
				</transition>
				<!-- if we use transition and animation at the same time we need to use *type* attribute for correct view -->
				<transition name='slide' type='animation'>
					<div class="alert alert-info" v-if='show'>Alert with slide animation</div>
				</transition>
				<!-- *appear* is used for initial loading animation (only for native classes)-->
				<transition name='slide' type='animation' appear>
					<div class="alert alert-info" v-if='show'>Alert with appear and slide animation</div>
				</transition>
				<!-- using additional animation libraries(animate.css) -->
				<transition enter-active-class='animated bounce'
							leave-active-class='animated shake'>
					<div class="alert alert-info" v-if='show'>Alert with animate.css</div>
				</transition>
				<!-- type transition/animation can be changed manually via select -->
				<select name="changeTransition" id="opan'ki" v-model='alertAnimation' class="form-control">
					<option value="fade">Fade</option>
					<option value="slide">Slide</option>
				</select>
				<transition :name='alertAnimation'>
					<div class="alert alert-info" v-show='show'>Alert with fade transition</div>
				</transition>
				<hr>
				<!-- mode allows to make animation more smooth, first element fades out, second fades in-->
				<!-- keys allows use 2 or more elements in transition component -->
				<transition :name='alertAnimation' mode='out-in'>
					<div class="alert alert-info" v-if='show' key='info'>Alert with fade transition</div>
					<div class="alert alert-warning" v-if='!show' key='warning'>Alert with fade transition</div>
				</transition>
				<h2>Using JS hooks</h2>
				<button class="btn btn-primary" @click='load = !load'>Show Alert</button>
				<br>
				<br>
				<!-- animation/transition hooks, *:css* allows use JS hooks and skip css animation detection -->
				<transition @before-enter="beforeEnter"
							@enter="enter"
							@after-enter="afterEnter"
							@enter-cancelled="enterCancelled"
							@before-leave="beforeLeave"
							@leave="leave"
							@after-leave="after-leave"
							@leave-cancelled="leaveCancelled"
							:css='false'>
					<div style='width: 100px; height: 100px; background-color: lightgreen' v-if='load'></div>
				</transition>
				<hr>
				<button class="btn btn-primary"
						@click='switchComponents'>
					Show Alert
				</button>
				<br>
				<br>
				<transition name='fade' mode='out-in'>
					<!-- using dynamic component -->
					<component :is='selectedComponent'></component>
				</transition>
				<br>
				<app-group></app-group>
			</div>
		</div>
	</div>
</template>

<script>
	import SuccessAlert from './SuccessAlert.vue';
	import WarningAlert from './WarningAlert.vue';
	import TransitionGroup from './TransitionGroup.vue';

	export default {
		data() {
			return {
				show: true,
				load: true,
				elementWidth: 100,
				alertAnimation: 'fade',
				selectedComponent: 'app-alert-success'
			}
		},
		components: {
			'app-alert-success': SuccessAlert,
			'app-alert-warning': WarningAlert,
			'app-group': TransitionGroup
		},
		methods: {
			switchComponents() {
				this.selectedComponent === 'app-alert-success' ? this.selectedComponent = 'app-alert-warning' : this.selectedComponent = 'app-alert-success'
				},
			beforeEnter(el){
				console.log('beforeEnter...');
				// initial state
				this.elementWidth = 100;
				el.style.width = this.elementWidth + 'px';

			},
			enter(el, done){
				console.log('enter...')
				// width grows in 20 steps for 0.4 seconds
				let round = 1;
				const interval = setInterval(() => {
					el.style.width = this.elementWidth + round * 10 + 'px';
					round++;
					if( round > 20) {
						clearInterval(interval);
						// animation is done
						done();
					}
				}, 20);
			},
			afterEnter(el){
				console.log('afterEnter...')
			},
			enterCancelled(el){
				console.log('enterCancelled...')
			},
			beforeLeave(el){
				console.log('beforeLeave...');
				this.elementWidth = 300;
				el.style.width = this.elementWidth + 'px';
			},
			leave(el, done){
				console.log('leave...')
				// width shrinks in 20 steps for 0.4 seconds
				let round = 1;
				const interval = setInterval(() => {
					el.style.width = this.elementWidth - round * 10 + 'px';
					round++;
					if( round > 20) {
						clearInterval(interval);
						done();
					}
				}, 20);
			},
			afterLeave(el){
				console.log('afterLeave...');
			},
			leaveCancelled(el){
				console.log('leaveCancelled...')
			}
		}
	}
</script>

<style>
	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		transition: opacity .5s;
	}
	.fade-leave {
		/*opacity: 1;*/
	}
	.fade-leave-active {
		transition: opacity .5s;
		opacity: 0;
	}
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
