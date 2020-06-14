<template>
    <!--动画组件FadeAnimation
        效果是渐隐渐现
     -->
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
    .v-enter, .v-leave-to
        opacity 0
    .v-enter-active, .v-leave-active
        transition opacity .5s
</style>