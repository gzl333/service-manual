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
                logo: 'https://fed.cstcloud.cn/title.png',
                navbar: [
                    {
                        text: '首页',
                        link: '/',
                    },
                    {
                        text: '个人资源',
                        link: '/personal/',
                    },
                    {
                        text: '小组资源',
                        link: '/group/',
                    }, {
                        text: '资源提供者',
                        link: '/provider/',
                    },
                ],
            },
            // 英文页面的配置
            '/en/': {
                selectLanguageText: 'Language',
                selectLanguageName: 'English',
                logo: 'https://fed.cstcloud.cn/title_en_2.png',
                navbar: [ 
                    {
                        text: 'About',
                        link: '/en/', // 注意链接地址加/en/
                    },
                    {
                        text: 'Personal Resources',
                        link: '/en/personal/',
                    },
                    {
                        text: 'Group Resources',
                        link: '/en/group/',
                    }, {
                        text: 'Resource Providers',
                        link: '/en/provider/',
                    },
                ],
            },
        },

    },
    /*主题配置*/
})
