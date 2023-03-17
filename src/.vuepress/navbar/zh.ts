import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    // { text: "案例22", icon: "discover", link: "/zh/demo/" },
    {
        text: "关于",
        icon: "creative",
        prefix: "/about/",
        children: [
            {
                text: "关于项目",
                icon: "creative",
                link: "project/",
            },
            {
                text: "资源与服务",
                icon: "config",
                link: "resource/",
            },
            {
                text: "应用案例",
                icon: "config",
                link: "case/",
            },
        ],
    },
    {
        text: "云主机",
        icon: "creative",
        prefix: "/server/",
        children: [
            {
                text: "云主机操作",
                icon: "config",
                link: "personal/",
            },
            {
                text: "项目组",
                icon: "config",
                link: "group/",
            },
            {
                text: "VPN使用",
                icon: "config",
                link: "vpn/",
            },
        ],
    },
    {
        text: "对象存储",
        icon: "creative",
        link: "/storage/"
    },
    {
        text: "更新日志",
        icon: "creative",
        prefix: "/change/",
        children: [
            {
                text: "一体化云服务平台",
                icon: "creative",
                prefix: "service/",
                children: [
                    {
                        text: "云主机",
                        icon: "creative",
                        link: "server/"
                    },
                    {
                        text: "对象存储",
                        icon: "creative",
                        link: "storage/"
                    },
                    {
                        text: "用量账单",
                        icon: "creative",
                        link: "usage/"
                    },
                    {
                        text: "综合监控",
                        icon: "creative",
                        link: "monitor/"
                    },
                    {
                        text: "用户支持",
                        icon: "creative",
                        link: "support/"
                    },
                    {
                        text: "钱包",
                        icon: "creative",
                        link: "wallet/"
                    },
                ],
            },
            {
                text: "数据统计平台",
                icon: "config",
                link: "report/",
            },
            {
                text: "智能运管平台",
                icon: "config",
                link: "aiops/",
            },
        ],
    },
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
