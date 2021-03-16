Page({
  data: {
      title: 'cover-image',
      date: '2021-03-15',
      blockquota: '基础库 1.4.0 开始支持，低版本需做兼容处理。',
      desc: '覆盖在原生组件之上的图片视图。可覆盖的原生组件同<span class="span">cover-view</span>，支持嵌套在<span class="span">cover-view</span>里。',
      attrs: [
        {
           name: 'src',
           type: 'string',
           default: '',
           required: false,
           desc: '图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。',
           version: '1.4.0'
        },
        {
          name: 'bindload',
          type: 'eventhandle',
          default: '',
          required: false,
          desc: '图片加载成功时触发。',
          version: '2.1.0'
       },
       {
        name: 'binderror',
        type: 'eventhandle',
        default: '',
        required: false,
        desc: '图片加载失败时触发。',
        version: '2.1.0'
     }
      ]
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  }
})