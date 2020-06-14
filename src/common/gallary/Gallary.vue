<template>
    <div class="container" @click="handleGallaryClick">
        <div class="warpper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img :src="item" class="gallary-img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        //传递close到父组件banner，隐藏该组件
        handleGallaryClick(){
            this.$emit('close')
        }
    },
    data(){
        return{
            swiperOptions:{
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        z-index 99
        background #000
        display flex
        flex-direction column
        justify-content center
        .warpper
            width 100%
            height 0
            padding-bottom 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>