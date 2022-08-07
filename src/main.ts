import { createApp } from "vue";
import { App } from "./App";
import { routes } from "./router/routers";
import { createRouter } from "vue-router";
import { history } from "./shared/history";
 
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history,
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);
app.use(router);
app.mount("#app");
