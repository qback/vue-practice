new Vue({
	el: '#app',
	data: {
		start: true,
		health: 100,
		enemyHealth: 100,
		history: []
	},
	computed: {
		healthPRC: function() {
			return this.health + '%';
		},
		healthEnemyPRC: function() {
			return this.enemyHealth + '%';
		}
	},
	watch: {
		health: function() {
			if (this.health <= 0) {
				const result = confirm('Вы проиграли. Сыграем еще?');
				result ? this.hardReset() : this.softReset('Вы проиграли');
			}
		},
		enemyHealth: function() {
			if (this.enemyHealth <= 0) {
				const result = confirm('Вы выиграли. Сыграем еще?');
				result ? this.hardReset() : this.softReset('Вы выиграли');
			}
		}
	},
	methods: {
		calculateEnemyDamage: function(value = 0) {
			if (this.health < 1 || this.enemyHealth < 1) return;
			const randomDamage = (Math.floor(Math.random() * 10) + 1) + value;
			this.enemyHealth -= randomDamage ;
			this.history.push(`Игрок наносит урон монстру на ${randomDamage}%`);
			this.calculateOurDamage();
		},
		heal: function(value = 5) {
			if (this.health === 100 || this.health < 1 || this.enemyHealth < 1 ) return;
			this.health += value;
			this.history.push(`Игрок увеличивает здоровье на ${value}%`);
			this.calculateOurDamage();
		},
		calculateOurDamage: function(value = 0) {
			const randomDamage = Math.floor(Math.random() * 10) + 1;
			this.health -= randomDamage;
			this.history.push(`Монстр наносит урон игроку на ${randomDamage}%`);
		},
		hardReset: function(){
			this.start = false;
			this.health = 100;
			this.enemyHealth = 100;
			this.history = []
		},
		softReset: function(arg) {
			this.history = [arg];
		}

	}
});
