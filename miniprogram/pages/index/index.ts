// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
    data: {
        viewList: {
            category: '视图容器',
            list: [{
                label: 'cover-image',
                desc: '覆盖在原生组件之上的图片视图。',
                path: '/pages/cover-image/cover-image'
            }, {
                label: 'cover-view',
                desc: '覆盖在原生组件之上的文本视图。',
                path: '/pages/cover-view/index'
            }, {
                label: 'match-media',
                desc: 'media query 匹配检测节点。',
                path: '/pages/match-media/index'
            }]
        },
        mediaList: {
            category: '媒体组件',
            list: [
                {
                    label: 'video',
                    desc: '视频（v2.4.0 起支持同层渲染）。',
                    path: '/pages/video/index'
                },
                {
                    label: 'live-player',
                    desc: '实时音视频播放（v2.9.1 起支持同层渲染）。',
                    path: '/pages/live-player/index'
                }],
        },
    },
    onLoad() {

    },
})
