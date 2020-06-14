<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data() {
        return{
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated(){
        //startY是字母A距离List组件顶部的距离
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed:{
        //letters是A到Z的数组
        letters() {
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        //点击字母时跳转到对应的字母列表处
        handleLetterClick(e){
            //向外触发事件
            this.$emit('change', e.target.innerText)
        },
        //触摸开始时
        handleTouchStart(){
            this.touchStatus = true
        },
        /**
         * 触摸点改动，滑动时发生的节流函数,减少高频事件touchmove的执行次数，节约性能
         * e.touches[0].clientY是距离手机屏幕顶部距离
         * 89是Header和Search组件的高度之和
         * touchY是当前点击字母距离List组件顶部的距离
         * index是字母下标,20是字母高度
         */
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY - 89
                    const index = Math.floor(touchY - this.startY) / 20
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16) 
            }
        },
        //触摸结束，手离开屏幕
        handleTouchEnd(){
            this.touchStatus = false
        },
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        top 1.58rem
        bottom 0
        width .4rem
        .item
            text-align center
            line-height .44rem
            color $bgColor
</style>