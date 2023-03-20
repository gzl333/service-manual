/*
* 自行定义的bar数组，在navbar和sidebar里引入使用。只需在此配置一次。
* */

export default [
    {
        text: "关于",
        icon: "info",
        prefix: "/about/",
        children: [
            {
                text: "项目信息",
                // icon: "project",
                link: "project/",
            },
            {
                text: "资源与服务",
                // icon: "config",
                link: "resource/",
            },
            {
                text: "应用案例",
                // icon: "config",
                link: "case/",
            },
        ],
    },
    {
        text: "云主机",
        icon: "computer",
        prefix: "/server/",
        children: [
            {
                text: "云主机操作",
                // icon: "config",
                link: "personal/",
            },
            {
                text: "项目组",
                // icon: "config",
                link: "group/",
            },
            {
                text: "VPN使用",
                // icon: "config",
                link: "vpn/",
            },
        ],
    },
    {
        text: "对象存储",
        icon: "stack",
        link: "/storage/"
    },
    {
        text: "更新日志",
        icon: "blog",
        prefix: "/change/",
        children: [
            {
                text: "一体化云服务平台",
                icon: "software",
                prefix: "service/",
                children: [
                    {
                        text: "云主机",
                        // icon: "creative",
                        link: "server/"
                    },
                    {
                        text: "对象存储",
                        // icon: "creative",
                        link: "storage/"
                    },
                    {
                        text: "用量账单",
                        // icon: "creative",
                        link: "usage/"
                    },
                    {
                        text: "综合监控",
                        // icon: "creative",
                        link: "monitor/"
                    },
                    {
                        text: "用户支持",
                        // icon: "creative",
                        link: "support/"
                    },
                    {
                        text: "钱包",
                        // icon: "creative",
                        link: "wallet/"
                    },
                ],
            },
            {
                text: "数据统计平台",
                icon: "rank",
                link: "report/",
            },
            {
                text: "智能运管平台",
                icon: "layout",
                link: "aiops/",
            },
        ],
    },
]
