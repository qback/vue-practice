import Vue from 'vue'
import App from './App.vue'
import SuperQuiz from './SuperQuiz.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});
new Vue({
  el: '#quiz',
  render: h => h(SuperQuiz)
})
