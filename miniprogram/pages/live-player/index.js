Page({
    data: {
        title: 'live-player',
        date: '2021-03-16',
        blockquota: '基础库 1.7.0 开始支持，低版本需做兼容处理。',
        desc: '实时音视频播放（v2.9.1 起支持同层渲染）。相关api：<span class="span">wx.createLivePlayerContext</span><br/><br/>暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。',
        attrs: [{
                name: 'src',
                type: 'string',
                default: '',
                required: false,
                desc: '音视频地址。目前仅支持 flv, rtmp 格式',
                version: '1.7.0'
            }, {
                name: 'mode',
                type: 'string',
                default: 'live',
                required: false,
                desc: '模式',
                version: '1.7.0'
            }, {
                name: 'autoplay',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否自动播放',
                version: '1.7.0'
            }, {
                name: 'muted',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '是否静音',
                version: '1.7.0'
            },
            {
                name: 'orientation',
                type: 'string',
                default: 'vertical',
                required: false,
                desc: '直播画面方向',
                version: '1.7.0'
            },
            {
                name: 'object-fit',
                type: 'string',
                default: 'contain',
                required: false,
                desc: '填充模式，可选值有 contain，fillCrop',
                version: '1.7.0'
            },
            {
                name: 'background-mute',
                type: 'boolean',
                default: 'false',
                required: false,
                desc: '进入后台时是否静音（已废弃，默认退后台静音）',
                version: '1.7.0'
            },
            {
                name: 'min-cache',
                type: 'number',
                default: '1',
                required: false,
                desc: '最小缓冲区，单位s(RTC 模式推荐 0.2s)',
                version: '1.7.0'
            },
            {
                name: 'max-cache',
                type: 'number',
                default: '3',
                required: false,
                desc: '最大缓冲区，单位s(RTC 模式推荐 0.8s)。缓冲区用来抵抗网络波动，缓冲数据越多，网络抗性越好，但时延越大。',
                version: '1.7.0'
            },
            {
                name: 'sound-mode',
                type: 'string',
                default: 'speaker',
                required: false,
                desc: '声音输出方式',
                version: '1.9.90'
            },
            {
                name: 'auto-pause-if-navigate',
                type: 'boolean',
                default: 'false',
                required: true,
                desc: '当跳转到本小程序的其他页面时，是否自动暂停本页面的实时音视频播放',
                version: '2.5.0'
            }, {
                name: 'picture-in-picture-mode',
                type: 'string/Array',
                default: '',
                required: false,
                desc: '设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式(如： ["push", "pop"])',
                version: '2.10.3'
            }, {
                name: 'bindstatechange',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '播放状态变化事件，detail = {code}',
                version: '1.7.0'
            }, {
                name: 'bindfullscreenchange',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '全屏变化事件，detail = {direction, fullScreen}',
                version: '1.7.0'
            }, {
                name: 'bindnetstatus',
                type: 'eventhandle',
                default: '',
                required: false,
                desc: '网络状态通知，detail = {info}',
                version: '1.9.0'
            }, {
                name: 'bindaudiovolumenotify',
                type: 'eventhandler',
                default: '',
                required: false,
                desc: '播放音量大小通知，detail = {}',
                version: '2.10.0'
            }, {
                name: 'bindenterpictureinpicture',
                type: 'eventhandler',
                default: '',
                required: false,
                desc: '播放器进入小窗',
                version: '2.11.0'
            }, {
                name: 'bindleavepictureinpicture',
                type: 'eventhandler',
                default: '',
                required: false,
                desc: '播放器退出小窗',
                version: '2.11.0'
            }
        ],
        table1: {
            title: '开放场景说明',
            head: ['一级类目/主体类型', '二级类目', '小程序内容场景'],
            content: [
                ['社交', '直播', '涉及娱乐性质，如明星直播、生活趣事直播、宠物直播等。选择该类目后首次提交代码审核，需经当地互联网主管机关审核确认，预计审核时长 7 天左右'],
                ['教育', '在线视频课程', '网课、 在线培训、 讲座等教育类直播'],
                ['医疗', '互联网医院，公立医疗机构，私立医疗机构', '问诊、大型健康讲座等直播'],
                ['金融', '银行、信托、公募基金、私募基金、证券/期货、证券、期货投资咨询、保险、征信业务、新三板信息服务平台、股票信息服务平台（港股/美股）、消费金融', '金融产品视频客服理赔、金融产品推广直播等'],
                ['汽车', '汽车预售服务', '汽车预售、推广直播'],
                ['政府主体帐号', '/', '政府相关工作推广直播、领导讲话直播等'],
                ['工具', '视频客服', '不涉及以上几类内容的一对一视频客服服务，如企业售后一对一视频服务等'],
                ['IT科技', '多方通信；音视频设备', '为多方提供电话会议/视频会议等服务；智能家居场景下控制摄像头'],
            ]
        },
        mode: {
            title: 'mode的合法值',
            head: ['值', '说明'],
            content: [
                ['live', '直播'],
                ['RTC', '实时通话，该模式时延更低'],
            ]
        },
        orientation: {
            title: 'orientation的合法值',
            head: ['值', '说明'],
            content: [
                ['vertical', '竖直'],
                ['horizontal', '水平'],
            ]
        },
        objectfit: {
            title: 'object-fit的合法值',
            head: ['值', '说明'],
            content: [
                ['contain', '图像长边填满屏幕，短边区域会被填充⿊⾊'],
                ['fillCrop', '图像铺满屏幕，超出显示区域的部分将被截掉'],
            ]
        },
        soundmode: {
            title: 'sound-mode的合法值',
            head: ['值', '说明'],
            content: [
                ['speaker', '扬声器'],
                ['ear', '听筒'],
            ]
        },
        picture: {
            title: 'picture-in-picture-mode的合法值',
            head: ['值', '说明'],
            content: [
                ['[]', '取消小窗'],
                ['push', '路由 push 时触发小窗'],
                ['pop', '路由 pop 时触发小窗'],
            ]
        },
        statuscode: {
            title: '状态码说明',
            head: ['状态码', '说明'],
            content: [
                ['2001', '已经连接服务器'],
                ['2002', '已经连接 RTMP 服务器,开始拉流'],
                ['2003', '网络接收到首个视频数据包(IDR)'],
                ['2004', '视频播放开始'],
                ['2005', '视频播放进度'],
                ['2006', '视频播放结束'],
                ['2007', '视频播放Loading'],
                ['2008', '解码器启动'],
                ['2009', '视频分辨率改变'],
                ['-2301', '网络断连，且经多次重连抢救无效，更多重试请自行重启播放'],
                ['-2302', '获取加速拉流地址失败'],
                ['2101', '当前视频帧解码失败'],
                ['2102', '当前音频帧解码失败'],
                ['2103', '网络断连, 已启动自动重连'],
                ['2104', '网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀'],
                ['2105', '当前视频播放出现卡顿'],
                ['2106', '硬解启动失败，采用软解'],
                ['2107', '当前视频帧不连续，可能丢帧'],
                ['2108', '当前流硬解第一个I帧失败，SDK自动切软解'],
                ['3001', 'RTMP -DNS解析失败'],
                ['3002', 'RTMP服务器连接失败'],
                ['3003', 'RTMP服务器握手失败'],
                ['3005', 'RTMP 读/写失败，之后会发起网络重试'],
            ]
        },
        network: {
            title: '网络状态数据',
            head: ['键名', '说明'],
            content: [
                ['videoBitrate', '当前视频编/码器输出的比特率，单位 kbps'],
                ['audioBitrate', '当前音频编/码器输出的比特率，单位 kbps'],
                ['videoFPS', '当前视频帧率'],
                ['videoGOP', '当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s'],
                ['netSpeed', '当前的发送/接收速度'],
                ['netJitter', '网络抖动情况，为 0 时表示没有任何抖动，值越大表明网络抖动越大，网络越不稳定'],
                ['netQualityLevel', '网络质量：0：未定义 1：最好 2：好 3：一般 4：差 5：很差 6：不可用'],
                ['videoWidth', '视频画面的宽度'],
                ['videoHeight', '视频画面的高度'],
                ['videoCache', '缓冲的视频总时长，单位毫秒'],
                ['audioCache', '缓冲的音频总时长，单位毫秒'],
                ['vDecCacheSize', '解码器中缓存的视频帧数 (Android 端硬解码时存在）'],
                ['vSumCacheSize', '缓冲的总视频帧数，该数值越大，播放延迟越高'],
                ['avPlayInterval', '音画同步错位时间（播放），单位 ms，此数值越小，音画同步越好'],
                ['avRecvInterval', '音画同步错位时间（网络），单位 ms，此数值越小，音画同步越好'],
                ['audioCacheThreshold', '音频缓冲时长阈值，缓冲超过该阈值后，播放器会开始调控延时'],
            ]
        },
        infos: require('./infos.md.js'),
        tips: [
            'live-player 默认宽度300px、高度225px，可通过wxss设置宽高。',
            '开发者工具上暂不支持。'
        ],
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: this.data.title,
        })
    },
})