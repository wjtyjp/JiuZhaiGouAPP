<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item name="home" icon="home-o" replace to="/">首页</van-tabbar-item>
    <van-tabbar-item name="location" icon="location-o" replace to="/location">地图</van-tabbar-item>
    <van-tabbar-item name="manager" icon="manager-o" replace to="/manager">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
      active: 'home'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
