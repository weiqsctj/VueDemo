//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用ElementUI
// Vue.use(ElementUI);
Vue.component('weiqsctj-button', Button);
Vue.component('weiqsctj-row', Row);
Vue.component('weiqsctj-date-picker', DatePicker);

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
})
