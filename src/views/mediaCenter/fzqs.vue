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
          <p class="title">AI视觉技术的发展趋势</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <p class="ti">
            简单来说，视觉AI就是研究如何让机器“看得见”，即用摄像机和计算机代替人眼提取和分析图像的特征，并训练模型检测和识别新的图像数据，从而建立一个能够从图像或多模态数据中获取“信息”的人工智能系统。
          </p>
          <p class="ti">
            随着AI技术的广泛应用，计算机视觉技术无疑是普通人感知最深的AI技术。从OCR识别、人脸验证、刷脸支付到智能货柜，计算机视觉技术逐渐成熟，并应用到生活的方方面面。通过这些丰富的实际落地案例和赋能经验分析，我们可以清晰地发现，视觉AI的大规模应用已经初步成型，未来可期。
          </p>
          <p class="ti">
            趋势一:视觉AI应用门槛持续降低。AI应用门槛的降低也使得大量中小企业在密集应用视觉AI技术，实现了产品的初步商业化和细分场景的突破。随着产业基础的夯实和生态的逐渐成熟，预计将会涌现出一批中小型企业，并完成大规模商业化。
          </p>
          <p class="ti">
            趋势二:打破行业界限，与实体经济结合更紧密。视觉的应用路径大致可以分为“AI+”和“+AI”。发展初期，更多的AI+是算法创新驱动，基于算法能力重新设计产品，颠覆行业。随着算法应用的逐渐成熟和对外开放，视觉AI已经突破了行业边界，更成熟的行业也开始推出相应的技术。这种“+AI”模式更多的是用技术改造和优化行业原有的流程，从而实现产业升级。
          </p>
          <p class="ti">
            趋势三:应用百花齐放，降本增效和应用创新是两大驱动力。随着企业在各行业的广泛应用，视觉AI落地产品全面开花。不仅有智能门禁、刷脸支付、身份验证等典型应用，还有智能班卡、智能卫生纸机、景区智能检票、人脸识别垃圾桶等一大批全新产品。适用于细分场景。这些产品带来的价值也非常值得关注。除了提升用户体验，降本增效和应用创新是更重要的业务环节中的两个核心点。
          </p>
        </div>
        <div class="btn">
          <div class="btn-left">上一篇:没有了</div>
          <div class="btn-right" @click="goJsyl">下一篇:AI视觉技术原理是什么？</div>
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
