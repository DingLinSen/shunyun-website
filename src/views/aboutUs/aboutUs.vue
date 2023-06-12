<template>
  <div class="about-us">
    <!-- 头部 -->
    <!--    <Header></Header>-->
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 内容-->
    <container :isAboutUs="true" :wisdomData="wisdomData" :iconNavList="iconNavList"></container>
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
  name: "aboutUs",
  data() {
    return {
      wisdomData: [
        {
          name: '关于我们',
          isHengxian: true,
          url: '/aboutUs'
        },
        {
          name: '公司简介',
          url: '/introduction'
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
      ],
      iconNavList: [
        {
          icon: 'el-icon-s-order',
          title: '公司简介',
          content: '以“云承载、物融合、慧服务”为核心，凭借多年耕耘深入场景的产品设计和创新',
          url: '/introduction',
        },
        {
          icon: 'el-icon-s-order',
          title: '企业文化',
          content: '人尽其才，物尽其用，发展为根，积累为本，创新为天，合作为首',
          url: '/culture',
        },
        {
          icon: 'el-icon-s-order',
          title: '金牌服务',
          content: '提供综合、集约、联控、运算模式和应用模型的综合性智慧建筑解决方案',
          url: '/gold',
        },
        {
          icon: 'el-icon-s-order',
          title: '公司资质',
          content: '建筑业协会智能建筑分会会员单位，愿成为社会和行业敬重的智慧事业领跑者',
          url: '/qualification',
        },
      ],
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