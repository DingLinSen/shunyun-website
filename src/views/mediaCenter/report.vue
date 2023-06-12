<template>
  <div class="report">
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
      <ul class="report-box">
        <li @click="goOne(4)">
          <div class="title">山东省某单位信息化设备采购项目四</div>
          <div class="date">2023-06-07</div>
        </li>
        <li @click="goOne(3)">
          <div class="title">山东省某单位信息化设备采购项目三</div>
          <div class="date">2023-06-06</div>
        </li>
        <li @click="goOne(2)">
          <div class="title">山东省某单位信息化设备采购项目二</div>
          <div class="date">2023-06-05</div>
        </li>
        <li @click="goOne(1)">
          <div class="title">山东省某单位信息化设备采购项目一</div>
          <div class="date">2023-06-02</div>
        </li>
      </ul>
      <!-- <ul class="content">
        <li v-for="(item, index) in 9" :key="index">
          <div class="title">智能楼宇控制系统</div>
          <div class="bor"></div>
          <img src="@/assets/images/0335e0f16c10f5ad55bdcb78aa95e41.png" alt="" />
        </li>
      </ul> -->
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
  name: 'report',
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
    goOne(val) {
      this.$router.push({ path: '/one', query: { value: val } })
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
li {
  list-style: none;
}
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
    .report-box {
      width: 100%;
      margin: 30px auto;
      li {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        border-bottom: 1px solid #999999;
        padding: 20px 0;
        .date {
          padding-right: 20px;
          color: #999999;
        }
      }
      li:hover {
        color: #0a3daa;
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
      width: 100%;
      margin-left: 25%;
      display: flex;

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
    .report-box {
      width: 75%;
      margin: 30px auto;
      li {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        border-bottom: 1px solid #999999;
        padding: 20px 0;
        .date {
          padding-right: 20px;
          color: #999999;
        }
      }
      li:hover {
        color: #0a3daa;
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
//   .report-box {
//     width: 50%;
//     margin: 50px auto;
//     // text-align: center;
//     li {
//       width: 80%;
//       display: flex;
//       padding: 20px 10px;
//       border-bottom: 1px solid #ccc;
//       justify-content: space-between;
//       margin: 10px 0;
//       cursor: pointer;
//       .date {
//         // margin-left: 60px;
//         color: #999999;
//       }
//     }
//     li:hover {
//       .title {
//         color: #0a3daa;
//       }
//     }
//   }

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
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     margin-top: 30px;

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
//         border: 1px solid #0a3daa;
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
