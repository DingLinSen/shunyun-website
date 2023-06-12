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
          <p class="title">视觉人工智能行业发展现状及趋势分析</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <p class="ti">
            在新一轮AI热潮之下，人工智能技术将加速与更多技术和产业的融合，下游蓬勃的需求将被唤醒。面向智能化的时代，舜云科技为客户提供覆盖多个场景的完整系统级解决方案，实现AI赋能于智慧安防、智能车载、智能硬件三大应用领域。
          </p>
          <p class="ti">
            AI即人工智能，视觉AI属于人工智能一个子领域，一般时候称为“计算机视觉”，主要方向为模式识别、图像处理。人工智能给产业带来的变革主要体现在商业模式、生产模式、组织模式等多个方面。
          </p>
          <p class="ti">
            工智能应用将导致一些传统职业的消失和新兴职业的出现。例如，司机这一职业可能会被自动驾驶汽车所取代。同时，虚拟顾问、数据分析师等新兴职业将会产生。人工智能技术的发展更将深刻改变人们的生活和社会结构。例如，智能家居和智慧城市的建设可以提高人们的生活质量和安全水平，但也可能带来房地产泡沫和隐私泄露等问题。
          </p>
          <p class="ti">
            在商业模式方面，人工智能可以优化企业的决策流程和供应链管理，实现更高效的客户服务和精准营销，提高企业的竞争力和盈利能力。例如，在零售领域，消费者行为分析技术可以帮助零售商预测消费者需求，从而调整库存和订货策略。
          </p>
          <p class="ti">
            在生产模式方面，人工智能可以实现自动化和智能化生产，减少人力成本和生产时间，提高生产效率和质量。在组织模式方面，人工智能可以改变企业的组织形式和运营模式，实现灵活、高效的经营管理。
          </p>
          <p class="text-title">视觉人工智能行业发展现状</p>
          <p class="ti">在机器视觉产品中，上游软硬件共占总成本的 80%，分别占比为 45%、35%， 组装集成和维护分别占总成本的15%、5%。</p>
          <p class="ti">
            机器视觉全球市场规模从2010年的31.7 亿美元增长至 2020 年的 107 亿美元，年复合增长率为
            14.47%。从地区分布来看，机器视觉市场规模最大的为欧洲地区，占全球的 36.4%;北美和亚太地区分别占比为29.3%、25.3%，南美、中东、非洲地区的占比为9.1%。
          </p>
          <p class="ti">
            机器视觉行业产业链中，上游硬件部分包括光源、镜头、工业相机、图像处理器、
            图像采集卡;软件包括图像处理软件和底层算法。中游为设备制造商与系统集成商；机器视觉下游应用广泛，包括半导体、汽车、包装、医药、工业机器人等行业。
          </p>
          <p class="ti">人工智能将深刻改变产业发展的格局和趋势，推动经济社会向智能化、信息化、绿色化方向转型升级。</p>
          <p class="ti">
            作为一个从去年11月起，一个不能称之为新发明的智能聊天机器人，其在短短两个月就收获了1亿的活跃用户，这对于AI行业来讲是一个了不得的事情。”根据官方的说法，ChatGPT是人工智能技术驱动的自然语言处理工具，它能够通过理解和学习人类的语言来进行对话，还能根据聊天的上下文进行互动，真正像人类一样来聊天交流，甚至能完成撰写邮件、视频脚本、文案、翻译、代码，写论文等任务。
          </p>
          <p class="ti">
            ChatGPT的表现足以使得大众在认知AI的道路上加速5-10年，且再次让人们产生了积极探索AI创造力的热情，这将使得AI应用领域不断丰富和发展，从而推动对AI的认知和需求的增长。2023年，AI因ChatGPT而重生。虽然ChatGPT是基于云端的技术，但推动的是云边端的共同发展。
          </p>
          <p class="ti">
            “产业元宇宙”更加强调数字化与产业融合的过程，是对实体经济的赋能和创新的一种新型模式。从中长期发展的角度，产业元宇宙将成为元宇宙形态发展的必然趋势，通过数字孪生、工业智能技术实现产业流程再造与产业能效持续提升，将催生新一代产业基础设施，带动实体经济的发展与社会效率的升级。
          </p>
        </div>
        <div class="btn">
          <div class="btn-left" @click="goMediaContent">上一篇:人工智能前沿——未来AI技术的五大应用领域</div>
          <div class="btn-right" @click="goSf">下一篇:算法的五个特性</div>
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
