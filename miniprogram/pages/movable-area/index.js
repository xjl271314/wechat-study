Page({
    data: {
        title: 'movable-area',
        date: '2021-03-25',
        blockquota: '基础库 1.2.0 开始支持，低版本需做兼容处理。',
        desc: '<span class="span">movable-view</span> 的可移动区域。<br/>',
        attrs: [{
            name: 'scale-area',
            type: 'boolean',
            default: 'false',
            required: false,
            desc: '当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area',
            version: '1.9.90'
        }],
        tips: [
            'movable-area 必须设置width和height属性，不设置默认为10px',
            '当movable-view小于movable-area时，movable-view的移动范围是在movable-area内',
            '当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x轴方向和y轴方向分开考虑）'
        ],
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: this.data.title,
        })
    },
})