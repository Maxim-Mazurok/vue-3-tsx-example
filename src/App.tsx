import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";

export default defineComponent({
  name: "App",
  render: () => <HelloWorld msg={"123"} />,
});
