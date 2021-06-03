Vue.prototype.$http = axios;


var vm = new Vue({
    el: '#address',
    data: {
        list: [],
        currentIndex: null,
        shippingmethod: 2,
        limitenum: 3
    },
    computed: {
        filterList() {
            return this.list.slice(0, this.limitenum)
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.$http.get('./data/address.json').then(d => {
                this.list = d.data.result;
            }).catch(err => {
                console.log('err', err);
            })
        })
    },
    methods: {
        setDefault(id) {
            this.list.forEach((v, i) => {
                if (v.addressId == id) {
                    v.isDefault = true;
                } else {
                    v.isDefault = false;
                }
            })
        },
        delAddress(i) {
            this.list.splice(i, 1);
        }
    }
})