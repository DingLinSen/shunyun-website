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
          <p class="title">人工智能前沿——未来AI技术的五大应用领域</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <p>未来人工智能技术发展的五大应用领域：航空航天、医疗保健、建筑行业、能源领域以及供应链。</p>
          <p class="text-title">一、航空航天</p>
          <p class="ti">
            航空航天领域的发展一直与人工智能紧密交织，如美国国家航空航天局（NASA）的“好奇”号火星车已经使用人工智能探索火星好几年了。一些专家甚至会说，太空探索是一些最先进人工智能技术的发源地。
          </p>
          <p class="ti">
            目前，NASA已经使用人工智能帮助‘好奇’号火星车导航，正在训练人工智能系统，希望其能在即将开展的‘火星太空生物学’任务期间指导漫游车在火星上的岩石样本中寻找外星生命存在的‘蛛丝马迹’，这是朝着让更多自主探测器探索更远区域这一最终目标迈出的重要一步。
          </p>
          <p class="ti">相信未来随着时间的推移，人工智能/机器学习解决方案将更具创新性，这些技术未来将成为加深人类对宇宙理解的不可或缺的重要工具。</p>
          <p class="text-title">二、医疗保健</p>
          <p class="ti">
            人工智能可以帮助医疗保健部门应对目前困扰该行业的运营低效等“顽疾”。先进的方法将对该行业产生巨大影响，为其最有价值的数据提供更全面的见解。随着医疗保健机构和研究人员为医疗保健数据的安全共享建立起强有力的标准，新的人工智能协作项目将推动更明智的医疗决策。
          </p>
          <p class="ti">
            人工智能和机器学习解决方案使决策者更容易访问大量非结构化数据，有助于提高预测分析的准确性，简化管理操作，获得更明智的流程建议并提高患者筛查的效率，这将极大地提升整个行业的运作效率。
          </p>
          <p class="text-title">三、建筑行业</p>
          <p class="ti">
            目前，强大的人工智能已在建筑领域马力全开，实现流程数字化，并为不同机构和组织提供更有价值的信息。利用传感器和其他功能数据的预测性维护工具会提供优化方案——从精简文档到提供更好的数据决策支持，涉及工业设备的维护和长期运行，以及出现意外情况时提供补救措施等情况。未来，人工智能技术将大大提高整个施工过程的效率。
          </p>
          <p class="text-title">四、能源领域</p>
          <p class="ti">
            人工智能已经开始在整个能源行业的数字化转型中发挥重要作用，不久的将来会取得重大成果，这将优化运营，提高效率和可持续性。例如，人工智能公司正在主要能源公司的炼油厂内创建和运行决策支持软件，旨在提出及时、可解释的建议，使运营商能够实时弥补差距，最大限度地提高整个运营的效率。
          </p>
          <p class="ti">在讨论人工智能和其他数字解决方案对行业的影响时，麦肯锡公司表示，企业的生产效率可能会提高20%，总体维护成本可能会降低10%。</p>
          <p class="text-title">五、供应链</p>
          <p class="ti">
            供应链数据的持续数字化转换和广泛的传感器分析，以及更精简的过程自动化和验证，都需要与决策者协作的人工智能建议和机器学习技术。先进人工智能工具提供的新的可视性水平将增强人们的预测能力，从而缓解危机。
          </p>
        </div>
        <div class="btn">
          <div class="btn-left">上一篇:没有了</div>
          <div class="btn-right" @click="goSjrg">下一篇:视觉人工智能行业发展现状及趋势分析</div>
        </div>
      </div>
      <div class="content-right">
        <div class="center">
          <div class="title" @click="goMediaCenter">媒体中心</div>
          <div class="tab active" @click="goFrontier">技术前沿</div>
          <div class="tab" @click="goConsultation">行业资讯</div>
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
