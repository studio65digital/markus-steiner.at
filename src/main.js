import Vue from 'vue';
import '~/assets/styles/global.scss'
import '~/assets/styles/animations.scss'
import DefaultLayout from '~/layouts/Default.vue';


export default function (Vue) {
      Vue.component('Layout', DefaultLayout);
}

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)