Page({
    data: {
        title: 'movable-view',
        date: '2021-03-25',
        blockquota: '基础库 1.2.0 开始支持，低版本需做兼容处理。',
        desc: '可移动的视图容器，在页面中可以拖拽滑动。<span class="span">movable-view</span>必须在 <span class="span">movable-area</span> 组件中，并且必须是<span class="span">直接子节点</span>，否则不能移动。',
        attrs: [{
            name: 'direction',
            type: 'string',
            default: 'none',
            required: false,
            desc: 'movable-view的移动方向，属性值有all、vertical、horizontal、none',
            version: '1.2.0'
        }, {
            name: 'inertia',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: 'movable-view是否带有惯性',
            version: '1.2.0'
        }, {
            name: 'out-of-bounds',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '超过可移动区域后，movable-view是否还可以移动',
            version: '1.2.0'
        }, {
            name: 'x',
            type: 'number',
            default: '',
            required: false,
            desc: '定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画',
            version: '1.2.0'
        }, {
            name: 'y',
            type: 'number',
            default: '',
            required: false,
            desc: '定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画',
            version: '1.2.0'
        }, {
            name: 'damping',
            type: 'number',
            default: '20',
            required: false,
            desc: '阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快',
            version: '1.2.0'
        }, {
            name: 'friction',
            type: 'number',
            default: '2',
            required: false,
            desc: '摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值',
            version: '1.2.0'
        }, {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '是否禁用',
            version: '1.9.90'
        }, {
            name: 'scale',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '是否支持双指缩放，默认缩放手势生效区域是在movable-view内',
            version: '1.9.90'
        }, {
            name: 'scale-min',
            type: 'number',
            default: '0.5',
            required: false,
            desc: '定义缩放倍数最小值',
            version: '1.9.90'
        }, {
            name: 'scale-max',
            type: 'number',
            default: '10',
            required: false,
            desc: '定义缩放倍数最大值',
            version: '1.9.90'
        }, {
            name: 'scale-value',
            type: 'number',
            default: '1',
            required: false,
            desc: '定义缩放倍数，取值范围为 0.5 - 10',
            version: '1.9.90'
        }, {
            name: 'animation',
            type: 'boolean',
            default: 'true',
            required: false,
            desc: '是否使用动画',
            version: '2.1.0'
        }, {
            name: 'bindchange',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '拖动过程中触发的事件，event.detail = {x, y, source}',
            version: '1.9.90'
        }, {
            name: 'bindscale',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持',
            version: '1.9.90'
        }, {
            name: 'htouchmove',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch',
            version: '1.9.90'
        }, {
            name: 'vtouchmove',
            type: 'eventhandle',
            default: '',
            required: false,
            desc: '初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch',
            version: '1.9.90'
        }],
        bindchange: {
            title: 'bindchange 返回的 source 表示产生移动的原因',
            head: ['值', '说明'],
            content: [
                ['touch', '拖动'],
                ['touch-out-of-bounds', '超出移动范围'],
                ['out-of-bounds', '超出移动范围后的回弹'],
                ['friction', '惯性'],
                ['空字符串', 'setData'],
            ]
        },
        tips: [
            'movable-view 必须设置width和height属性，不设置默认为10px',
            'movable-view 默认为绝对定位，top和left属性为0px',
        ],
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: this.data.title,
        })
    },
})