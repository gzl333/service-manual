import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    /*站点配置*/
    base: '/manual/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '用户手册',
            description: '用户手册',
        },
        '/en/': {
            lang: 'en-US',
            title: 'User Manual',
            description: 'User Manual'
        }
    },
    /*站点配置*/

    /*主题配置*/
    themeConfig: {
        darkMode: false,
        contributors: false,
        'themePlugins.activeHeaderLinks': true,
        'themePlugins.backToTop': true,
        'themePlugins.nprogress': true,
        // 分语言配置
        locales: {
            // 中文页面的配置
            '/': {
                selectLanguageText: '语言',
                selectLanguageName: '简体中文',
                lastUpdatedText: '最后更新',
                logo: null, //'https://fed.cstcloud.cn/title.png', // 中文logo
                navbar: [
                    {
                        text: '首页',
                        link: '/',
                    },
                    {
                        text: '关于我们',
                        link: '/about/',
                    },
                    {
                        text: '资源与服务',
                        link: '/resource/',
                    },
                    {
                        text: '应用案例',
                        link: '/case/',
                    },
                    // {
                    //     text: '科研云主机',
                    //     link: '/server/',
                    // },
                    // {
                    //     text: '对象存储',
                    //     link: '/storage/',
                    // },
                    {
                        text: '个人云主机',
                        link: '/personal/',
                    },
                    {
                        text: '项目组云主机',
                        link: '/group/',
                    },
                    {
                        text: 'VPN使用方法',
                        link: '/vpn/',
                    }
                ],
            },
            // 英文页面的配置
            '/en/': {
                selectLanguageText: 'Language',
                selectLanguageName: 'English',
                lastUpdatedText: 'Last Updated',
                logo: null, //  'https://fed.cstcloud.cn/title_en_2.png', // 英文logo
                navbar: [
                    {
                        text: 'Home',
                        link: '/en/', // 注意链接地址加/en/
                    },
                    // {
                    //     text: 'Personal Resources',
                    //     link: '/en/personal/',
                    // },
                    // {
                    //     text: 'Group Resources',
                    //     link: '/en/group/',
                    // },
                    {
                        text: 'VPN',
                        link: '/en/vpn/',
                    }
                ],
            },
        },

    },
    /*主题配置*/
})
