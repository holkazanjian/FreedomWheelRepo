// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { TweenMax, TimelineLite, EasePack, Draggable } from "gsap";
Vue.config.productionTip = false;
import store from "./store.js";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  store
});
