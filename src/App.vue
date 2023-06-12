<template>
  <div id="app">
    <!-- 头部-->
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
// 引入头部
import Header from '@/layout/header'
//引入底部
import Footer from '@/layout/footer'
//引入侧边导航栏
import Affix from '@/layout/affix'

export default {
  data() {
    return {}
  },
  components: {
    Header,
    Footer,
    Affix,
  },
}
</script>
<style lang="scss">
@import url('@/static/css/fontsize.css');
@import url('@/assets/icon-font/iconfont.css');
* {
  margin: 0;
  padding: 0;
}
</style>
