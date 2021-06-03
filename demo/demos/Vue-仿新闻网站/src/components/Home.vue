<template>
    <div>
        <div class="content">
            <Slider></Slider>
            <div class="newsList">
                <ul>
                    <li v-for="(item,index) in arrList">
                        <router-link :to="'/article/'+item.id">
                            <h2>{{item.title}}</h2>
                            <p>{{item.detail}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Slider from './Slider.vue'
    export default{
        data(){
            return {
                arrList:[]
            }
        },components:{
            Slider
        },mounted(){
            this.fetchDate();
        },methods:{
            fetchDate(){
                var _this= this;
                this.$http.get('src/data/index.data').then((res)=>_this.arrList = res.data).catch((err)=>console.log(err));
            }
        }
    }
</script>

<style scoped>
@import '../assets/css/index.css';
</style>