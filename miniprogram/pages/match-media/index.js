Page({
    data: {
        title: 'match-media',
        date: '2021-03-16',
        blockquota: '基础库 2.11.1 开始支持，低版本需做兼容处理。',
        desc: '<span class="span">media query</span> 匹配检测节点。<br/><br/>可以指定一组 <span class="span">media query</span> 规则，满足时，这个节点才会被展示。通过这个节点可以实现“ 页面宽高在某个范围时才展示某个区域” 这样的效果。 ',
        attrs: [{
            name: 'min-width',
            type: 'number',
            default: '',
            required: false,
            desc: '页面最小宽度（ px 为单位）',
            version: '2.11.1'
        }, {
            name: 'max-width',
            type: 'number',
            default: '',
            required: false,
            desc: '页面最大宽度（ px 为单位）',
            version: '2.11.1'
        }, {
            name: 'width',
            type: 'number',
            default: '',
            required: false,
            desc: '页面宽度（ px 为单位）',
            version: '2.11.1'
        }, {
            name: 'min-height',
            type: 'number',
            default: '',
            required: false,
            desc: '页面最小高度（ px 为单位）',
            version: '2.11.1'
        }, {
            name: 'max-height',
            type: 'number',
            default: '',
            required: false,
            desc: '页面最大高度（ px 为单位）',
            version: '2.11.1'
        }, {
            name: 'height',
            type: 'number',
            default: '',
            required: false,
            desc: '页面高度（ px 为单位）',
            version: '2.11.1'
        }, {
            name: 'orientation',
            type: 'string',
            default: '',
            required: false,
            desc: '屏幕方向（ landscape 或 portrait ）',
            version: '2.11.1'
        }],
        demos: [{
            desc: '当页面宽度在 300 ~ 600 px 之间时展示这里',
            path: '/pages/match-media/demos/demo1/index'
        }, {
            desc: '当页面高度不小于 400 px 且屏幕方向为横向时展示这里',
            path: '/pages/match-media/demos/demo2/index'
        }]
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: this.data.title,
        })
    },
})