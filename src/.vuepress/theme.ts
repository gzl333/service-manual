import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar/index.js";
import {enSidebar, zhSidebar} from "./sidebar/index.js";

export default hopeTheme({
    hostname: "https://service.cstcloud.cn/manual",

    // author: {
    //     name: "mimas",
    //     url: "https://www.cstcloud.cn",
    // },

    // icon集
    iconAssets: "iconfont",

    logo: "/logo.png",

    // repo: "vuepress-theme-hope/vuepress-theme-hope",
    // docsDir: "demo/theme-docs/src",

    darkmode: "disable",

    locales: {
        // chinese
        "/": {
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,

            footer: '1996 - 2023 中国科学院计算机网络信息中心 版权所有 <br/> 京ICP备09112257号-94',

            displayFooter: true,

            lastUpdated: true,

            contributors: true,

            copyright: false,

            // page meta
            metaLocales: {
                lastUpdated: '上次编辑于',
                contributors: '编辑者',
                editLink: "在 GitHub 上编辑此页",
            },
        },
        // english
        "/en/": {
            // navbar
            navbar: enNavbar,

            // sidebar
            sidebar: enSidebar,

            footer: "Default footer",

            displayFooter: true,

            metaLocales: {
                lastUpdated: 'Last updated on',
                editLink: "Edit this page on GitHub",
            },
        },


    },

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
            "/zh/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
        // 评论栏目
        comment: false,

        // dev模式下，git信息的热更新
        // git: true,

        // 为每个文件夹自动生成带有目录的 README.md
        // autoCatalog: true,

        // all features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },

        // uncomment these if you want a pwa
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
