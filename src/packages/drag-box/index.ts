import { App } from "vue";

/**
 * 这里默认导出一个vue支持的install方法
 * 可以在main.ts中使用以下方式全局导入组件
 *
 * import ViteVue3TsTestFjc from "vite-vue3-ts-test-fjc"
 * .....
 * app.use(ViteVue3TsTestFjc);
 */
export default {
  install(app: App) {
    app.component("Vv3Test", Vv3Test);
    // 如果还有更多的组件需要注册，可以在这里继续添加
    //  app.component("Vv3Test1", Vv3Test1);
    //  app.component("Vv3Test2", Vv3Test2);
  },
};

/**
 * 这里将组件导出，是为了在单独使用组件时，可以按需引入
 * 为了将来支持类似这样按需使用 import {Vv3Test} from "vite-vue3-ts-test-fjc";
 * 有多少个组件就添加多少个组件
 */
export { Vv3Test };

/**
 * 这里是重点，需要将这些组件在ts中声明为全局组件；
 */
declare module "vue" {
  export interface GlobalComponents {
    Vv3Test: typeof Vv3Test;
  }
}
