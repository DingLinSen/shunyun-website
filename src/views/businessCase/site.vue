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
          <p class="title">智慧工地</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <div class="pic">
            <img src="@/assets/images/businessCase/图片16.png" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/businessCase/图片19.png" alt="" />
          </div>
          <p class="ti">
            通过工地可视化系统为政府、企业、现场施工管理提供了先进技术手段，通过安装在建筑施工作业现场的各类摄像头，构造只能监控和防范体系，就能有效补充传通方法和技术在监管中的缺陷，实现对人、机、料、法、环的全方位实时监控，变被动“监督”为主动“监控”；同时其也将为安全生产监督管理引入新理念，真正体现“安全第一、预防为主、综合治理”的安全生产方针，传统的施工检测，容易受人为影响且效率低下，通过引入AI技术，可以有效提供建筑施工质量，进而构建智能建筑，并最终达到创造智能城市的目标
          </p>
        </div>
        <div class="btn">
          <div class="btn-left" @click="gochemicalPlant">上一篇:智慧化工厂</div>
          <div class="btn-right">下一篇:没有了</div>
        </div>
      </div>
      <div class="content-right">
        <div class="center">
          <div class="title">商业案例</div>
        </div>
        <div class="recommend">
          <div class="title">相关推荐</div>
          <div class="tab" @click="goDetail">智慧加油站</div>
          <div class="tab" @click="gochemicalPlant">智慧化工厂</div>
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
    gochemicalPlant() {
      this.$router.push({ path: '/chemicalPlant' })
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
