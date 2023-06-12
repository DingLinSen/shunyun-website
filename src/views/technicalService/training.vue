<template>
  <div class="training">
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 内容-->
    <container :isTechnicalService="true" :wisdomData="wisdomData"></container>
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
  name: "training",
  data() {
    return {
      wisdomData: [
        {
          name: '技术服务',
          url: '/technicalService'
        },
        {
          name: '售后服务',
          url: '/service',
        },
        {
          name: '技术培训',
          url: '/training',
          isHengxian: true,
        },
        {
          name: '产品手册',
          url: '/manual'
        },
      ]
    }
  },
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