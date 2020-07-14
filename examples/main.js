import Vue from 'vue'
import App from './App.vue'
import activityUI from '../packages/index.js'

import './assets/global.css'

Vue.config.productionTip = false
Vue.use(activityUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
