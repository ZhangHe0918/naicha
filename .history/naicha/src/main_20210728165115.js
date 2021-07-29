import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App)
createApp(App).use(store).use(router).mount("#app");
import { createApp } from 'vue'
import { ElIcon } from 'element-plus';
app.component(ElIcon.user, ElIcon);
/* or
 * app.use(ElButton)
 * app.use(ElSelect)
 */

