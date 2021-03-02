import { defineComponent } from "vue";

interface IHelloWorldProps {
  msg: string;
}
const HelloWorld = defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: (props) => () => <h1>{props.msg}</h1>,
});

// type x = typeof HelloWorld;

// h<{msg: string}>(HelloWorld);
// h(HelloWorld, { msg: 123 });
// h(HelloWorld, { msg: "str" });

export default HelloWorld;
