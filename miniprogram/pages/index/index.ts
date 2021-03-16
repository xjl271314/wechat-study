// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    viewBox: [
      {
          label: 'cover-image',
          desc: '覆盖在原生组件之上的图片视图。',
          path: 'pages/cover-image/cover-image'
      }
    ]
  },
  onLoad() {

  },
})
