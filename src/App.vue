<template>
  <div id="app">
      <!-- 正常情况下，每次切换路由，都会发送一次ajax请求，将<router-view/>放在<keep-alive>下，可以使每次切换路由时从本地内存获取数据，减少ajax的请求。exclude中的是取消缓存 -->
      <keep-alive exclude="Detail">
          <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
