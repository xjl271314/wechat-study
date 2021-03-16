// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
    data: {
        categoryList: {
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
    },
    onLoad() {

    },
})
