// components/category-list/index.js
Component({
    properties: {
        categoryList: {
            type: Object,
            value: {},
        }
    },
    attached() {
        console.log('目录结构', this.data.categoryList);
    },
    methods: {

    }
})