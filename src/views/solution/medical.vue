<template>
  <div class="park">
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播图 -->
    <!-- <Banner></Banner> -->
    <div class="banner">
      <img src="@/assets/images/解决方案大图.jpg" alt="" />
      <div class="text">智能图像算法精准高效，使用各行业应用场景</div>
    </div>
    <!-- 内容-->
    <div class="container">
      <div class="title">智慧工地</div>
      <div class="detail">方案概述</div>
      <div class="solutionContent">
        <div class="solutionLeft">
          <div class="text">
            <p class="ti">山东省住房和城乡建设厅引发关于《全省房屋建筑和市政工程智慧工地建设指导意见》关于推广智能视频监控系统。</p>
            <p class="ti">
              紧盯易发群死群伤事故的危大工程风险隐患治理，集中在起重机械设备管理、高支模、深基坑监测预警，以及人员信息动态管理、关键部位视频智能监控、现场安全隐患排查以及环境监测管控等方面先行应用。
            </p>
            <p class="ti">
              着眼于从根本上消除事故隐患、从根本上解决问题，积极应用物联网、区块链、云计算、大数据、人工智能等信息技术，加快推动建造方式智能化、现场管理智慧化、部门监管可视化，加快提升建筑施工安全生产治理体系和治理能力现代化水平。
            </p>
            <img src="@/assets/images/solution/图片6.png" alt="" />
            <div class="text-title">方案架构</div>
            <img src="@/assets/images/solution/图片2.png" alt="" />
            <div class="text-title">组网</div>
            <img src="@/assets/images/solution/图片3.png" alt="" />
            <div class="text-title">方案价值</div>
            <img src="@/assets/images/solution/图片7.png" alt="" />
          </div>
        </div>
        <div class="solutionRight">
          <ul>
            <li @click="goPage(item.url)" v-for="(item, index) in wisdomData" :key="index">
              <div v-if="item.isHengxian" class="hengxian"></div>
              <p :class="item.isHengxian ? 'active' : ''">{{ item.name }}</p>
            </li>
          </ul>
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
// 引入头部
import Header from '@/layout/header'
// 引入轮播图
import Banner from '@/layout/banner'
//引入底部
import Footer from '@/layout/footer'
//引入内容
import container from '@/layout/container'
//引入侧边导航栏
import Affix from '@/layout/affix'

export default {
  name: 'medical',
  data() {
    return {
      wisdomData: [
        {
          name: '解决方案',
          url: '/solution',
        },
        {
          name: '智慧化工',
          url: '/park',
        },
        {
          name: '智慧工地',
          url: '/medical',
          isHengxian: true,
        },
        {
          name: '智慧社区',
          url: '/campus',
        },
        {
          name: '智慧矿山',
          url: '/architecture',
        },
        {
          name: '智慧加油站',
          url: '/bim',
        },
      ],
    }
  },
  methods: {
    goPage(url) {
      this.$router.push({ path: url })
    },
  },
  components: {
    Header,
    Banner,
    Footer,
    container,
    Affix,
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
  .banner {
    position: relative;
    width: 100%;
    height: 400px;
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
  .active {
    color: #0a3daa;
  }

  .container {
    width: 70%;
    background-color: #ffffff;
    margin: 30px auto;

    .title {
      font-size: 32px;
      color: #000000;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .detail {
      font-family: 'FangSong', 'SimSun', serif;
      color: rgb(191, 191, 191);
      font-size: 20px;
      margin-bottom: 10px;
    }

    .solutionContent {
      // display: flex;
      justify-content: space-between;

      .solutionLeft {
        width: 100%;

        .ti {
          line-height: 1.5;
          text-indent: 2em;
          margin: 5px 0;
          font-family: 'FangSong';
          //font-weight: 500;
        }

        .text-title {
          color: rgb(191, 191, 191);
          font-size: 20px;
          margin-bottom: 10px;
          font-family: 'FangSong';
        }

        .card {
          width: 90%;

          li {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
            width: 100%;
            background-image: url('../../assets/images/footer.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            background-position: -1000px 0;
            height: 110px;

            .one {
              font-size: 30px;
            }

            .hengXian {
              width: 150px;
              height: 1px;
              background-color: #0a3daa;
              display: none;
            }

            .two {
              font-size: 36px;
              color: rgb(0, 0, 0);
            }

            .three {
              width: 35%;

              .title {
                font-size: 16px;
              }

              .content {
                font-size: 14px;
              }
            }
          }

          li:hover {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/footer.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.3s;
            margin-left: -160px;
            width: 115%;

            .one {
              color: #ffffff;
            }

            .hengXian {
              width: 150px;
              height: 1px;
              background-color: #ffffff;
              display: block;
            }

            .two {
              color: #ffffff;
            }

            .three {
              .title {
                color: #ffffff;
              }
            }
          }
        }

        .contact {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 50px;

          li {
            border: 1px solid #ddd;
            padding: 10px 0;
            width: 49%;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            text-align: center;

            img {
              width: 25px;
              height: 25px;
              margin: auto;
            }

            .name {
              margin: 10px 0;
            }
          }
        }

        .text {
          img {
            width: 100%;
            height: 100%;
            padding: 20px;
          }
        }
      }

      .solutionRight {
        position: relative;
        width: 100%;
        height: 500px;
        // margin-top: -125px;
        // margin-left: 30px;
        background: -webkit-linear-gradient(top, rgb(255, 255, 255), rgb(249, 249, 251));
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px;

        ul {
          position: absolute;
          top: 25%;
          //right: 20px;
          width: 100%;

          li {
            width: 100%;
            list-style: none;
            //margin: 25px 0;
            //font-size: 16px;
            text-align: right;
            //display: flex;
            //justify-content: space-around;
            //align-items: center;

            .hengxian {
              float: left;
              height: 1px;
              width: 35%;
              background-color: #0a3daa;
              margin: 12px 0 0 50px;
            }

            p {
              text-align: right;
              cursor: pointer;
              margin: 25px 20px;
            }
          }

          li:nth-child(1) {
            //color: #0a3daa;
            font-size: 22px;
            font-weight: 600;
          }

          li:hover {
            color: #0a3daa;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 770px) {
  .banner {
    position: relative;
    width: 100%;
    height: 100%;
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
  .active {
    color: #0a3daa;
  }

  .container {
    width: 70%;
    background-color: #ffffff;
    margin: 30px auto;

    .title {
      font-size: 32px;
      color: #000000;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .detail {
      font-family: 'FangSong', 'SimSun', serif;
      color: rgb(191, 191, 191);
      font-size: 20px;
      margin-bottom: 10px;
    }

    .solutionContent {
      display: flex;
      justify-content: space-between;

      .solutionLeft {
        width: 70%;

        .ti {
          line-height: 1.5;
          text-indent: 2em;
          margin: 5px 0;
          font-family: 'FangSong';
          //font-weight: 500;
        }

        .text-title {
          color: rgb(191, 191, 191);
          font-size: 20px;
          margin-bottom: 10px;
          font-family: 'FangSong';
        }

        .card {
          width: 90%;

          li {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
            width: 100%;
            background-image: url('../../assets/images/footer.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            background-position: -1000px 0;
            height: 110px;

            .one {
              font-size: 30px;
            }

            .hengXian {
              width: 150px;
              height: 1px;
              background-color: #0a3daa;
              display: none;
            }

            .two {
              font-size: 36px;
              color: rgb(0, 0, 0);
            }

            .three {
              width: 35%;

              .title {
                font-size: 16px;
              }

              .content {
                font-size: 14px;
              }
            }
          }

          li:hover {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/footer.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.3s;
            margin-left: -160px;
            width: 115%;

            .one {
              color: #ffffff;
            }

            .hengXian {
              width: 150px;
              height: 1px;
              background-color: #ffffff;
              display: block;
            }

            .two {
              color: #ffffff;
            }

            .three {
              .title {
                color: #ffffff;
              }
            }
          }
        }

        .contact {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 50px;

          li {
            border: 1px solid #ddd;
            padding: 10px 0;
            width: 49%;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            text-align: center;

            img {
              width: 25px;
              height: 25px;
              margin: auto;
            }

            .name {
              margin: 10px 0;
            }
          }
        }

        .text {
          img {
            width: 100%;
            height: 100%;
            padding: 20px;
          }
        }
      }

      .solutionRight {
        position: relative;
        width: 25%;
        height: 500px;
        margin-top: -125px;
        margin-left: 30px;
        background: -webkit-linear-gradient(top, rgb(255, 255, 255), rgb(249, 249, 251));
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px;

        ul {
          position: absolute;
          top: 25%;
          //right: 20px;
          width: 100%;

          li {
            width: 100%;
            list-style: none;
            //margin: 25px 0;
            //font-size: 16px;
            text-align: right;
            //display: flex;
            //justify-content: space-around;
            //align-items: center;

            .hengxian {
              float: left;
              height: 1px;
              width: 35%;
              background-color: #0a3daa;
              margin: 12px 0 0 50px;
            }

            p {
              text-align: right;
              cursor: pointer;
              margin: 25px 20px;
            }
          }

          li:nth-child(1) {
            //color: #0a3daa;
            font-size: 22px;
            font-weight: 600;
          }

          li:hover {
            color: #0a3daa;
          }
        }
      }
    }
  }
}
// .banner {
//   position: relative;
//   width: 100%;
//   height: 100%;
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
// .active {
//   color: #0a3daa;
// }

// .container {
//   width: 70%;
//   background-color: #ffffff;
//   margin: 30px auto;

//   .title {
//     font-size: 32px;
//     color: #000000;
//     margin-bottom: 20px;
//     font-weight: bold;
//   }

//   .detail {
//     font-family: 'FangSong', 'SimSun', serif;
//     color: rgb(191, 191, 191);
//     font-size: 20px;
//     margin-bottom: 10px;
//   }

//   .solutionContent {
//     display: flex;
//     justify-content: space-between;

//     .solutionLeft {
//       width: 70%;

//       .ti {
//         line-height: 1.5;
//         text-indent: 2em;
//         margin: 5px 0;
//         font-family: 'FangSong';
//         //font-weight: 500;
//       }

//       .text-title {
//         color: rgb(191, 191, 191);
//         font-size: 20px;
//         margin-bottom: 10px;
//         font-family: 'FangSong';
//       }

//       .card {
//         width: 90%;

//         li {
//           cursor: pointer;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 30px;
//           width: 100%;
//           background-image: url('../../assets/images/footer.jpg');
//           background-repeat: no-repeat;
//           background-size: 100%, 100%;
//           background-position: -1000px 0;
//           height: 110px;

//           .one {
//             font-size: 30px;
//           }

//           .hengXian {
//             width: 150px;
//             height: 1px;
//             background-color: #0a3daa;
//             display: none;
//           }

//           .two {
//             font-size: 36px;
//             color: rgb(0, 0, 0);
//           }

//           .three {
//             width: 35%;

//             .title {
//               font-size: 16px;
//             }

//             .content {
//               font-size: 14px;
//             }
//           }
//         }

//         li:hover {
//           color: #ffffff;
//           background-position: top right;
//           background-image: url('../../assets/images/footer.jpg');
//           background-repeat: no-repeat;
//           background-size: 100%, 100%;
//           transition: all, 0.3s;
//           margin-left: -160px;
//           width: 115%;

//           .one {
//             color: #ffffff;
//           }

//           .hengXian {
//             width: 150px;
//             height: 1px;
//             background-color: #ffffff;
//             display: block;
//           }

//           .two {
//             color: #ffffff;
//           }

//           .three {
//             .title {
//               color: #ffffff;
//             }
//           }
//         }
//       }

//       .contact {
//         width: 100%;
//         display: flex;
//         flex-wrap: wrap;
//         margin-top: 50px;

//         li {
//           border: 1px solid #ddd;
//           padding: 10px 0;
//           width: 49%;
//           display: flex;
//           flex-direction: column;
//           font-size: 14px;
//           text-align: center;

//           img {
//             width: 25px;
//             height: 25px;
//             margin: auto;
//           }

//           .name {
//             margin: 10px 0;
//           }
//         }
//       }

//       .text {
//         img {
//           width: 100%;
//           height: 100%;
//           padding: 20px;
//         }
//       }
//     }

//     .solutionRight {
//       position: relative;
//       width: 25%;
//       height: 500px;
//       margin-top: -125px;
//       margin-left: 30px;
//       background: -webkit-linear-gradient(top, rgb(255, 255, 255), rgb(249, 249, 251));
//       box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px;

//       ul {
//         position: absolute;
//         top: 25%;
//         //right: 20px;
//         width: 100%;

//         li {
//           width: 100%;
//           list-style: none;
//           //margin: 25px 0;
//           //font-size: 16px;
//           text-align: right;
//           //display: flex;
//           //justify-content: space-around;
//           //align-items: center;

//           .hengxian {
//             float: left;
//             height: 1px;
//             width: 35%;
//             background-color: #0a3daa;
//             margin: 12px 0 0 50px;
//           }

//           p {
//             text-align: right;
//             cursor: pointer;
//             margin: 25px 20px;
//           }
//         }

//         li:nth-child(1) {
//           //color: #0a3daa;
//           font-size: 22px;
//           font-weight: 600;
//         }

//         li:hover {
//           color: #0a3daa;
//         }
//       }
//     }
//   }
// }
</style>
