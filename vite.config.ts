import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      imports: [
        "vue", // 自动导入 Vue API，如 ref, reactive 等
        "vue-router", // 自动导入 Vue Router API，如 useRouter, useRoute 等
        "pinia", // 自动导入 Pinia 的 API，如 useStore
      ],
      dts: "./auto-imports.d.ts", // 自动生成 `auto-imports.d.ts` 声明文件
      // 配置哪些文件会被扫描
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, // .vue
        /\.vue\?vue/, // .vue 文件中的 <script setup>
      ],
      // 自定义目录下的导入
      dirs: [
        "./src/composables", // 自动导入 `src/composables` 目录下的函数
        "./src/stores", // 自动导入 `src/stores` 目录下的模块
      ],
      eslintrc: {
        // 解决 eslint 报错问题
        enabled: true, // 生成自动导入的 eslint 配置文件
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "192.168.31.159",
    port: 8080, // 启动端口
    open: false, // 启动后是否打开浏览器。建议关闭，首次打开的页面会热更新，否则每次都会打开新的tab页。
    cors: true, // 允许跨域
    // 本地代理接口
    proxy: {
      // dev环境
      "/api": {
        //TODO:更改为dev环境的后台服务地址
        target: "http://192.168.31.174:37373/",
        // target: "http://192.168.31.181:37008/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写路径
      },
      "/waiwang": {
        //TODO:更改为dev环境的后台服务地址
        target: "http://111.231.18.199:37008/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/waiwang/, ""), // 重写路径
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern", "legacy"
      },
    },
  },
});
