import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import "@/assets/main.css"
import { Icon } from '@iconify/vue2'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Drawer from "@/components/Drawer"
import Music from "@/components/Music"
import Vant from "vant"
// import player from '@/components/AudioPlayer/player'
import { IndexAnchor,IndexBar,NoticeBar,Sticky,ActionSheet,Popup,Switch,Circle,Popover   } from 'vant'

import AudioPlayer from "@/components/AudioPlayer/index"

// Vue.use(player)

// Vue.use(moduel)module的要求是什么(满足其一)
// 1、module本身就是一个函数
// 2、module不是函数但是具备一个install方法
Vue.use(AudioPlayer)
// Vue.$use=function(module){
//   if(typeof module=="function"){
//     module(this)//this指向vue
//   }else if(typeof module.install=='function'){
//     module.install(this)
//   }
// }
Vue.use(Popover);
Vue.use(Circle);
Vue.use(Switch);
Vue.use(Popup);
Vue.use(NoticeBar);
Vue.use(Sticky);
Vue.use(Vant)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(ActionSheet)
Vue.component('Icon',Icon)
Vue.component('Footer',Footer)
Vue.component('Header',Header)
Vue.component('Drawer',Drawer)
Vue.component('Music',Music)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
