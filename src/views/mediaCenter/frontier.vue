<template>
  <div class="frontier">
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播图 -->
    <div class="banner">
      <img src="@/assets/images/媒体中心大图.jpg" alt="" />
      <div class="text">分享舜云最新动态</div>
    </div>
    <!-- 内容-->
    <div class="container">
      <ul class="tabs">
        <li @click="skipPage(item.url)" :class="$route.path == item.url ? 'active' : ''" v-for="(item, index) in tabData" :key="index">
          {{ item.name }}
        </li>
      </ul>
      <ul class="content">
        <li @click="goDetail">
          <img src="@/assets/images/mediaCenter/rgzn.jpg" alt="" />
          <div class="text-content">
            <div class="title">人工智能前沿——未来AI技术的五大应用领域</div>
            <!--            <div class="date">-->
            <!--              2020-11-19-->
            <!--            </div>-->
            <div class="text">未来人工智能技术发展的五大应用领域：航空航天、医疗保健、建筑行业、能源领域以及供应链。</div>
          </div>
        </li>
        <li @click="goSjrg">
          <img src="@/assets/images/mediaCenter/sjrg.jpg" alt="" />
          <div class="text-content">
            <div class="title">视觉人工智能行业发展现状及趋势分析</div>
            <!--            <div class="date">-->
            <!--              2020-11-19-->
            <!--            </div>-->
            <div class="text">
              在新一轮AI热潮之下，人工智能技术将加速与更多技术和产业的融合，下游蓬勃的需求将被唤醒。面向智能化的时代，舜云科技为客户提供覆盖多个场景的完整系统级解决方案，实现AI赋能于智慧安防、智能车载、智能硬件三大应用领域。
            </div>
          </div>
        </li>
        <li @click="goSf">
          <img src="@/assets/images/mediaCenter/sf.jpg" alt="" />
          <div class="text-content">
            <div class="title">算法的五个特性</div>
            <!--            <div class="date">-->
            <!--              2020-11-19-->
            <!--            </div>-->
            <div class="text">算法是为了解决某类问题而规定的一个有限长的操作序列。</div>
          </div>
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
  name: 'frontier',
  data() {
    return {
      tabData: [
        {
          name: '全部',
          url: '/mediaCenter',
        },
        {
          name: '技术前沿',
          url: '/frontier',
        },
        {
          name: '行业咨询',
          url: '/consultation',
        },
        {
          name: '招标采购',
          url: '/report',
        },
      ],
    }
  },
  methods: {
    //  点击导航栏跳转页面
    skipPage(url) {
      this.$router.push({ path: url })
    },
    //  跳转到详情
    goDetail() {
      this.$router.push({ path: '/mediaContent' })
    },
    goSjrg() {
      this.$router.push({ path: '/sjrg' })
    },
    goSf() {
      this.$router.push({ path: '/sf' })
    },
  },
  components: {
    Header,
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
    margin: 30px auto;

    .tabs {
      width: 45%;
      // display: flex;
      margin: auto;
      text-align: center;

      li {
        cursor: pointer;
        list-style: none;
        padding: 10px 20px;
        margin: 10px 0px;
        border-radius: 20px;
        border: 1px solid rgb(153, 153, 153);
      }

      //li:nth-child(1) {
      //  color: #ffffff;
      //  background-color: #0a3daa;
      //  border: 1px solid #0a3daa;
      //}
      .active {
        color: #ffffff;
        background-color: #0a3daa;
        border: 1px solid #0a3daa;
      }

      li:hover {
        color: #ffffff;
        background-color: #0a3daa;
        border: 1px solid #0a3daa;
      }
    }

    .content {
      // margin-top: 50px;

      li {
        list-style: none;
        cursor: pointer;
        // display: flex;
        padding: 20px 0;
        border-bottom: 1px solid rgb(233, 233, 233);

        img {
          width: 100%;
          height: 100%;
          // width: 380px;
          // height: 235px;
        }

        .text-content {
          // margin-top: 15px;
          // margin-left: 30px;

          .date {
            margin-top: 10px;
            font-size: 13px;
            color: rgb(153, 153, 153);
          }

          .text {
            font-size: 13px;
            color: rgb(153, 153, 153);
          }
        }
      }

      li:hover {
        background-color: #0a3daa;
        color: #ffffff;
        padding: 20px 10px;
        transition: all, 0.3s;

        .date {
          margin-top: 10px;
          font-size: 13px;
          color: #ffffff;
        }

        .text {
          font-size: 13px;
          color: #ffffff;
        }

        img {
          transform: scale(0.95);
          transition: all, 0.3s;
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
    margin: 30px auto;

    .tabs {
      width: 45%;
      display: flex;
      margin: auto;

      li {
        cursor: pointer;
        list-style: none;
        padding: 10px 20px;
        margin: 0 10px;
        border-radius: 20px;
        border: 1px solid rgb(153, 153, 153);
      }

      //li:nth-child(1) {
      //  color: #ffffff;
      //  background-color: #0a3daa;
      //  border: 1px solid #0a3daa;
      //}
      .active {
        color: #ffffff;
        background-color: #0a3daa;
        border: 1px solid #0a3daa;
      }

      li:hover {
        color: #ffffff;
        background-color: #0a3daa;
        border: 1px solid #0a3daa;
      }
    }

    .content {
      margin-top: 50px;

      li {
        cursor: pointer;
        display: flex;
        padding: 20px 0;
        border-bottom: 1px solid rgb(233, 233, 233);

        img {
          width: 380px;
          height: 235px;
        }

        .text-content {
          margin-top: 15px;
          margin-left: 30px;

          .date {
            margin-top: 10px;
            font-size: 13px;
            color: rgb(153, 153, 153);
          }

          .text {
            font-size: 13px;
            color: rgb(153, 153, 153);
          }
        }
      }

      li:hover {
        background-color: #0a3daa;
        color: #ffffff;
        padding: 20px 10px;
        transition: all, 0.3s;

        .date {
          margin-top: 10px;
          font-size: 13px;
          color: #ffffff;
        }

        .text {
          font-size: 13px;
          color: #ffffff;
        }

        img {
          transform: scale(0.95);
          transition: all, 0.3s;
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
//   margin: 30px auto;

//   .tabs {
//     width: 45%;
//     display: flex;
//     margin: auto;

//     li {
//       cursor: pointer;
//       list-style: none;
//       padding: 10px 20px;
//       margin: 0 10px;
//       border-radius: 20px;
//       border: 1px solid rgb(153, 153, 153);
//     }

//     //li:nth-child(1) {
//     //  color: #ffffff;
//     //  background-color: #0a3daa;
//     //  border: 1px solid #0a3daa;
//     //}
//     .active {
//       color: #ffffff;
//       background-color: #0a3daa;
//       border: 1px solid #0a3daa;
//     }

//     li:hover {
//       color: #ffffff;
//       background-color: #0a3daa;
//       border: 1px solid #0a3daa;
//     }
//   }

//   .content {
//     margin-top: 50px;

//     li {
//       cursor: pointer;
//       display: flex;
//       padding: 20px 0;
//       border-bottom: 1px solid rgb(233, 233, 233);

//       img {
//         width: 380px;
//         height: 235px;
//       }

//       .text-content {
//         margin-top: 15px;
//         margin-left: 30px;

//         .date {
//           margin-top: 10px;
//           font-size: 13px;
//           color: rgb(153, 153, 153);
//         }

//         .text {
//           margin-top: 5px;
//           font-size: 13px;
//           color: rgb(153, 153, 153);
//         }
//       }
//     }

//     li:hover {
//       background-color: #0a3daa;
//       color: #ffffff;
//       padding: 20px 10px;
//       transition: all, 0.3s;

//       .date {
//         margin-top: 10px;
//         font-size: 13px;
//         color: #ffffff;
//       }

//       .text {
//         font-size: 13px;
//         color: #ffffff;
//       }

//       img {
//         transform: scale(0.95);
//         transition: all, 0.3s;
//       }
//     }
//   }
// }
</style>
