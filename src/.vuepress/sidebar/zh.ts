import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "palette",
      text: "我的生活",
      prefix: "life/",
      link: "life/",
      // children: "structure",
    },
    {
      icon: "creative",
      text: "我的学习",
      prefix: "study/",
      link: "study/",
    },
  ],
});
