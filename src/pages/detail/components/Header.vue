<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data(){
        return{
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    activated(){
        //页面展示时绑定scroll事件
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        //页面离开时解绑scroll事件
        window.removeEventListener('scroll',this.handleScroll)
    },
    methods:{
        /**
         * handleScroll滑动屏幕时发生的事件
         * top是手指滚动距离
         * opacity是显示程度，默认值为0
         * showAbs决定header是显示还是隐藏，默认值是false
         * 当top大于60时header部分显示，否则隐藏
         */
        handleScroll(){
            const top = document.documentElement.scrollTop
            if(top > 60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            } else{
                this.showAbs = true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius .4rem
        text-align center
        line-height .8rem
        background rgba(0,0,0,.8)
        .header-abs-back
            color #fff
            font-size .4rem
    .header-fixed
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        position fixed
        top 0
        left 0
        right 0
        z-index 2222
        .header-fixed-back
            width .64rem
            text-align center
            font-size .4rem
            position absolute
            color #fff
            top 0
            left 0
</style>