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
                        text: '项目组资源',
                        link: '/group/',
                    },
                    {
                        text: 'VPN使用方法',
                        link: '/vpn/',
                    },
        
                    //{
                    //     text: '资源提供者',
                    //     link: '/provider/',
                    // },
                ],
            },
            // 英文页面的配置
            '/en/': {
                selectLanguageText: 'Language',
                selectLanguageName: 'English',
                lastUpdatedText: 'Last Updated',
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
                    },
                    {
                        text: 'VPN',
                        link: '/en/vpn/',
                    },
 
                    // {
                    //     text: 'Resource Providers',
                    //     link: '/en/provider/',
                    // },
                ],
            },
        },

    },
    /*主题配置*/
})
