import {sidebar} from "vuepress-theme-hope";
import bar_zh from '../bar/bar_zh'

export const zhSidebar = sidebar({
    "/": [
        "",

        // customized bar
        ...bar_zh

        // {
        //   icon: "discover",
        //   text: "案例",
        //   prefix: "demo/",
        //   link: "demo/",
        //   children: "structure",
        // },
        // {
        //   text: "文档",
        //   icon: "note",
        //   prefix: "guide/",
        //   children: "structure",
        // },
        // "slides",
    ],
});
