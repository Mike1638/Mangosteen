import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import "./views/App.scss";
export const App = defineComponent({
  setup() {
    return () => <RouterView></RouterView>;
  },
});
