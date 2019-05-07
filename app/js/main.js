import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import Vuetify from 'vuetify';
import config from './config';
// import 'style-loader!css-loader!vuetify/dist/vuetify.min.css';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;


Vue.use(Vuetify,{theme: config.theme});

new Vue({
    el: "#app",
    router,
    components: {
        App,
    },
    template: "<App/>",
});

