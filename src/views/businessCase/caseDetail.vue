<template>
  <div class="case-detail">
    <!-- 轮播图 -->
    <div class="banner">
      <img src="@/assets/images/商业案例大图.jpg" alt="" />
    </div>
    <!--    内容-->
    <div class="container">
      <div class="content-left">
        <div class="top">
          <p class="title">智慧加油站</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <div class="pic">
            <img src="@/assets/images/businessCase/图片14.png" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/businessCase/图片17.png" alt="" />
          </div>
          <ul>
            <li>安全经营、降本增效，实现智能化转型升级</li>
            <li>卸油作业规范依赖人员安全意识</li>
            <li>抽烟、打电话等危险行为难管控</li>
            <li>人员操作难管控</li>
            <li>无法保障24小时监测</li>
          </ul>
          <ul>
            <li>精细运营、数智决策，实现数字化管理提效</li>
            <li>加油和非油品销售，无有效结合</li>
            <li>无精准客户画像，无法使用进行精准营销</li>
            <li>自主服务程度低</li>
          </ul>
        </div>
        <div class="btn">
          <div class="btn-left">上一篇:没有了</div>
          <div class="btn-right" @click="gochemicalPlant">下一篇:智慧化工厂</div>
        </div>
      </div>
      <div class="content-right">
        <div class="center">
          <div class="title">商业案例</div>
        </div>
        <div class="recommend">
          <div class="title">相关推荐</div>
          <div class="tab" @click="gochemicalPlant">智慧化工厂</div>
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
  name: 'caseDetail',
  components: {
    Banner,
    Footer,
    Affix,
  },
  methods: {
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
