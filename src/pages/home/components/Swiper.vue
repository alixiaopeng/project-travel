<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.imgUrl" alt="" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
        //list是一个数组，从服务器获取内容
        list: Array
    },
    data() {
        return{
            swiperOptions:{
                pagination:'.swiper-pagination',
                loop:true,
                autoplay: 3000
            },
        }
    },
    computed:{
        //解决默认轮播图显示最后一个的问题
        showSwiper(){
            return this.list.length
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .wrapper>>>.swiper-pagination-bullet-active
        background #fff
    .wrapper
        width 100%
        background-color #eee
        .swiper-img
            width 100%
            height 150px
</style>

