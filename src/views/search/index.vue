<template>
  <div class="search">
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 右侧固定 -->
    <Affix></Affix>
  </div>
</template>

<script>
// 引入头部
import Header from '@/layout/header'
// 引入轮播图
import Banner from '@/layout/banner'
//引入底部
import Footer from '@/layout/footer'
//引入内容
import container from '@/layout/container'
//引入侧边导航栏
import Affix from '@/layout/affix'

export default {
  name: "index",
  components: {
    Header,
    Banner,
    Footer,
    container,
    Affix
  },
}
</script>

<style scoped>

</style>