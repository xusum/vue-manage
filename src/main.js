import Vue from 'vue'
import App from './App.vue'
import { Button,Radio} from 'element-ui';
import router from '../router'




Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Radio.name, Radio);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
