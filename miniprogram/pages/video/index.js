Page({
    data: {
        title: 'video',
        date: '2021-03-19',
        blockquota: '基础库 1.0.0 开始支持，低版本需做兼容处理。',
        desc: '视频（v2.4.0 起支持同层渲染）。相关api：<span class="span">wx.createVideoContext</span>。',
        attrs: [{
                name: 'src',
                type: 'string',
                default: '',
                required: true,
                desc: '要播放视频的资源地址，支持网络路径、本地临时路径、云文件ID（2.3.0）',
                version: '1.0.0'
            }, {
                name: 'duration',
                type: 'number',
                default: '',
                required: false,
                desc: '指定视频时长',
                version: '1.1.0'
            }, {
                name: 'controls',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '是否显示默认播放控件（播放/暂停按钮、播放进度、时间）',
                version: '1.0.0'
            }, {
                name: 'danmu-list',
                type: 'Array.<object>',
                default: '',
                required: false,
                desc: '弹幕列表',
                version: '1.0.0'
            },
            {
                name: 'danmu-btn',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否显示弹幕按钮，只在初始化时有效，不能动态变更',
                version: '1.0.0'
            },
            {
                name: 'enable-danmu',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否展示弹幕，只在初始化时有效，不能动态变更',
                version: '1.0.0'
            },
            {
                name: 'autoplay',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否自动播放',
                version: '1.0.0'
            },
            {
                name: 'loop',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否循环播放',
                version: '1.4.0'
            },
            {
                name: 'muted',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否静音播放',
                version: '1.4.0'
            },
            {
                name: 'initial-time',
                type: 'number',
                default: '0',
                required: false,
                desc: '指定视频初始播放位置',
                version: '1.6.0'
            },
            {
                name: 'page-gesture',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '在非全屏模式下，是否开启亮度与音量调节手势（废弃，见 vslide-gesture）',
                version: '1.6.0'
            },
            {
                name: 'direction',
                type: 'number',
                default: '',
                required: false,
                desc: '设置全屏时视频的方向，不指定则根据宽高比自动判断',
                version: '1.7.0'
            },
            {
                name: 'show-progress',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '若不设置，宽度大于240时才会显示',
                version: '1.9.0'
            },
            {
                name: 'show-fullscreen-btn',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '是否显示全屏按钮',
                version: '1.9.0'
            },
            {
                name: 'show-play-btn',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '是否显示视频底部控制栏的播放按钮',
                version: '1.9.0'
            },
            {
                name: 'show-center-play-btn',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '是否显示视频中间的播放按钮',
                version: '1.9.0'
            },
            {
                name: 'enable-progress-gesture',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '是否开启控制进度的手势',
                version: '1.9.0'
            },
            {
                name: 'object-fit',
                type: 'string',
                default: 'contain',
                required: false,
                desc: '当视频大小与 video 容器大小不一致时，视频的表现形式',
                version: '1.0.0'
            },
            {
                name: 'poster',
                type: 'string',
                default: '',
                required: false,
                desc: '视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效',
                version: '1.0.0'
            },
            {
                name: 'show-mute-btn',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否显示静音按钮',
                version: '2.4.0'
            },
            {
                name: 'title',
                type: 'string',
                default: '',
                required: false,
                desc: '视频的标题，全屏时在顶部展示',
                version: '2.4.0'
            },
            {
                name: 'play-btn-position',
                type: 'string',
                default: 'bottom',
                required: false,
                desc: '播放按钮的位置',
                version: '2.4.0'
            },
            {
                name: 'enable-play-gesture',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否开启播放手势，即双击切换播放/暂停',
                version: '2.4.0'
            },
            {
                name: 'auto-pause-if-navigate',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '当跳转到本小程序的其他页面时，是否自动暂停本页面的视频播放',
                version: '2.5.0'
            },
            {
                name: 'auto-pause-if-open-native',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '当跳转到其它微信原生页面时，是否自动暂停本页面的视频',
                version: '2.5.0'
            },
            {
                name: 'vslide-gesture',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）',
                version: '2.6.2'
            },
            {
                name: 'vslide-gesture-in-fullscreen',
                type: 'boolean',
                default: 'true',
                required: false,
                desc: '在全屏模式下，是否开启亮度与音量调节手势',
                version: '2.6.2'
            },
            {
                name: 'ad-unit-id',
                type: 'string',
                default: '',
                required: true,
                desc: '视频前贴广告单元ID，更多详情可参考开放能力视频前贴广告',
                version: '2.8.1'
            },
            {
                name: 'poster-for-crawler',
                type: 'string',
                default: 'false',
                required: true,
                desc: '用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址',
                version: ''
            },
            {
                name: 'show-casting-button',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '显示投屏按钮。安卓在同层渲染下生效，支持 DLNA 协议；iOS 支持 AirPlay 和 DLNA 协议',
                version: '2.10.2'
            },
            {
                name: 'picture-in-picture-mode',
                type: 'string/Array',
                default: '',
                required: false,
                desc: '设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）',
                version: '2.11.0'
            },
            {
                name: 'picture-in-picture-show-progress',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '用是否在小窗模式下显示播放进度',
                version: '2.11.0'
            },
            {
                name: 'enable-auto-rotation',
                type: 'string',
                default: 'false',
                required: false,
                desc: '是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效',
                version: '2.11.0'
            },
            {
                name: 'show-screen-lock-button',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作',
                version: '2.11.0'
            },
            {
                name: 'show-snapshot-button',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否显示截屏按钮，仅在全屏时显示',
                version: '2.13.0'
            },
            {
                name: 'show-background-playback-button',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否展示后台音频播放按钮',
                version: '2.14.3'
            },
            {
                name: 'background-poster',
                type: 'string',
                default: '',
                required: false,
                desc: '进入后台音频播放后的通知栏图标（Android 独有）',
                version: '2.14.3'
            },
            {
                name: 'bindplay',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '当开始/继续播放时触发play事件',
                version: '1.0.0'
            },
            {
                name: 'bindpause',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '当暂停播放时触发 pause 事件',
                version: '1.0.0'
            },
            {
                name: 'bindended',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '当播放到末尾时触发 ended 事件',
                version: '1.0.0'
            },
            {
                name: 'bindtimeupdate',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次',
                version: '1.0.01.0.0'
            },
            {
                name: 'bindfullscreenchange',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal',
                version: '1.4.0'
            },
            {
                name: 'bindwaiting',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '视频出现缓冲时触发',
                version: '1.7.0'
            },
            {
                name: 'binderror',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '视频播放出错时触发',
                version: '1.7.0'
            },
            {
                name: 'bindprogress',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比',
                version: '2.4.0'
            },
            {
                name: 'bindloadedmetadata',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '视频元数据加载完成时触发。event.detail = {width, height, duration}',
                version: '2.7.0'
            },
            {
                name: 'bindcontrolstoggle',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '切换 controls 显示隐藏时触发。event.detail = {show}',
                version: '2.9.5'
            },
            {
                name: 'bindenterpictureinpicture',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '播放器进入小窗',
                version: '2.11.0'
            },
            {
                name: 'bindleavepictureinpicture',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '播放器退出小窗',
                version: '2.11.0'
            },
            {
                name: 'bindseekcomplete',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: 'seek 完成时触发 (position iOS 单位 s, Android 单位 ms)',
                version: '2.12.0'
            },
        ],
        direction: {
            title: 'direction 的合法值',
            head: ['值', '说明'],
            content: [
                ['0', '正常竖向'],
                ['90', '屏幕逆时针90度'],
                ['-90', '屏幕顺时针90度']
            ],
        },
        objectfit: {
            title: 'object-fit 的合法值',
            head: ['值', '说明'],
            content: [
                ['contain', '包含'],
                ['fill', '填充'],
                ['cover', '覆盖']
            ],
        },
        playbtnposition: {
            title: 'play-btn-position 的合法值',
            head: ['值', '说明'],
            content: [
                ['bottom', 'controls bar上'],
                ['center', '视频中间'],
            ],
        },
        picture: {
            title: 'picture-in-picture-mode 的合法值',
            head: ['值', '说明'],
            content: [
                ['[]', '取消小窗'],
                ['push', '路由 push 时触发小窗'],
                ['pop', '路由 pop 时触发小窗'],
            ],
        },
        tips: [
            'video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高。',
            '从 2.4.0 起 video 支持同层渲染，更多请参考原生组件使用限制'
        ],
        tableType: {
            title: '支持的格式',
            head: ['格式', 'IOS', 'Android'],
            content: [
                ['mp4', '✅', '✅'],
                ['mov', '✅', '❌'],
                ['m4v', '✅', '❌'],
                ['3gp', '✅', '✅'],
                ['avi', '✅', '❌'],
                ['m3u8', '✅', '✅'],
                ['webm', '❌', '✅']
            ]
        },
        tableType2: {
            title: '支持的编码格式',
            head: ['格式', 'IOS', 'Android'],
            content: [
                ['H.264', '✅', '✅'],
                ['HEVC', '✅', '✅'],
                ['MPEG-4', '✅', '✅'],
                ['VP9', '❌', '✅']
            ]
        },
        infos: require('./infos.md.js'),
        demos: [{
            desc: '官方弹幕示例',
            path: '/pages/video/demos/demo1/index'
        }]
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: this.data.title,
        })
    },
})