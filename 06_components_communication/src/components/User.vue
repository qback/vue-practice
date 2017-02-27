<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<button class='btn btn-primary' @click='changeUserName'>Change user name</button>
		<p>Current Name: {{userName}}</p>
		<p>Current Age: {{userAge}}</p>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<!-- give child props via *v-bind*-->
				<!-- catch child event via *@nameWasChanged* -->
				<app-user-detail 	v-bind:name='userName'
									@nameWasChanged='handleNameChange'
									:resetFn = 'resetName'
									:age = 'userAge'>
				</app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit 	:age = 'userAge'
								@ageWasEdited='userAge = $event'></app-user-edit>
			</div>
		</div>
	</div>
</template>

<script>
	import UserDetail from './UserDetail.vue';
	import UserEdit from './UserEdit.vue';

	export default {
		data: function() {
			return {
				userName: 'Max',
				userAge: 27
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		},
		methods: {
			changeUserName() {
				this.userName = 'Anna';
			},
			handleNameChange(data) {
				// data - second argument in this.$emit(event, data) from child
				this.userName = data;
			},
			resetName() {
				this.userName = 'Max';
			}
		}
	}
</script>

<style scoped>
	div {
		background-color: lightblue;
	}
</style>
