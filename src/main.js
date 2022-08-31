import Vue from 'vue'
import App from './App.vue'
import { Button, Radio, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, } from 'element-ui';
import router from '../router'





Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Radio);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
