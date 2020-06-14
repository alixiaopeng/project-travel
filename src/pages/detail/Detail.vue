<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs">
            
        </detail-banner>
        <keep-alive>
            <detail-header></detail-header>
        </keep-alive>
        <div class="cont">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            sightName: '',
            bannerImg: '',
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        /**
         * getDetailInfo函数，向服务器发送ajax获取数据，传入id
         * 服务器返回成功的处理函数是handleGetDataSucc
         */
        getDetailInfo(){
            axios.get('/api/detail.json', {
                params:{
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        /**
         * handleGetDataSucc函数，处理服务器返回的数据
         */
        handleGetDataSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted(){
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .cont{
        height 50rem
    }
</style>