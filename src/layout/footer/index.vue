<template>
  <div>
    <div v-if="isImg" class="banner-text">
      <div class="content">
        <p class="title">立即走进人工智能</p>
        <p class="text">科技改变未来，智能科技拥抱现在</p>
        <button @click="goPage">立即咨询</button>
      </div>
      <!--      <img v-if="isFooterImg" src="@/assets/images/footer.jpg" alt=""/>-->
    </div>
    <div class="footer">
      <div class="footer-content">
        <div class="left">
          <ul class="solution" v-for="(item, index) in footerData" :key="index">
            <li @click="skipPage(item.url)">{{ item.name }}</li>
            <li @click="skipPage(ele.url)" v-for="(ele, i) in item.children" :key="i">{{ ele.title }}</li>
          </ul>
        </div>
        <div class="right">
          <div class="hotline">
            <p><i class="el-icon-phone-outline"></i> 客服热线</p>
          </div>
          <span>0531-66956750</span>
          <!--   二维码-->
          <div class="code">
            <img src="@/assets/images/code.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="tabbar">
      <div @click="skipPage(item.url)" class="tabbar-item" v-for="(item, index) in tabbarList" :key="index">
        <i class="iconfont" :class="item.icon"></i>
        <div class="text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      footerData: [
        {
          name: '解决方案',
          url: '/solution',
          children: [
            {
              icon: 'el-icon-s-order',
              title: '智慧园区',
              content: '把数字世界带入园区，助力智慧转型',
              url: '/park',
            },
            {
              icon: 'el-icon-s-order',
              title: '智慧医疗',
              content: '专注医院创新转型，改善医疗服',
              url: '/medical',
            },
            {
              icon: 'el-icon-s-order',
              title: '智慧校园',
              content: '赋能校园，助力学校安防升级',
              url: '/campus',
            },
            {
              icon: 'el-icon-s-order',
              title: '智慧建筑',
              content: '构建智慧建筑系统传感生态体系',
              url: '/architecture',
            },
            {
              icon: 'el-icon-s-order',
              title: '智慧BIM',
              content: 'BIM是建筑领域的信息化革命',
              url: '/bim',
            },
          ],
        },
        {
          name: '媒体中心',
          url: '/mediaCenter',
          children: [
            {
              icon: 'el-icon-s-order',
              title: '技术前沿',
              content: '了解前沿技术更新与发展',
              url: '/frontier',
            },
            {
              icon: 'el-icon-s-order',
              title: '行业资讯',
              content: '关注新鲜行业资讯',
              url: '/consultation',
            },
            {
              icon: 'el-icon-s-order',
              title: '招标采购',
              content: '多年智能化产品研发经验报告',
              url: '/report',
            },
          ],
        },
        // {
        //   name: '技术服务',
        //   url: '/technicalService',
        //   children: [
        //     {
        //       icon: 'el-icon-s-order',
        //       title: '售后服务',
        //       content: '竭诚为企事业单位提供优质的服',
        //       url: '/service',
        //     },
        //     {
        //       icon: 'el-icon-s-order',
        //       title: '技术培训',
        //       content: '为实现系统顺利建设并长期稳定',
        //       url: '/training',
        //     },
        //     {
        //       icon: 'el-icon-s-order',
        //       title: '产品手册',
        //       content: '下载新版本产品白皮书',
        //       url: '/manual',
        //     },
        //   ]
        // },
        {
          name: '联系我们',
          url: '/contactUs',
          children: [
            {
              icon: 'el-icon-s-order',
              title: '联系方式',
              content: '努力打造行业的应用标准',
              url: '/contactInformation',
            },
            {
              icon: 'el-icon-s-order',
              title: '项目咨询',
              content: '提供简易而有效的使用体验',
              url: '/projectConsultation',
            },
            {
              icon: 'el-icon-s-order',
              title: '加入我们',
              content: '加入BIMS，为合作伙伴创造价',
              url: '/joinUs',
            },
          ],
        },
      ],
      tabbarList: [
        {
          name: '首页',
          icon: 'el-icon-s-home',
          url: '/',
        },
        {
          name: '方案',
          icon: 'icon-fangan',
          url: '/solution',
        },
        {
          name: '案例',
          icon: 'icon-case',
          url: '/businessCase',
        },
        {
          name: '咨询',
          icon: 'icon-zixun',
          url: '/contactUs',
        },
      ],
    }
  },
  methods: {
    //跳转页面
    skipPage(url) {
      this.$router.push({ path: url })
    },
    goPage() {
      this.$router.push({ path: '/projectConsultation' })
    },
  },
  props: {
    isFooterImg: {
      type: Boolean,
      default: true,
    },
    isImg: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
  .tabbar {
    width: 100%;
    display: flex;
    color: #fff;
    background-color: #0a3daa;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    z-index: 9999;
    .tabbar-item {
      text-align: center;
    }
  }
  .footer {
    background-color: rgb(51, 51, 51);
    padding: 50px 0px;

    .footer-content {
      margin: 0 auto;
      width: 78%;
      // display: flex;

      .left {
        // width: 56.666667%;
        display: flex;
        justify-content: space-between;

        .solution {
          li {
            cursor: pointer;
            color: #999999;
            margin: 12px 0;
            font-size: 14px;
          }

          li:nth-child(1) {
            color: #fff;
            margin: 12px 0;
            font-size: 16px;
            margin-bottom: 20px;
          }

          li:hover {
            color: #ffffff;
          }
        }
      }

      .right {
        margin-top: 10px;
        text-align: center;
        // margin-left: 20px;

        .hotline {
          margin: 0 auto;
          padding: 10px 0;
          font-size: 16px;
          line-height: 30px;
          color: #ffffff;
          width: 200px;
          border: 1px solid #ffffff;
          text-align: center;
          margin-bottom: 10px;
          cursor: pointer;

          p {
            i {
              font-size: 22px;
            }
          }
        }

        .code {
          img {
            width: 150px;
            height: 150px;
            margin-top: 10px;
          }
        }

        span {
          color: #ffffff;
          font-size: 12px;
        }
      }
    }

    .text-link {
      margin: 0 auto;
      width: 78%;

      ul {
        display: flex;
        border-bottom: 1px solid #444444;
        padding: 30px 0;

        li {
          color: #999999;
          margin: 0 10px;
        }

        li:nth-child(1) {
          color: #fff;
        }

        li:nth-child(2):after {
          content: '/';
        }

        li:nth-child(3):after {
          content: '/';
        }

        li:nth-child(4):after {
          content: '/';
        }

        li:hover {
          color: #fff;
          cursor: pointer;
        }

        li:nth-child(1):hover {
          color: #fff;
          cursor: auto;
        }
      }
    }
  }
}
@media screen and (min-width: 770px) {
  .tabbar {
    display: none;
  }
  .footer {
    background-color: rgb(51, 51, 51);
    padding: 50px 0px;

    .footer-content {
      margin: 0 auto;
      width: 78%;
      display: flex;

      .left {
        width: 56.666667%;
        display: flex;
        justify-content: space-between;

        .solution {
          li {
            cursor: pointer;
            color: #999999;
            margin: 12px 0;
            font-size: 14px;
          }

          li:nth-child(1) {
            color: #fff;
            margin: 12px 0;
            font-size: 16px;
            margin-bottom: 20px;
          }

          li:hover {
            color: #ffffff;
          }
        }
      }

      .right {
        margin-top: 10px;
        text-align: center;
        margin-left: 230px;

        .hotline {
          padding: 10px 0;
          font-size: 16px;
          line-height: 30px;
          color: #ffffff;
          width: 200px;
          border: 1px solid #ffffff;
          text-align: center;
          margin-bottom: 10px;
          cursor: pointer;

          p {
            i {
              font-size: 22px;
            }
          }
        }

        .code {
          img {
            width: 150px;
            height: 150px;
            margin-top: 10px;
          }
        }

        span {
          color: #ffffff;
          font-size: 12px;
        }
      }
    }

    .text-link {
      margin: 0 auto;
      width: 78%;

      ul {
        display: flex;
        border-bottom: 1px solid #444444;
        padding: 30px 0;

        li {
          color: #999999;
          margin: 0 10px;
        }

        li:nth-child(1) {
          color: #fff;
        }

        li:nth-child(2):after {
          content: '/';
        }

        li:nth-child(3):after {
          content: '/';
        }

        li:nth-child(4):after {
          content: '/';
        }

        li:hover {
          color: #fff;
          cursor: pointer;
        }

        li:nth-child(1):hover {
          color: #fff;
          cursor: auto;
        }
      }
    }
  }
}

li {
  list-style: none;
}

.banner-text {
  margin-top: 10px;
  height: 400px;
  background-image: url('../../assets/images/底部.jpg');
  background-size: 100% 100%;
  position: relative;
  text-align: center;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;

    .title {
      font-size: 32px;
    }

    .text {
      font-size: 18px;
      margin: 20px 0;
    }

    button {
      color: #0a3daa;
      background: rgb(255, 255, 255);
      line-height: 36px;
      font-size: 16px;
      margin-top: 35px;
      padding: 2px 25px;
      display: inline-block;
      text-align: center;
      overflow: hidden;
      letter-spacing: 0.1em;
      border-radius: 1.6rem;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.09) 0px 3px 6px;
      cursor: pointer;
    }

    button:hover {
      transition: all 0.3s linear;
      color: #ffffff;
      background-color: #0a3daa;
    }
  }
}

// .footer {
//   background-color: rgb(51, 51, 51);
//   padding: 50px 0px;

//   .footer-content {
//     margin: 0 auto;
//     width: 78%;
//     display: flex;

//     .left {
//       width: 56.666667%;
//       display: flex;
//       justify-content: space-between;

//       .solution {
//         li {
//           cursor: pointer;
//           color: #999999;
//           margin: 12px 0;
//           font-size: 14px;
//         }

//         li:nth-child(1) {
//           color: #fff;
//           margin: 12px 0;
//           font-size: 16px;
//           margin-bottom: 20px;
//         }

//         li:hover {
//           color: #ffffff;
//         }
//       }
//     }

//     .right {
//       margin-top: 10px;
//       text-align: center;
//       margin-left: 230px;

//       .hotline {
//         padding: 10px 0;
//         font-size: 16px;
//         line-height: 30px;
//         color: #ffffff;
//         width: 200px;
//         border: 1px solid #ffffff;
//         text-align: center;
//         margin-bottom: 10px;
//         cursor: pointer;

//         p {
//           i {
//             font-size: 22px;
//           }
//         }
//       }

//       .code {
//         img {
//           width: 150px;
//           height: 150px;
//           margin-top: 10px;
//         }
//       }

//       span {
//         color: #ffffff;
//         font-size: 12px;
//       }
//     }
//   }

//   .text-link {
//     margin: 0 auto;
//     width: 78%;

//     ul {
//       display: flex;
//       border-bottom: 1px solid #444444;
//       padding: 30px 0;

//       li {
//         color: #999999;
//         margin: 0 10px;
//       }

//       li:nth-child(1) {
//         color: #fff;
//       }

//       li:nth-child(2):after {
//         content: '/';
//       }

//       li:nth-child(3):after {
//         content: '/';
//       }

//       li:nth-child(4):after {
//         content: '/';
//       }

//       li:hover {
//         color: #fff;
//         cursor: pointer;
//       }

//       li:nth-child(1):hover {
//         color: #fff;
//         cursor: auto;
//       }
//     }
//   }
// }
</style>
