<template>
  <div class="business-case">
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播图 -->
    <!-- <Banner></Banner> -->
    <div class="banner">
      <img src="@/assets/images/商业案例1.png" alt="" />
      <div class="text">高性能、高性价比</div>
    </div>
    <!--    内容-->
    <div class="container">
      <ul>
        <li @click="goDetail">
          <div class="title">智慧加油站</div>
          <div class="bor"></div>
          <img src="@/assets/images/businessCase/图片14.png" alt="" />
        </li>
        <li @click="gochemicalPlant">
          <div class="title">智慧化工厂</div>
          <div class="bor"></div>
          <img src="@/assets/images/businessCase/图片15.png" alt="" />
        </li>
        <li @click="goSite">
          <div class="title">智慧工地</div>
          <div class="bor"></div>
          <img src="@/assets/images/businessCase/图片16.png" alt="" />
        </li>
      </ul>
    </div>
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
//引入侧边导航栏
import Affix from '@/layout/affix'

export default {
  name: 'businessCase',
  components: {
    Header,
    Banner,
    Footer,
    Affix,
  },
  methods: {
    goDetail() {
      this.$router.push({ path: '/caseDetail' })
    },
    gochemicalPlant() {
      this.$router.push({ path: '/chemicalPlant' })
    },
    goSite() {
      this.$router.push({ path: '/site' })
    },
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
      position: absolute;
      top: 30px;
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
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 70%;
    margin: 30px auto;

    ul {
      // display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        overflow: hidden;
        position: relative;
        cursor: pointer;
        height: 310px;
        width: 100%;
        list-style: none;
        padding: 20px 0;
        margin: 10px 0;
        background-color: rgba(0, 0, 0, 0.3);

        .bor {
          position: absolute;
          width: 90%;
          height: 90%;
          // border: 1px solid #0a3daa;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          visibility: hidden;
        }

        .title {
          position: absolute;
          font-size: 24px;
          bottom: 20px;
          left: 20px;
          color: rgb(255, 255, 255);
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      @keyframes ct {
        from {
          position: absolute;
          font-size: 24px;
          //bottom: 20px;
          //left: 20px;
          color: rgb(255, 255, 255);
        }
        to {
          position: absolute;
          font-size: 24px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -20%);
          color: rgb(255, 255, 255);
        }
      }

      li:hover .title {
        animation-name: ct;
        animation-duration: 0.1s;
        animation-fill-mode: forwards;
        z-index: 2;
      }

      li:hover .bor {
        visibility: visible;
        z-index: 2;
      }

      li:hover img {
        transform: scale(1.05);
        transition: all 0.5s ease-out;
      }
    }
  }
}
@media screen and (min-width: 770px) {
  .banner {
    position: relative;
    width: 100%;
    height: 495px;
    img {
      position: absolute;
      top: 30px;
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
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 70%;
    margin: 30px auto;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        overflow: hidden;
        position: relative;
        cursor: pointer;
        height: 310px;
        width: 30%;
        list-style: none;
        padding: 20px 0;
        margin: 5px 0;
        background-color: rgba(0, 0, 0, 0.3);

        .bor {
          position: absolute;
          width: 90%;
          height: 90%;
          // border: 1px solid #0a3daa;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          visibility: hidden;
        }

        .title {
          position: absolute;
          font-size: 24px;
          bottom: 20px;
          left: 20px;
          color: rgb(255, 255, 255);
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      @keyframes ct {
        from {
          position: absolute;
          font-size: 24px;
          //bottom: 20px;
          //left: 20px;
          color: rgb(255, 255, 255);
        }
        to {
          position: absolute;
          font-size: 24px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -20%);
          color: rgb(255, 255, 255);
        }
      }

      li:hover .title {
        animation-name: ct;
        animation-duration: 0.1s;
        animation-fill-mode: forwards;
        z-index: 2;
      }

      li:hover .bor {
        visibility: visible;
        z-index: 2;
      }

      li:hover img {
        transform: scale(1.05);
        transition: all 0.5s ease-out;
      }
    }
  }
}
// .banner {
//   position: relative;
//   width: 100%;
//   height: 495px;
//   img {
//     position: absolute;
//     top: 30px;
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
// * {
//   margin: 0;
//   padding: 0;
// }

// .container {
//   width: 70%;
//   margin: 30px auto;

//   ul {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;

//     li {
//       overflow: hidden;
//       position: relative;
//       cursor: pointer;
//       height: 310px;
//       width: 30%;
//       list-style: none;
//       padding: 20px 0;
//       margin: 5px 0;
//       background-color: rgba(0, 0, 0, 0.3);

//       .bor {
//         position: absolute;
//         width: 90%;
//         height: 90%;
//         // border: 1px solid #0a3daa;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         visibility: hidden;
//       }

//       .title {
//         position: absolute;
//         font-size: 24px;
//         bottom: 20px;
//         left: 20px;
//         color: rgb(255, 255, 255);
//       }

//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }

//     @keyframes ct {
//       from {
//         position: absolute;
//         font-size: 24px;
//         //bottom: 20px;
//         //left: 20px;
//         color: rgb(255, 255, 255);
//       }
//       to {
//         position: absolute;
//         font-size: 24px;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -20%);
//         color: rgb(255, 255, 255);
//       }
//     }

//     li:hover .title {
//       animation-name: ct;
//       animation-duration: 0.1s;
//       animation-fill-mode: forwards;
//       z-index: 2;
//     }

//     li:hover .bor {
//       visibility: visible;
//       z-index: 2;
//     }

//     li:hover img {
//       transform: scale(1.05);
//       transition: all 0.5s ease-out;
//     }
//   }
// }
</style>
