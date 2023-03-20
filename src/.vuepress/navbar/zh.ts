import {navbar} from "vuepress-theme-hope";
import bar_zh from '../bar/bar_zh'

export const zhNavbar = navbar([
    "/",

    // customized bar
    ...bar_zh

    // { text: "案例22", icon: "discover", link: "/zh/demo/" },
    // {
    //   text: "指南",
    //   icon: "creative",
    //   prefix: "/zh/guide/",
    //   children: [
    //     {
    //       text: "Bar",
    //       icon: "creative",
    //       prefix: "bar/",
    //       children: ["baz", { text: "...", icon: "more", link: "" }],
    //     },
    //     {
    //       text: "Foo",
    //       icon: "config",
    //       prefix: "foo/",
    //       children: ["ray", { text: "...", icon: "more", link: "" }],
    //     },
    //   ],
    // },
    // {
    //   text: "V2 文档",
    //   icon: "note",
    //   link: "https://theme-hope.vuejs.press/zh/",
    // },
]);
