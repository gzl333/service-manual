import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({

  base: "/manual/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "一体化云服务平台-用户手册",
      description: "一体化云服务平台-用户手册",

    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Integrated Service Platform - User Manual",
    //   description: "Integrated Service Platform - User Manual",
    // }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
