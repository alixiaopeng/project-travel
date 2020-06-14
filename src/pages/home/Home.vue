<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    name:'Home',
    //组件注册
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return{
            swiperList: [],
            iconList: [],
            recommendList:[],
            weekendList:[],
            lastCity: ''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            //向服务器发送ajax请求获取数据，返回数据成功时执行getHomeInfoSucc函数
            axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
        },
        //处理服务器返回的数据
        getHomeInfoSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted(){
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated(){
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style scoped>
    
</style>