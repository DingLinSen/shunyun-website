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
          <p class="title">算法的五个特性</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <p>算法是为了解决某类问题而规定的一个有限长的操作序列。 一个算法必须满足以下五个重要特性。</p>
          <p>(1)有穷性。一个算法必须总是在执行有穷步后结束，且每一步都必须在有穷时间内完成。</p>
          <p>(2) 确定性。对千每种情况下所应执行的操作，在算法中都有确切的规定，不会产生二义性， 使算法的执行者或阅读者都能明确其含义及如何执行。</p>
          <p>(3) 可行性。算法中的所有操作都可以通过已经实现的基本操作运算执行有限次来实现。</p>
          <p>(4) 输入。一个算法有零个或多个输入。当用函数描述算法时，输入往往是通过形参表示的， 在它们被调用时，从主调函数获得输入值。</p>
          <p>
            (5) 输出。一个算法有一个或多个输出，它们是算法进行信息加工后得到的结果，无输出的
            算法没有任何意义。当用函数描述算法时，输出多用返回值或引用类型的形参表示。
          </p>
        </div>
        <div class="btn">
          <div class="btn-left" @click="goSjrg">上一篇:视觉人工智能行业发展现状及趋势分析</div>
          <div class="btn-right">下一篇:没有了</div>
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
