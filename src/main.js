import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vuehead from './plugins/vuehead'

Vue.config.productionTip = false

require('./assets/scss/master.scss')

new Vue({
  router,
  vuetify,
  vuehead,
  render: h => h(App)
}).$mount('#app')
