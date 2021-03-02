import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";

export default defineComponent({
  name: "App",
  components: { HelloWorld },
  data() {
    return {
      count: [0, 2, 4],
    };
  },
  render: () => <HelloWorld msg={"123"} />,
});
