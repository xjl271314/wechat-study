Page({
    data: {
        title: 'page-container',
        date: '2021-03-30',
        blockquota: '基础库 2.16.0 开始支持，低版本需做兼容处理。',
        desc: '页面容器。<br /> <br />小程序如果在页面内进行复杂的界面设计（如在页面内弹出半屏的弹窗、在页面内加载一个全屏的子页面等），用户进行返回操作会直接离开当前页面，不符合用户预期，预期应为关闭当前弹出的组件。 为此提供“假页”容器组件，效果类似于<span class="span"> popup 弹出层</span> 。<br /><br />页面内存在该容器时，当用户进行返回操作，关闭该容器不关闭页面。返回操作包括三种情形，右滑手势、安卓物理返回键和调用 navigateBack 接口。',
        attrs: [{
            name: 'show',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '是否显示容器组件',
            version: '2.16.0'
        }, {
            name: 'duration',
            type: 'number',
            default: '300',
            required: false,
            desc: '动画时长，单位毫秒',
            version: '2.16.0'
        }, {
            name: 'z-index',
            type: 'number',
            default: '100',
            required: false,
            desc: 'z-index 层级',
            version: '2.16.0'
        }, {
            name: 'overlay',
            type: 'boolean',
            default: 'true',
            required: false,
            desc: '是否显示遮罩层',
            version: '2.16.0'
        }, {
            name: 'position',
            type: 'string',
            default: 'bottom',
            required: false,
            desc: '	弹出位置，可选值为 top、bottom、right、center',
            version: '2.16.0'
        }, {
            name: 'round',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '是否显示圆角',
            version: '2.16.0'
        }, {
            name: 'close-on-slideDown',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '是否在下滑一段距离后关闭',
            version: '2.16.0'
        }, {
            name: 'overlay-style',
            type: 'string',
            default: '',
            required: false,
            desc: '自定义遮罩层样式',
            version: '2.16.0'
        }, {
            name: 'custom-style',
            type: 'string',
            default: '',
            required: false,
            desc: '自定义弹出层样式',
            version: '2.16.0'
        }, {
            name: 'bind:beforeenter',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '进入前触发',
            version: '2.16.0'
        }, {
            name: 'bind:enter',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '进入中触发',
            version: '2.16.0'
        }, {
            name: 'bind:afterenter',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '进入后触发',
            version: '2.16.0'
        }, {
            name: 'bind:beforeleave',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '离开前触发',
            version: '2.1.0'
        }, {
            name: 'bind:leave',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '离开中触发',
            version: '2.16.0'
        }, {
            name: 'bind:afterleave',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '离开后触发',
            version: '2.16.0'
        }, {
            name: 'bind:clickoverlay',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '点击遮罩层时触发',
            version: '2.16.0'
        }],
        tips: [
            '当前页面最多只有 1 个容器，若已存在容器的情况下，无法增加新的容器',
            'wx.navigateBack 无法在页面栈顶调用，此时没有上一级页面',
        ],
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: this.data.title,
        })
    },
})