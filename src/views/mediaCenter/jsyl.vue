<template>
  <div class="media-content">
    <!-- 轮播图 -->
    <div class="banner">
      <img src="@/assets/images/媒体中心大图.jpg" alt="" />
      <div class="text">分享舜云最新动态</div>
    </div>
    <!--    内容-->
    <div class="container">
      <div class="content-left">
        <div class="top">
          <p class="title">AI视觉技术原理是什么？</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <p class="ti">
            AI视觉技术(又称计算机视觉)是计算机科学的一个领域，它训练计算机复制人类的视觉系统。这使得数字设备(如人脸检测器和二维码扫描仪)能够像人类一样识别和处理图像和视频中的对象。
          </p>
          <p class="ti">无论哪个行业，都会为企业的未来带来可能性。下面简单介绍AI视觉技术的工作原理。</p>
          <p class="ti">
            AI视觉技术(artificial intelligence computer
            vision)是研究如何让机器“看见”的科学，即利用摄像机和计算机代替人眼识别、跟踪和测量目标等机器视觉，并进一步做图形处理，使计算机处理的图像更适合人眼观察或传输到仪器进行检测。计算机视觉也可以看作是一门研究如何让人工系统从图像或多维数据中“感知”的科学。
          </p>
          <p class="ti">
            机器视觉的基本原理是用机器代替人眼进行测量和判断。机器视觉系统通过图像采集设备将采集到的物体转换成图像信号，传输到专门的图像处理系统，获得采集到的物体的形态信息，根据像素分布、亮度、颜色等信息转换成数字信号；图像系统对这些信号进行各种运算，提取目标的特征，然后根据判别结果控制现场设备的动作。
          </p>
        </div>
        <div class="btn">
          <div class="btn-left" @click="goFzqs">上一篇:AI视觉技术的发展趋势</div>
          <div class="btn-right" @click="goWhy">下一篇:为什么说视觉AI很重要？</div>
        </div>
      </div>
      <div class="content-right">
        <div class="center">
          <div class="title" @click="goMediaCenter">媒体中心</div>
          <div class="tab" @click="goFrontier">技术前沿</div>
          <div class="tab active" @click="goConsultation">行业资讯</div>
          <div class="tab" @click="goReport">招标采购</div>
        </div>
        <div class="recommend">
          <div class="title">相关推荐</div>
          <div class="tab" @click="goMediaContent">人工智能前沿——未来AI技术的五大应用领域</div>
          <div class="tab" @click="goSjrg">视觉人工智能行业发展现状及趋势分析</div>
          <div class="tab" @click="goSf">算法的五个特性</div>
          <div class="tab" @click="goFzqs">AI视觉技术的发展趋势</div>
          <div class="tab" @click="goJsyl">AI视觉技术原理是什么？</div>
          <div class="tab" @click="goWhy">为什么说视觉AI很重要？</div>
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
  name: 'mediaContent',
  methods: {
    goMediaCenter() {
      this.$router.push({ path: '/mediaCenter' })
    },
    goFrontier() {
      this.$router.push({ path: '/frontier' })
    },
    goConsultation() {
      this.$router.push({ path: '/consultation' })
    },
    goReport() {
      this.$router.push({ path: '/report' })
    },
    goMediaContent() {
      this.$router.push({ path: '/mediaContent' })
    },
    goSjrg() {
      this.$router.push({ path: '/sjrg' })
    },
    goSf() {
      this.$router.push({ path: '/sf' })
    },

    goFzqs() {
      this.$router.push({ path: '/fzqs' })
    },
    goJsyl() {
      this.$router.push({ path: '/jsyl' })
    },
    goWhy() {
      this.$router.push({ path: '/why' })
    },
  },
  components: {
    Banner,
    Footer,
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
  .container {
    width: 70%;
    margin: 0 auto;
    // display: flex;
    justify-content: space-between;

    .content-left {
      width: 100%;

      .top {
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid #999999;

        .title {
          font-size: 24px;
        }

        .date {
          font-size: 14px;
          color: #a3afb7;
          margin-top: 10px;
        }
      }

      .text {
        padding: 10px;
        border-bottom: 1px solid #999999;

        .text-title {
          font-weight: 600;
          font-size: 18px;
        }

        p {
          margin: 10px 0;
        }

        .ti {
          white-space: normal;
          text-indent: 2em;
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
          cursor: pointer;
        }

        .tab {
          font-size: 14px;
          padding: 20px;
          border-top: 1px solid #999999;
          cursor: pointer;
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
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid #999999;

        .title {
          font-size: 24px;
        }

        .date {
          font-size: 14px;
          color: #a3afb7;
          margin-top: 10px;
        }
      }

      .text {
        padding: 10px;
        border-bottom: 1px solid #999999;

        .text-title {
          font-weight: 600;
          font-size: 18px;
        }

        p {
          margin: 10px 0;
        }

        .ti {
          white-space: normal;
          text-indent: 2em;
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
          cursor: pointer;
        }

        .tab {
          font-size: 14px;
          padding: 20px;
          border-top: 1px solid #999999;
          cursor: pointer;
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
//       text-align: center;
//       padding: 30px 0;
//       border-bottom: 1px solid #999999;

//       .title {
//         font-size: 24px;
//       }

//       .date {
//         font-size: 14px;
//         color: #a3afb7;
//         margin-top: 10px;
//       }
//     }

//     .text {
//       padding: 10px;
//       border-bottom: 1px solid #999999;

//       .text-title {
//         font-weight: 600;
//         font-size: 18px;
//       }

//       p {
//         margin: 10px 0;
//       }

//       .ti {
//         white-space: normal;
//         text-indent: 2em;
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
//         cursor: pointer;
//       }

//       .tab {
//         font-size: 14px;
//         padding: 20px;
//         border-top: 1px solid #999999;
//         cursor: pointer;
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
