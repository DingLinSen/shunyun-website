<template>
  <div class="introduction">
    <!-- 头部 -->
    <!--    <Header></Header>-->
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 内容-->
    <container :isTechnicalService="true" :isWisdom="true" :wisdomData="wisdomData"></container>
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
  name: "introduction",
  data() {
    return {
      wisdomData: [
        {
          name: '关于我们',
          url: '/aboutUs'
        },
        {
          name: '公司简介',
          url: '/introduction',
          isHengxian: true,
        },
        {
          name: '企业文化',
          url: '/culture'
        },
        {
          name: '金牌服务',
          url: '/gold'
        },
        {
          name: '公司资质',
          url: '/qualification'
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