import { defineClientConfig } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper.js";
import HomePage from "@theme-hope/components/HomePage.js";
import NormalPage from "@theme-hope/components/NormalPage.js";
import Navbar from "@theme-hope/modules/navbar/components/Navbar.js";
import Sidebar from "@theme-hope/modules/sidebar/components/Sidebar.js";
import Layout from "E:/cyun/knowledge/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "E:/cyun/knowledge/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index.js";
import { injectDarkMode, setupDarkMode } from "@theme-hope/modules/outlook/composables/index.js";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index.js";

import "E:/cyun/knowledge/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import Slide from "E:/cyun/knowledge/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js";


export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    // register to inject styles
    app.component("CommonWrapper", CommonWrapper);
    app.component("HomePage", HomePage);
    app.component("NormalPage", NormalPage);
    app.component("Navbar", Navbar);
    app.component("Sidebar", Sidebar);

    
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    
  },
  layouts: {
    Layout,
    NotFound,
    Slide,
    
  }
});