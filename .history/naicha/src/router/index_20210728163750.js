import { createRouter, createWebHashHistory,VueRouter} from "vue-router";
import home from "../components/home/home.vue";
import order from "../components/order/order.vue";
import shop from "../components/shop/shop.vue";
import my from "../components/my/my.vue";
import Vue from 'vue'




const routes = [
  {
    path: "/", redirect:"/index",
    
   
  },
  {
    path: "/index",
    name: "Home",
    component: home,
  },
  {
    path: "/order",
    name: "Order",
    component:order,
    
  },
  {
    path: "/shop",
    name: "Shop",
    component:shop,
    
  },
  {
    path: "/my",
    name: "My",
    component:my,
    
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
