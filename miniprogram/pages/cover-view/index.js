Page({
    data: {
        title: 'cover-view',
        date: '2021-03-16',
        blockquota: '基础库 1.4.0 开始支持，低版本需做兼容处理。',
        desc: '覆盖在原生组件之上的文本视图。可覆盖的原生组件包括<span class="span">map</span>，<span class="span">video</span>，<span class="span">canvas</span>，<span class="span">camera</span>，<span class="span">live-player</span>，<span class="span">live-pusher</span>。<br/><br/>只支持嵌套 <span class="span">cover-view</span>、<span class="span">cover-image</span>，可在 <span class="span">cover-view</span> 中使用 <span class="span">button</span>。组件属性的长度单位默认为px，<span class="span">2.4.0</span>起支持传入单位(rpx/px)。',
        attrs: [{
            name: 'scroll-top',
            type: 'number/string',
            default: '',
            required: false,
            desc: '设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效。',
            version: '2.1.0'
        }, ],
        table1: {
            title: '支持的格式',
            head: ['格式', 'IOS', 'Android'],
            content: [
                ['JPG', '✅', '✅'],
                ['PNG', '✅', '✅'],
                ['SVG', '❌', '❌'],
                ['WEBP', '✅', '✅'],
                ['GIF', '✅', '✅'],
                ['BASE64', '❌', '❌']
            ]
        },
        tips: [
            'cover-view和cover-image的aria-role仅可设置为button，读屏模式下才可以点击，并朗读出“按钮”；为空时可以聚焦，但不可点击',
            '基础库 2.2.4 起支持 touch 相关事件，也可使用 hover-class 设置点击态',
            '基础库 2.1.0 起支持设置 scale rotate 的 css 样式，包括 transition 动画。',
            '基础库 1.9.90 起 cover-view 支持 overflow: scroll，但不支持动态更新 overflow',
            '基础库 1.9.90 起最外层 cover-view 支持 position: fixed',
            '基础库 1.9.0 起支持插在 view 等标签下。在此之前只可嵌套在原生组件map、video、canvas、camera内，避免嵌套在其他组件内',
            '基础库 1.6.0 起支持css transition动画，transition-property只支持transform (translateX, translateY)与opacity',
            '基础库 1.6.0 起支持css opacity',
            '事件模型遵循冒泡模型，但不会冒泡到原生组件',
            '文本建议都套上cover-view标签，避免排版错误',
            '只支持基本的定位、布局、文本样式。不支持设置单边的border、background-image、shadow、overflow: visible等',
            '建议子节点不要溢出父节点',
            '支持使用 z-index 控制层级',
            '默认设置的样式有：white-space: nowrap; line-height: 1.2; display: block;',
        ],
        bugs: [
            '自定义组件嵌套 cover-view 时，自定义组件的 slot 及其父节点暂不支持通过 wx:if 控制显隐，否则会导致 cover-view 不显示'
        ]
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: this.data.title,
        })
    },
})