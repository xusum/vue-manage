import Vue from 'vue'
import App from './App.vue'
import { Button, Radio, Container, Main, Header, 
  Aside, Menu, Submenu, MenuItem, MenuItemGroup, 
  Dropdown, DropdownItem, DropdownMenu, Row,  
  Col, Table, TableColumn, Card} from 'element-ui';
import './assets/less/index.less'




import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock.js'




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
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Row);
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)




Vue.prototype.$http = http

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
