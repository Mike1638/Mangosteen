import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    const refcount = ref(0);
    const onclick = () => {
      refcount.value++;
    };
    return () => (
      <header>
        导航
        <ul>
          <li>
            <router-link to="/">Foo</router-link>
          </li>
          <li>
            <router-link to="/about">Bar</router-link>
          </li>
        </ul>
        <div>
          <RouterView></RouterView>
        </div>
      </header>
    );
  },
});
