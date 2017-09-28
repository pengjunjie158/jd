import Vue from "vue";
import Index from "./components/index.vue";  

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);


import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios,axios)

new Vue({
    el:"#app",
    render:xx=>xx(Index)
})
