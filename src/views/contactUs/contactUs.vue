<template>
  <div class="contact-us">
    <!-- 头部 -->
    <!--    <Header></Header>-->
    <!-- 轮播图 -->
    <!-- <Banner></Banner> -->
    <div class="banner">
      <img src="@/assets/images/联系我们大图.jpg" alt="" />
      <div class="text">欢迎加入我们</div>
    </div>
    <!-- 内容-->
    <container :isMap="true" :wisdomData="wisdomData"></container>

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
  name: 'contactUs',
  data() {
    return {
      wisdomData: [
        {
          name: '联系我们',
          url: '/contactUs',
        },
        {
          name: '联系方式',
          url: '/contactInformation',
          isHengxian: true,
        },
        {
          name: '项目咨询',
          url: '/projectConsultation',
        },
        {
          name: '加入我们',
          url: '/joinUs',
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
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
  .banner {
    position: relative;
    width: 100%;
    height: 495px;
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
    height: 495px;
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
//   height: 495px;
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
