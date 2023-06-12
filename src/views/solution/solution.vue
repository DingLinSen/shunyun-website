<template>
  <div class="solution">
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播图 -->
    <!-- <Banner></Banner> -->
    <div class="banner">
      <img src="@/assets/images/解决方案大图.jpg" alt="" />
      <div class="text">智能图像算法精准高效，使用各行业应用场景</div>
    </div>
    <!-- 内容-->
    <container :isSolution="true" :wisdomData="wisdomData" :iconNavList="iconNavList"></container>
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
  name: 'solution',
  data() {
    return {
      wisdomData: [
        {
          name: '解决方案',
          url: '/solution',
          isHengxian: true,
        },
        {
          name: '智慧化工',
          url: '/park',
        },
        {
          name: '智慧工地',
          url: '/medical',
        },
        {
          name: '智慧社区',
          url: '/campus',
        },
        {
          name: '智慧矿山',
          url: '/architecture',
        },
        {
          name: '智慧加油站',
          url: '/bim',
        },
      ],
      iconNavList: [
        {
          icon: 'icon-huagongchang',
          title: '智慧化工',
          content: '把AI数字世界带入化工园区，助力智慧转型',
          url: '/park',
        },
        {
          icon: 'icon-daijiangongdi',
          title: '智慧工地',
          content: '专注创新转型，实时对接工地安全隐患',
          url: '/medical',
        },
        {
          icon: 'icon-shequ',
          title: '智慧社区',
          content: '赋能校园，助力学校安防升级',
          url: '/campus',
        },
        {
          icon: 'icon-kuangshan',
          title: '智慧矿山',
          content: '构建智慧矿山系统传感生态体系',
          url: '/architecture',
        },
        {
          icon: 'icon-jiayouzhan',
          title: '智慧加油站',
          content: '危化品安全预警，提升员工安全意识',
          url: '/bim',
        },
      ],
    }
  },
  components: {
    Header,
    Banner,
    Footer,
    container,
    Affix,
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
  .banner {
    position: relative;
    width: 100%;
    // height: 100%;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
    }
    .text {
      display: none;
      position: absolute;
      top: 50%;
      left: 10%;
      color: #ffffff;
      font-size: 42px;
    }
  }
}
@media screen and (min-width: 770px) {
  .banner {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    .text {
      position: absolute;
      top: 50%;
      left: 10%;
      color: #ffffff;
      font-size: 42px;
    }
  }
}
// .banner {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   img {
//     width: 100%;
//     height: 100%;
//   }
//   .text {
//     position: absolute;
//     top: 50%;
//     left: 10%;
//     color: #ffffff;
//     font-size: 42px;
//   }
// }
</style>
