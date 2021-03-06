/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
import Vuex from "vuex";
import VModal from "vue-js-modal";
import { VueEditor } from 'vue2-editor';
Vue.use(VModal);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.component("Fetch",require("./components/Fetch.vue"));
Vue.component("articles", require("./components/Article.vue"));
Vue.component("editor", require("./components/Editor.vue"));
//Vue.component("modal", require("./components/Modal.vue"));

const app = new Vue({
  el: "#app"
});
