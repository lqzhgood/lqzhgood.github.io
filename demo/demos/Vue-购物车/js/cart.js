Vue.prototype.$http = axios;

var vm = new Vue({
    el: '#app',
    data: {
        list: [],
        delFlag: false,
        delNum: -1
    }, mounted() {
        this.$nextTick(function () {
            this.$http.get('./data/cart.json').then(d => {
                let data = d.data.result.productList;
                data.forEach((v, i) => {
                    v.ischecked = false;
                });
                this.list = data;
            }).catch(err => console.log(err));
        })
    }, computed: {
        totalprice() {
            let sum = 0;
            this.list.forEach((v, i) => {
                if (v.ischecked) {
                    sum += v.productPrice * v.productQuentity;
                }
            })
            return sum;
        }, isCkAll() {
            let isCkAll = true;
            this.list.forEach((v, i) => {
                if (!v.ischecked) {
                    isCkAll = false;
                    return isCkAll;
                }
            })
            return isCkAll;
        }
    }, watch: {
        list: {
            handler: function (val, oldVal) {
                this.list.forEach(function (v, i) {
                    v.productQuentity = parseInt(v.productQuentity)
                    if (isNaN(v.productQuentity) || v.productQuentity == '') v.productQuentity = 1;
                    if (v.productQuentity < 0) v.productQuentity = 0;
                    if (v.productQuentity > 99) v.productQuentity = 99;
                })
            }, deep: true
        }
    }
    , methods: {
        changeNum(item, type) {
            if (item.productQuentity < 0) item.productQuentity = 0;
            if (item.productQuentity > 99) item.productQuentity = 99;
            if (type == 1) {
                item.productQuentity++
            } else {
                item.productQuentity--
            }
        }, selectProduct(item) {
            item.ischecked = !item.ischecked;
        }, delConfirm(i) {
            this.delNum = i;
            this.delFlag = true;
        }, delProduct() {
            this.list.splice(this.delNum, 1);
            this.delFlag = false;
        }, changeCheckAllState() {
            let flag = null;
            if (this.isCkAll) {
                flag = false;
            } else {
                flag = true;
            }
            this.list.forEach((v, i) => {
                v.ischecked = flag;
            })
        }
    }, filters: {
        money(v) {
            return '￥ ' + v.toFixed(2);
        }
    }
})