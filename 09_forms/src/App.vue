<template>
	<div class="container">
		<form>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<h1>File a Complaint</h1>
					<hr>
					<div class="form-group">
						<label for="email">Mail</label>
						<!-- data-binding via *v-model*-->
						<!-- *v-model* modifiers: lazy, number, trim-->
						<input
								type="text"
								id="email"
								class="form-control"
								v-model.trim='userData.email'>
					</div>
					<div class="form-group">
						<!-- *v-model* is the same as *v-bind:value* and *@input* combined -->
						<label for="password">Password</label>
						<input
								type="password"
								id="password"
								class="form-control"
								:value='userData.password'
								@input='userData.password = $event.target.value'>
					</div>
					<div class="form-group">
						<label for="age">Age</label>
						<input
								type="number"
								id="age"
								class="form-control"
								v-model.number='userData.age'>
					</div>

				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
					<label for="message">Message</label><br>
					<!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
					<textarea
							id="message"
							rows="5"
							class="form-control"
							v-model='text'></textarea>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<!-- two checkboxes below use the same model, pushing values in the one array -->
					<div class="form-group">
						<label for="sendmail">
							<input
									type="checkbox"
									id="sendmail"
									value="SendMail"
									v-model='sendMails'> Send Mail
						</label>
						<label for="sendInfomail">
							<input
									type="checkbox"
									id="sendInfomail"
									value="SendInfoMail"
									v-model='sendMails'> Send Infomail
						</label>
					</div>

				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
					<!-- vue stores checked radiobuttons value in *gender*-->
					<label for="male">
						<input
								type="radio"
								id="male"
								value="Male"
								v-model='gender'> Male
					</label>
					<label for="female">
						<input
								type="radio"
								id="female"
								value="Female"
								v-model='gender'> Female
					</label>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
					<label for="priority">Priority</label>
					<select
							id="priority"
							class="form-control"
							v-model='selectedPriority'>
							<!-- default can be assigned using *selected(bool)* -->
						<option v-for='priority in priorities'>
							{{priority}}
						</option>
					</select>
				</div>
			</div>
			<hr>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
					<!-- https://ru.vuejs.org/v2/guide/components.html#Поля-ввода-форм-с-использованием-пользовательских-событий -->
					<app-switch v-model='switched'></app-switch>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<button
							class="btn btn-primary"
							@click.prevent='formSubmitted'>Submit!
					</button>
				</div>
			</div>
		</form>
		<hr>
		<div class="row" v-if='isSubmitted'>
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4>Your Data</h4>
					</div>
					<div class="panel-body">
						<p>Mail: {{userData.email}}</p>
						<p>Password: {{userData.password}}</p>
						<p>Age: {{userData.age}}</p>
						<p>Message: {{text}}</p>
						<p><strong>Send Mail?</strong></p>
						<ul>
							<!-- render checked checkboxes values -->
							<li v-for='item in sendMails'>{{item}}</li>
						</ul>
						<p>Gender: {{gender}}</p>
						<p>Priority: {{selectedPriority}}</p>
						<p>Switched: {{switched}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Switch from './Switch.vue';

	export default {
		data() {
			return {
				userData: {
					email: '',
					password: '',
					age: 25
				},
				text: 'Обычный непримечательный текст',
				sendMails: [],
				// can be used with default value(radiobutton will be checked)
				gender: 'Male',
				selectedPriority: 'Medium',
				priorities: ['High', 'Medium', 'Low'],
				switched: true,
				isSubmitted: false
			}
		},
		components: {
			appSwitch: Switch
		},
		methods: {
			formSubmitted() {
				this.isSubmitted = true;
			}
		}
	}
</script>

<style>

</style>
