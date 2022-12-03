import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Cyun0221.github.io/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "橙子不秃头",
      description: "橙子不秃头的个人知识库",
    },
  },

  theme,

  shouldPrefetch: false,
});
