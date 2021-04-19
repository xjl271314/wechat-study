Page({
    data: {
        title: 'scroll-view',
        date: '2021-04-19',
        blockquota: '基础库 1.0.0 开始支持，低版本需做兼容处理。',
        desc: '可滚动视图区域。使用竖向滚动时，需要给<span class="span">scroll-view</span>一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位<span class="span">(rpx/px)</span>。',
        attrs: [{
            name: 'scroll-x',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '允许横向滚动',
            version: '1.0.0'
        }, {
            name: 'scroll-y',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '允许纵向滚动',
            version: '1.0.0'
        }, {
            name: 'upper-threshold',
            type: 'number/string',
            default: '50',
            required: false,
            desc: '距顶部/左边多远时，触发 scrolltoupper 事件',
            version: '1.0.0'
        }, {
            name: 'lower-threshold',
            type: 'number/string',
            default: '50',
            required: false,
            desc: '距底部/右边多远时，触发 scrolltolower 事件',
            version: '1.0.0'
        }, {
            name: 'scroll-top',
            type: 'number/string',
            default: '',
            required: false,
            desc: '设置竖向滚动条位置',
            version: '1.0.0'
        }, {
            name: 'scroll-left',
            type: 'number/string',
            default: '',
            required: false,
            desc: '设置横向滚动条位置',
            version: '1.0.0'
        }, {
            name: 'scroll-into-view',
            type: 'string',
            default: '',
            required: false,
            desc: '值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素',
            version: '1.0.0'
        }, {
            name: 'scroll-with-animation',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '在设置滚动条位置时使用动画过渡',
            version: '1.0.0'
        }, {
            name: 'enable-back-to-top',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: 'iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向',
            version: '1.0.0'
        }, {
            name: 'enable-flex',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。',
            version: '2.7.3'
        }, {
            name: 'scroll-anchoring',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。',
            version: '2.8.2'
        }, {
            name: 'refresher-enabled',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '开启自定义下拉刷新',
            version: '2.10.1'
        }, {
            name: 'refresher-threshold',
            type: 'number',
            default: '45',
            required: false,
            desc: '设置自定义下拉刷新阈值',
            version: '2.10.1'
        }, {
            name: 'refresher-default-style',
            type: 'string',
            default: 'black',
            required: false,
            desc: '设置自定义下拉刷新默认样式，支持设置 black | white | none， none 表示不使用默认样式',
            version: '2.10.1'
        }, {
            name: 'refresher-background',
            type: 'string',
            default: '#FFF',
            required: false,
            desc: '设置自定义下拉刷新区域背景颜色',
            version: '2.10.1'
        }, {
            name: 'refresher-triggered',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发',
            version: '2.10.1'
        }, {
            name: 'enhanced',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '启用 scroll-view 增强特性，启用后可通过 ScrollViewContext 操作 scroll-view',
            version: '2.12.0'
        }, {
            name: 'bounces',
            type: 'boolean',
            default: 'true',
            required: false,
            desc: 'iOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效)',
            version: '2.12.0'
        }, {
            name: 'show-scrollbar',
            type: 'boolean',
            default: 'true',
            required: false,
            desc: '滚动条显隐控制 (同时开启 enhanced 属性后生效)',
            version: '2.12.0'
        }, {
            name: 'paging-enabled',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '分页滑动效果 (同时开启 enhanced 属性后生效)',
            version: '2.12.0'
        }, {
            name: 'fast-deceleration',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '滑动减速速率控制 (同时开启 enhanced 属性后生效)',
            version: '2.12.0'
        }, {
            name: 'binddragstart',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '滑动开始事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }',
            version: '2.12.0'
        }, {
            name: 'binddragging',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '滑动事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }',
            version: '2.12.0'
        }, {
            name: 'binddragend',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '滑动结束事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft, velocity }',
            version: '2.12.0'
        }, {
            name: 'bindscrolltoupper',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '滚动到顶部/左边时触发',
            version: '1.0.0'
        }, {
            name: 'bindscrolltolower',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '滚动到底部/右边时触发',
            version: '1.0.0'
        }, {
            name: 'bindscroll',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}',
            version: '1.0.0'
        }, {
            name: 'bindrefresherpulling',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '自定义下拉刷新控件被下拉',
            version: '2.10.1'
        }, {
            name: 'bindrefresherrefresh',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '自定义下拉刷新被触发',
            version: '2.10.1'
        }, {
            name: 'bindrefresherrestore',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '自定义下拉刷新被复位',
            version: '2.10.1'
        }, {
            name: 'bindrefresherabort',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '自定义下拉刷新被中止',
            version: '2.10.1'
        }],
        tips: [
            '基础库 2.4.0以下不支持嵌套textarea、map、canvas、video 组件',
            'scroll-into-view 的优先级高于 scroll-top',
            '在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh',
            '若要使用下拉刷新，请使用页面的滚动，而不是 scroll-view ，这样也能通过点击顶部状态栏回到页面顶部',
            'scroll-view 自定义下拉刷新可以结合 WXS 事件响应 开发交互动画',
        ],
        demos: [{
            desc: 'scroll-view官方示例代码',
            path: '/pages/scroll-view/demos/demo1/index'
        }]
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: this.data.title,
        })
    },
})