<template>
  <div class="header">
    <div class="left">
      <img @click="changeLogo" src="@/assets/images/logo/logo.png" alt="" />
      <div class="nav-box">
        <div
          @click="skipPage(index, item.url)"
          @mouseenter="changeIndex(item, index)"
          @mouseleave="leaveIndex(item, index)"
          :class="$route.path == item.url ? 'active' : ''"
          v-for="(item, index) in navList"
          :key="index"
          class="nav"
        >
          <span>{{ item.name }}</span>
        </div>
        <ul v-if="navStatus" @mouseenter="enterIndex" @mouseleave="leaveNavIndex" class="nav-content">
          <li @click="skipPage(index, item.url)" v-for="(item, index) in childrenNavList" :key="index">
            <div class="nav-left">
              <!-- <img :src="item.icon" alt="" /> -->
              <i class="iconfont" :class="item.icon"></i>
            </div>
            <div class="nav-right">
              <p>{{ item.title }}</p>
              <span>{{ item.content }}</span>
            </div>
          </li>
        </ul>
      </div>
      <i @click="changeShowTab" class="iconfont icon-gengduo-1"></i>
    </div>
    <div class="right">
      <div class="search">
        <input type="text" value="请输入搜索关键词!" onfocus="if(value=='请输入搜索关键词!') {value=''}" onblur="if (value=='') {value='请输入搜索关键词!'}" />
        <i class="el-icon-search"></i>
      </div>
      <button @click="login" class="login">登录</button>
      <button @click="register" class="register">注册</button>
    </div>
    <ul class="head-box" v-if="isShowTab">
      <li v-for="(item, index) in navList" :key="index">
        <div class="title">
          <div class="text" @click="skipPage(item, item.url)">{{ item.name }}</div>
          <i v-if="item.children" @click="changeShow(index)" :class="isShowChildren && val == index ? 'i-click' : ''" class="el-icon-arrow-down"></i>
        </div>
        <template v-if="val == index && isShowChildren">
          <div class="content-text" v-for="(ele, i) in item.children" :key="i">
            <div class="text" @click="skipPage(ele, ele.url)">{{ ele.title }}</div>
          </div>
        </template>
      </li>
      <div class="btn">
        <button @click="login" class="login">登录</button>
        <button @click="register" class="register">注册</button>
      </div>
    </ul>
  </div>
</template>
<script>
import { getNavList } from '@/api/index'

export default {
  data() {
    return {
      navList: [
        {
          name: '网站首页',
          url: '/',
        },
        {
          name: '解决方案',
          url: '/solution',
          children: [
            {
              icon: 'icon-huagongchang',
              title: '智慧化工',
              content: '把AI数字世界带入化工园区，助力智慧转型',
              url: '/park',
            },
            {
              icon: 'icon-daijiangongdi',
              title: '智慧工地',
              content: '专注创新转型，实时对接工地安全隐患',
              url: '/medical',
            },
            {
              icon: 'icon-shequ',
              title: '智慧社区',
              content: '赋能社区，助力社区安防升级',
              url: '/campus',
            },
            {
              icon: 'icon-kuangshan',
              title: '智慧矿山',
              content: '构建智慧矿山系统传感生态体系',
              url: '/architecture',
            },
            {
              icon: 'icon-jiayouzhan',
              title: '智慧加油站',
              content: '危化品安全预警，提升员工安全意识',
              url: '/bim',
            },
          ],
        },
        {
          name: '商业案例',
          url: '/businessCase',
        },
        {
          name: '媒体中心',
          url: '/mediaCenter',
          children: [
            {
              icon: 'icon-kexuejishu-',
              title: '技术前沿',
              content: '了解前沿技术更新与发展',
              url: '/frontier',
            },
            {
              icon: 'icon-zixun1',
              title: '行业资讯',
              content: '关注新鲜行业资讯',
              url: '/consultation',
            },
            {
              icon: 'icon-mtbd',
              title: '招标采购',
              content: '多年智能化产品研发经验报告',
              url: '/report',
            },
          ],
        },
        // {
        //   name: '关于我们',
        //   url: '/aboutUs',
        //   children: [
        //     {
        //       icon: 'icon-qiyejianjie',
        //       title: '公司简介',
        //       content: '专业从事各类建筑智能化项目',
        //       url: '/introduction',
        //     },
        //     {
        //       icon: 'icon-qiyewenhua',
        //       title: '企业文化',
        //       content: '智慧建筑综合服务**者',
        //       url: '/culture',
        //     },
        //     {
        //       icon: 'icon-dianzan',
        //       title: '金牌服务',
        //       content: '一站式标准化服务体系',
        //       url: '/gold',
        //     },
        //     {
        //       icon: 'icon-zizhi',
        //       title: '公司资质',
        //       content: '建筑业协会智能建筑分会会员单',
        //       url: '/qualification',
        //     },
        //   ],
        // },
        {
          name: '联系我们',
          url: '/contactUs',
          children: [
            {
              icon: 'icon-kefurexianxianxing',
              title: '联系方式',
              content: '努力打造行业的应用标准',
              url: '/contactInformation',
            },
            {
              icon: 'icon-zixun',
              title: '项目咨询',
              content: '提供简易而有效的使用体验',
              url: '/projectConsultation',
            },
            {
              icon: 'icon-jiarubanji',
              title: '加入我们',
              content: '加入舜云，为合作伙伴创造价值',
              url: '/joinUs',
            },
          ],
        },
      ], //导航栏列表
      navStatus: false, //导航栏的状态
      navIndex: 0, //导航栏的下标
      childrenNavList: [], //导航栏的子数据
      isShowChildren: false,
      isShowTab: false,
      val: 0,
    }
  },
  methods: {
    changeShowTab() {
      this.isShowTab = !this.isShowTab
    },
    changeShow(index) {
      this.val = index
      this.isShowChildren = !this.isShowChildren
    },
    // 鼠标移入导航栏
    changeIndex(item, index) {
      this.childrenNavList = item.children
      if (item.children) {
        this.navStatus = true
      }
    },
    enterIndex() {
      this.navStatus = true
    },
    // 鼠标移出导航栏
    leaveIndex(item, index) {
      // this.navStatus = false
    },
    leaveNavIndex() {
      this.navStatus = false
    },
    // 获取导航栏列表
    async getNavList() {
      const result = await getNavList()
      // this.navList = result.data
    },
    //  点击导航栏跳转页面
    skipPage(index, url) {
      this.$router.push({ path: url })
      this.navStatus = false
      this.isShowTab = false
    },
    //  点击登录按钮跳转到登录页面
    login() {
      this.$router.push({ path: '/login' })
      this.isShowTab = false
    },
    //  点击注册按钮跳转到注册页面
    register() {
      this.$router.push({ path: '/register' })
      this.isShowTab = false
    },
    changeLogo() {
      this.$router.push('/')
    },
  },
  mounted() {
    this.getNavList()
  },
}
</script>
<style lang="scss" scoped>
// @import url('@/static/css/header.css');
@media screen and (max-width: 769px) {
  .header {
    position: relative;
    z-index: 9999;
    background: rgb(248, 251, 255);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 10px;
    .left {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      i {
        text-align: center;
        font-weight: 600;
      }

      .active {
        color: #0a3daa;
        border-bottom: 3px solid #0a3daa;
      }

      img {
        margin-right: 20px;
        width: 140px;
        height: 35px;
        margin-left: 30px;
        cursor: pointer;
      }

      .nav-box {
        margin-left: 65px;
        position: relative;
        display: flex;
        display: none;

        .nav {
          padding: 0 10px;
          height: 60px;
          width: 100px;
          text-align: center;

          span:nth-child(1) {
            line-height: 60px;
            cursor: pointer;
          }
        }

        @keyframes tabs {
          from {
            opacity: 0;
            display: flex;
            flex-wrap: wrap;
            width: 1300px;
            background-color: white;
            border-radius: 6px;
            height: auto;
            position: absolute;
            top: 50px;
          }
          to {
            opacity: 1;
            display: flex;
            flex-wrap: wrap;
            width: 1200px;
            background-color: white;
            border-radius: 6px;
            height: auto;
            position: absolute;
            top: 60px;
          }
        }

        .nav-content {
          display: flex;
          flex-wrap: wrap;
          width: 1200px;
          background-color: white;
          border-radius: 6px;
          opacity: 1;
          height: auto;
          position: absolute;
          top: 60px;
          animation-name: tabs;
          animation-duration: 0.5s;

          li {
            width: 31%;
            display: flex;
            align-items: center;
            margin: 20px 0;
            padding: 10px 0;

            .nav-left {
              padding: 0 20px;
              img {
                width: 50px;
                height: 50px;
              }
              i {
                height: 80px;
                font-size: 62px;
                color: #0a3daa;
              }
            }

            .nav-right {
              // margin-left: 4px;

              p {
                text-align: left;
              }

              p:hover {
                color: #0a3daa;
                cursor: pointer;
              }

              span {
                font-size: 14px;
                color: #999999;
                line-height: 60px;
              }
            }
          }

          li:hover {
            background-color: #f9f9fb;
          }
        }

        .nav:hover span {
          color: #0a3daa;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      display: none;

      .search {
        position: relative;
        margin-right: 30px;

        input {
          width: 92%;
          height: 30px;
          padding: 0 15px;
          border-radius: 5px;
          border: 1px solid #ccc;
          //border: none;
          outline: none;
          color: #999999;
          background-color: rgb(248, 251, 255);
        }
        i {
          font-size: 14px;
          position: absolute;
          top: 10px;
          right: 0px;
        }
      }

      .login {
        width: 50px;
        height: 30px;
        background-color: #fff;
        border: 1px solid #0a3daa;
        color: #0a3daa;
        border-radius: 8px;
        cursor: pointer;
      }

      .register {
        cursor: pointer;
        width: 50px;
        height: 30px;
        background-color: #0a3daa;
        border: 1px solid #0a3daa;
        color: #fff;
        border-radius: 8px;
        margin: 0px 10px;
      }
    }
    .head-box {
      position: absolute;
      top: 70px;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      color: #000;
      li {
        // padding: 10px 0;
        .title {
          display: flex;
          padding: 10px 20px;
          justify-content: space-between;
          border-bottom: 1px solid #999;
          i {
            transform: rotate(-90deg);
          }
          .i-click {
            transform: rotate(0);
          }
        }
        .content-text {
          .text {
            padding: 10px 20px;
            border-bottom: 1px solid #999;
            color: #999;
          }
        }
      }
      .btn {
        padding: 10px 20px;
      }
      .login {
        width: 50px;
        height: 30px;
        background-color: #fff;
        border: 1px solid #0a3daa;
        color: #0a3daa;
        border-radius: 8px;
        cursor: pointer;
      }

      .register {
        cursor: pointer;
        width: 50px;
        height: 30px;
        background-color: #0a3daa;
        border: 1px solid #0a3daa;
        color: #fff;
        border-radius: 8px;
        margin: 0px 10px;
      }
    }
  }
}
@media screen and (min-width: 770px) {
  .header {
    z-index: 9999;
    background: rgb(248, 251, 255);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 10px;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .icon-gengduo-1 {
        display: none;
      }

      .active {
        color: #0a3daa;
        border-bottom: 3px solid #0a3daa;
      }

      img {
        margin-right: 20px;
        width: 140px;
        height: 35px;
        margin-left: 30px;
        cursor: pointer;
      }

      .nav-box {
        margin-left: 65px;
        position: relative;
        display: flex;

        .nav {
          padding: 0 10px;
          height: 60px;
          width: 100px;
          text-align: center;
          cursor: pointer;

          span:nth-child(1) {
            line-height: 60px;
            // cursor: pointer;
          }
        }

        @keyframes tabs {
          from {
            opacity: 0;
            display: flex;
            flex-wrap: wrap;
            width: 200%;
            background-color: white;
            border-radius: 6px;
            height: auto;
            position: absolute;
            top: 50px;
          }
          to {
            // opacity: 1;
            // display: flex;
            // flex-wrap: wrap;
            // width: 200%;
            // background-color: white;
            // border-radius: 6px;
            // height: auto;
            // position: absolute;
            // top: 60px;
          }
        }

        .nav-content {
          display: flex;
          flex-wrap: wrap;
          width: 200%;
          background-color: white;
          border-radius: 6px;
          opacity: 1;
          height: auto;
          position: absolute;
          top: 60px;
          animation-name: tabs;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;

          li {
            width: 31%;
            display: flex;
            align-items: center;
            margin: 20px 0;
            padding: 10px 0;

            .nav-left {
              padding: 0 20px;
              img {
                width: 50px;
                height: 50px;
              }
              i {
                height: 80px;
                font-size: 62px;
                color: #0a3daa;
              }
            }

            .nav-right {
              // margin-left: 4px;

              p {
                text-align: left;
              }

              p:hover {
                color: #0a3daa;
                cursor: pointer;
              }

              span {
                font-size: 14px;
                color: #999999;
                line-height: 60px;
              }
            }
          }

          li:hover {
            background-color: #f9f9fb;
          }
        }

        .nav:hover span {
          color: #0a3daa;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .search {
        position: relative;
        margin-right: 30px;

        input {
          width: 92%;
          height: 30px;
          padding: 0 15px;
          border-radius: 5px;
          border: 1px solid #ccc;
          //border: none;
          outline: none;
          color: #999999;
          background-color: rgb(248, 251, 255);
        }
        i {
          font-size: 14px;
          position: absolute;
          top: 10px;
          right: 0px;
        }
      }

      .login {
        width: 50px;
        height: 30px;
        background-color: #fff;
        border: 1px solid #0a3daa;
        color: #0a3daa;
        border-radius: 8px;
        cursor: pointer;
      }

      .register {
        cursor: pointer;
        width: 50px;
        height: 30px;
        background-color: #0a3daa;
        border: 1px solid #0a3daa;
        color: #fff;
        border-radius: 8px;
        margin: 0px 10px;
      }
    }
    .head-box {
      display: none;
    }
  }
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

// .header {
//   z-index: 9999;
//   background: rgb(248, 251, 255);
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
//   position: fixed;
//   top: 0;
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   // margin-bottom: 10px;
//   .left {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     position: relative;

//     .active {
//       color: #0a3daa;
//       border-bottom: 3px solid #0a3daa;
//     }

//     img {
//       margin-right: 20px;
//       width: 140px;
//       height: 35px;
//       margin-left: 30px;
//       cursor: pointer;
//     }

//     .nav-box {
//       margin-left: 65px;
//       position: relative;
//       display: flex;

//       .nav {
//         padding: 0 10px;
//         height: 60px;
//         width: 100px;
//         text-align: center;

//         span:nth-child(1) {
//           line-height: 60px;
//           cursor: pointer;
//         }
//       }

//       @keyframes tabs {
//         from {
//           opacity: 0;
//           display: flex;
//           flex-wrap: wrap;
//           width: 1300px;
//           background-color: white;
//           border-radius: 6px;
//           height: auto;
//           position: absolute;
//           top: 50px;
//         }
//         to {
//           opacity: 1;
//           display: flex;
//           flex-wrap: wrap;
//           width: 1200px;
//           background-color: white;
//           border-radius: 6px;
//           height: auto;
//           position: absolute;
//           top: 60px;
//         }
//       }

//       .nav-content {
//         display: flex;
//         flex-wrap: wrap;
//         width: 1200px;
//         background-color: white;
//         border-radius: 6px;
//         opacity: 1;
//         height: auto;
//         position: absolute;
//         top: 60px;
//         animation-name: tabs;
//         animation-duration: 0.5s;

//         li {
//           width: 31%;
//           display: flex;
//           align-items: center;
//           margin: 20px 0;
//           padding: 10px 0;

//           .nav-left {
//             padding: 0 20px;
//             img {
//               width: 50px;
//               height: 50px;
//             }
//             i {
//               height: 80px;
//               font-size: 62px;
//               color: #0a3daa;
//             }
//           }

//           .nav-right {
//             // margin-left: 4px;

//             p {
//               text-align: left;
//             }

//             p:hover {
//               color: #0a3daa;
//               cursor: pointer;
//             }

//             span {
//               font-size: 14px;
//               color: #999999;
//               line-height: 60px;
//             }
//           }
//         }

//         li:hover {
//           background-color: #f9f9fb;
//         }
//       }

//       .nav:hover span {
//         color: #0a3daa;
//       }
//     }
//   }

//   .right {
//     display: flex;
//     align-items: center;

//     .search {
//       position: relative;
//       margin-right: 30px;

//       input {
//         width: 92%;
//         height: 30px;
//         padding: 0 15px;
//         border-radius: 5px;
//         border: 1px solid #ccc;
//         //border: none;
//         outline: none;
//         color: #999999;
//         background-color: rgb(248, 251, 255);
//       }
//       i {
//         font-size: 14px;
//         position: absolute;
//         top: 10px;
//         right: 0px;
//       }
//     }

//     .login {
//       width: 50px;
//       height: 30px;
//       background-color: #fff;
//       border: 1px solid #0a3daa;
//       color: #0a3daa;
//       border-radius: 8px;
//       cursor: pointer;
//     }

//     .register {
//       cursor: pointer;
//       width: 50px;
//       height: 30px;
//       background-color: #0a3daa;
//       border: 1px solid #0a3daa;
//       color: #fff;
//       border-radius: 8px;
//       margin: 0px 10px;
//     }
//   }
// }
</style>
