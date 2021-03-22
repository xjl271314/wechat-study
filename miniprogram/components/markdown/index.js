// components/markdown/index.js
const app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        language: {
            type: String,
            value: 'markdown',
        },
        config: {
            type: Object,
            value: {},
        },
        nodes: {
            type: String,
            value: '',
            observer: function (newVal) {
                if (newVal) {
                    console.log()
                    let result = app.towxml(newVal, this.data.language, this.data.config);
                    this.setData({
                        md: result
                    })
                }
            }
        }
    },
    attached() {
        console.log('-----------欢迎使用markdown----------');
    }
})