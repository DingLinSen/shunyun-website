<template>
  <div class="chemicalPlant">
    <!-- 轮播图 -->
    <div class="banner">
      <img src="@/assets/images/商业案例大图.jpg" alt="" />
    </div>
    <!--    内容-->
    <div class="container">
      <div class="content-left">
        <div class="top">
          <p class="title">智慧化工厂</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <div class="pic">
            <img src="@/assets/images/businessCase/图片15.png" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/businessCase/图片18.png" alt="" />
          </div>
          <p class="ti">
            近年来，国家和企业对安全生产越来越重视，“人防与技防相结合”、“预防为主”的安全文明生产指导方针深入贯彻到工厂企业，安全文明生产环境是企业工厂的基本要求。
          </p>
          <p class="ti">
            化工园区安全监管主要存在两大现实难题。第一个是单位主体责任落实难，经营单位落实主体责任过程较繁琐、结果难以呈现，单靠“人海战术”摸排收集的监管数据也难以及时更新，无法实时跟进单位主体责任的落地；第二个是监管部门信息共享难，多部门之间的监管“信息壁垒”仍然存在，监管的“信息孤岛”格局难以打破；因此，建设以互联网、物联网IoT、人工智能AI及大数据技术为核心的互联网+化工智慧系统，能够加快实现全程留痕、信息可追溯，提升监管效能，真正做到监管的及时精准，也促使化工单位及其从业人员的行为更加规范。
          </p>
        </div>
        <div class="btn">
          <div class="btn-left" @click="goDetail">上一篇:智慧加油站</div>
          <div class="btn-right" @click="goSite">下一篇:智慧工地</div>
        </div>
      </div>
      <div class="content-right">
        <div class="center">
          <div class="title">商业案例</div>
        </div>
        <div class="recommend">
          <div class="title">相关推荐</div>
          <div class="tab" @click="goDetail">智慧加油站</div>
          <div class="tab" @click="goSite">智慧工地</div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 右侧固定 -->
    <Affix></Affix>
  </div>
</template>

<script>
// 引入轮播图
import Banner from '@/layout/banner'
//引入底部
import Footer from '@/layout/footer'
//引入侧边导航栏
import Affix from '@/layout/affix'

export default {
  name: 'chemicalPlant',
  components: {
    Banner,
    Footer,
    Affix,
  },
  methods: {
    goDetail() {
      this.$router.push({ path: '/caseDetail' })
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
  .container {
    width: 70%;
    margin: 50px auto;
    // display: flex;
    justify-content: space-between;

    .content-left {
      width: 100%;

      .top {
        display: flex;
        justify-content: space-between;
        //text-align: center;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #999999;

        .title {
          font-size: 22px;
        }

        .date {
          font-size: 12px;
          color: #a3afb7;
          margin-top: 10px;
        }
      }

      .text {
        padding: 10px 0;
        border-bottom: 1px solid #999999;

        .pic {
          text-align: center;

          img {
            width: 100%;
            height: 100%;
            // width: 500px;
            // height: 300px;
          }
        }

        p {
          margin: 10px 0;
        }

        .ti {
          white-space: normal;
          text-indent: 2em;
        }

        ul {
          li:nth-child(1) {
            list-style: none;
            font-size: 20px;
            font-family: 'FangSong';
          }

          li {
            padding: 5px 10px;
          }
        }
      }

      .btn {
        // display: flex;
        justify-content: space-between;
        margin: 20px;
        align-items: center;

        .btn-left {
          margin-bottom: 10px;
          cursor: pointer;
          padding: 10px 12px;
          color: #999999;
          border: 1px solid #999999;
        }

        .btn-right {
          cursor: pointer;
          padding: 10px 12px;
          color: #999999;
          border: 1px solid #999999;
        }

        .btn-left:hover {
          cursor: pointer;
          padding: 10px 12px;
          color: #0a3daa;
          border: 1px solid #0a3daa;
        }

        .btn-right:hover {
          cursor: pointer;
          padding: 10px 12px;
          color: #0a3daa;
          border: 1px solid #0a3daa;
        }
      }
    }

    .content-right {
      width: 100%;

      .center {
        margin-bottom: 20px;

        .title {
          color: #0a3daa;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .tab {
          font-size: 14px;
          padding: 20px;
          border-top: 1px solid #999999;
        }

        .active {
          color: #0a3daa;
          border-left: 4px solid #0a3daa;
        }
      }

      .recommend {
        .title {
          color: #0a3daa;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .tab {
          font-size: 14px;
          border-top: 1px solid #999999;
          padding: 20px 0;
          cursor: pointer;
        }

        .tab:hover {
          color: #0a3daa;
        }
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
  .container {
    width: 70%;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;

    .content-left {
      width: 75%;

      .top {
        display: flex;
        justify-content: space-between;
        //text-align: center;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #999999;

        .title {
          font-size: 22px;
        }

        .date {
          font-size: 12px;
          color: #a3afb7;
          margin-top: 10px;
        }
      }

      .text {
        padding: 10px;
        border-bottom: 1px solid #999999;

        .pic {
          text-align: center;

          img {
            width: 500px;
            height: 300px;
          }
        }

        p {
          margin: 10px 0;
        }

        .ti {
          white-space: normal;
          text-indent: 2em;
        }

        ul {
          li:nth-child(1) {
            list-style: none;
            font-size: 20px;
            font-family: 'FangSong';
          }

          li {
            padding: 5px 10px;
          }
        }
      }

      .btn {
        display: flex;
        justify-content: space-between;
        margin: 20px;
        align-items: center;

        .btn-left {
          cursor: pointer;
          padding: 10px 12px;
          color: #999999;
          border: 1px solid #999999;
        }

        .btn-right {
          cursor: pointer;
          padding: 10px 12px;
          color: #999999;
          border: 1px solid #999999;
        }

        .btn-left:hover {
          cursor: pointer;
          padding: 10px 12px;
          color: #0a3daa;
          border: 1px solid #0a3daa;
        }

        .btn-right:hover {
          cursor: pointer;
          padding: 10px 12px;
          color: #0a3daa;
          border: 1px solid #0a3daa;
        }
      }
    }

    .content-right {
      width: 17%;

      .center {
        margin-bottom: 20px;

        .title {
          color: #0a3daa;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .tab {
          font-size: 14px;
          padding: 20px;
          border-top: 1px solid #999999;
        }

        .active {
          color: #0a3daa;
          border-left: 4px solid #0a3daa;
        }
      }

      .recommend {
        .title {
          color: #0a3daa;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .tab {
          font-size: 14px;
          border-top: 1px solid #999999;
          padding: 20px 0;
          cursor: pointer;
        }

        .tab:hover {
          color: #0a3daa;
        }
      }
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
// .container {
//   width: 70%;
//   margin: 50px auto;
//   display: flex;
//   justify-content: space-between;

//   .content-left {
//     width: 75%;

//     .top {
//       display: flex;
//       justify-content: space-between;
//       //text-align: center;
//       align-items: center;
//       padding: 20px 0;
//       border-bottom: 1px solid #999999;

//       .title {
//         font-size: 22px;
//       }

//       .date {
//         font-size: 12px;
//         color: #a3afb7;
//         margin-top: 10px;
//       }
//     }

//     .text {
//       padding: 10px;
//       border-bottom: 1px solid #999999;

//       .pic {
//         text-align: center;

//         img {
//           width: 500px;
//           height: 300px;
//         }
//       }

//       p {
//         margin: 10px 0;
//       }

//       .ti {
//         white-space: normal;
//         text-indent: 2em;
//         line-height: 1.5;
//         font-family: 'FangSong', 'SimSun', serif;
//       }

//       ul {
//         li:nth-child(1) {
//           list-style: none;
//           font-size: 20px;
//           font-family: 'FangSong';
//         }

//         li {
//           padding: 5px 10px;
//         }
//       }
//     }

//     .btn {
//       display: flex;
//       justify-content: space-between;
//       margin: 20px;
//       align-items: center;

//       .btn-left {
//         cursor: pointer;
//         padding: 10px 12px;
//         color: #999999;
//         border: 1px solid #999999;
//       }

//       .btn-right {
//         cursor: pointer;
//         padding: 10px 12px;
//         color: #999999;
//         border: 1px solid #999999;
//       }

//       .btn-left:hover {
//         cursor: pointer;
//         padding: 10px 12px;
//         color: #0a3daa;
//         border: 1px solid #0a3daa;
//       }

//       .btn-right:hover {
//         cursor: pointer;
//         padding: 10px 12px;
//         color: #0a3daa;
//         border: 1px solid #0a3daa;
//       }
//     }
//   }

//   .content-right {
//     width: 17%;

//     .center {
//       margin-bottom: 20px;

//       .title {
//         color: #0a3daa;
//         font-size: 20px;
//         font-weight: 600;
//         margin-bottom: 10px;
//       }

//       .tab {
//         font-size: 14px;
//         padding: 20px;
//         border-top: 1px solid #999999;
//       }

//       .active {
//         color: #0a3daa;
//         border-left: 4px solid #0a3daa;
//       }
//     }

//     .recommend {
//       .title {
//         color: #0a3daa;
//         font-size: 20px;
//         font-weight: 600;
//         margin-bottom: 10px;
//       }

//       .tab {
//         font-size: 14px;
//         border-top: 1px solid #999999;
//         padding: 20px 0;
//         cursor: pointer;
//       }

//       .tab:hover {
//         color: #0a3daa;
//       }
//     }
//   }
// }
</style>
