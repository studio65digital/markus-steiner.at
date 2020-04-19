import Vue from 'vue';
import '~/assets/styles/popper.scss';
import '~/assets/styles/animations.scss';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import DefaultLayout from '~/layouts/Default.vue';




// import style


Vue.use(VueAwesomeSwiper)

export default function (Vue) {
      Vue.component('Layout', DefaultLayout);
}


// import style


