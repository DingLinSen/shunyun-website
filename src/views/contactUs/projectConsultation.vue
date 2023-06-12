<template>
  <div class="projectConsultation">
    <!-- 轮播图 -->
    <div class="banner">
      <img src="@/assets/images/联系我们大图.jpg" alt="" />
      <div class="text">欢迎加入我们</div>
    </div>
    <!-- 内容-->
    <!--    <container :isContactUs="true" :wisdomData="wisdomData"></container>-->
    <div class="container">
      <div class="tab">
        <ul>
          <li @click="skipPage(item.url)" :class="$route.path == item.url ? 'active' : ''" v-for="(item, index) in tabData" :key="index">{{ item.name }}</li>
        </ul>
      </div>
      <div class="content">
        <!-- <div class="left">
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in 2" :key="index">
              <div class="media">
                <div class="media-left">
                  <i class="el-icon-user-solid"></i>
                </div>
                <div class="media-body">
                  <p>Lily <span>2020-11-19</span></p>
                  <div class="title">连接数据时提示错误：无法连接到数据库</div>
                  <div class="content">
                    可能原因：“SQL Server (MSSQLSERVER)”服务未启动。 解决办法：桌面我的电脑右键——管理——服务和应用程序——服务——找到“SQL Server
                    (MSSQLSERVER)”——右键启动，再重新连接数据库。
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div> -->
        <div class="right">
          <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.theme" placeholder="主题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.phone" placeholder="联系电话"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.email" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input rows="6" type="textarea" v-model="form.messageContent" placeholder="留言内容"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交留言</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer :isImg="false"></Footer>
    <!-- 右侧固定 -->
    <Affix></Affix>
  </div>
</template>

<script>
// 引入轮播图
import Banner from '@/layout/banner'
//引入底部
import Footer from '@/layout/footer'
//引入内容
import container from '@/layout/container'
//引入侧边导航栏
import Affix from '@/layout/affix'

export default {
  name: 'projectConsultation',
  data() {
    return {
      tabData: [
        {
          name: '联系方式',
          url: 'contactInformation',
        },
        {
          name: '项目咨询',
          url: '/projectConsultation',
        },
        {
          name: '加入我们',
          url: '/joinUs',
        },
      ],
      form: {
        theme: '',
        name: '',
        phone: '',
        email: '',
        messageContent: '',
      },
    }
  },
  methods: {
    skipPage(url) {
      this.$router.push({ path: url })
    },
  },
  components: {
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
  .active {
    background-color: #0a3daa !important;
    color: #fff !important;
    border: none !important;
  }

  .container {
    width: 70%;
    margin: 50px auto;
    position: relative;

    .tab {
      position: absolute;
      left: 50%;
      transform: translate(-50%);

      ul {
        // display: flex;

        li {
          list-style: none;
          border: 1px solid #999999;
          border-radius: 40px;
          padding: 7px 20px;
          color: #000000;
          margin: 10px 0px;
          cursor: pointer;
        }
        li:hover {
          background-color: #0a3daa !important;
          color: #fff !important;
          border: none !important;
        }
      }
    }

    .content {
      padding-top: 100px;
      display: flex;
      justify-content: space-between;

      .left {
        width: 60%;
        padding: 40px 0;
        margin: 0;
        float: left;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
        background: #ffffff;

        .list-group {
          padding: 0 30px 30px;

          .list-group-item {
            list-style: none;
            border-bottom: 1px solid #e4eaec;
            padding: 20px 0;

            .media {
              display: flex;

              .media-left {
                color: #76838f;
              }

              .media-body {
                margin-left: 10px;
                width: calc(100% - 46px);

                p {
                  color: #76838f;
                  font-weight: 300;

                  span {
                    float: right;
                    font-size: 14px;
                  }
                }

                .title {
                  margin: 10px 0;
                  color: #2a333c;
                }

                .content {
                  color: #2a333c;
                  //border-color: #e4eaec;
                  min-height: 20px;
                  padding: 20px;
                  border: 1px solid #e4eaec;
                  background-color: #f3f7f9;
                  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.02);
                  border-radius: 3px;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }

      .right {
        margin: 10px auto;
        padding: 40px;
        width: 100%;

        .el-button {
          width: 100%;
          border-radius: 20px;
          background-color: #000000;
          border: #000000;
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
  .active {
    background-color: #0a3daa !important;
    color: #fff !important;
    border: none !important;
  }

  .container {
    width: 70%;
    margin: 50px auto;
    position: relative;

    .tab {
      position: absolute;
      left: 50%;
      transform: translate(-50%);

      ul {
        display: flex;

        li {
          list-style: none;
          border: 1px solid #999999;
          border-radius: 40px;
          padding: 7px 20px;
          color: #000000;
          margin: 0 10px;
          cursor: pointer;
        }
        li:hover {
          background-color: #0a3daa !important;
          color: #fff !important;
          border: none !important;
        }
      }
    }

    .content {
      padding-top: 100px;
      display: flex;
      justify-content: space-between;

      .left {
        width: 60%;
        padding: 40px 0;
        margin: 0;
        float: left;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
        background: #ffffff;

        .list-group {
          padding: 0 30px 30px;

          .list-group-item {
            list-style: none;
            border-bottom: 1px solid #e4eaec;
            padding: 20px 0;

            .media {
              display: flex;

              .media-left {
                color: #76838f;
              }

              .media-body {
                margin-left: 10px;
                width: calc(100% - 46px);

                p {
                  color: #76838f;
                  font-weight: 300;

                  span {
                    float: right;
                    font-size: 14px;
                  }
                }

                .title {
                  margin: 10px 0;
                  color: #2a333c;
                }

                .content {
                  color: #2a333c;
                  //border-color: #e4eaec;
                  min-height: 20px;
                  padding: 20px;
                  border: 1px solid #e4eaec;
                  background-color: #f3f7f9;
                  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.02);
                  border-radius: 3px;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }

      .right {
        margin: 0 auto;
        padding: 40px;
        width: 38%;

        .el-button {
          width: 100%;
          border-radius: 20px;
          background-color: #000000;
          border: #000000;
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
// .active {
//   background-color: #0a3daa !important;
//   color: #fff !important;
//   border: none !important;
// }

// .container {
//   width: 70%;
//   margin: 50px auto;
//   position: relative;

//   .tab {
//     position: absolute;
//     left: 50%;
//     transform: translate(-50%);

//     ul {
//       display: flex;

//       li {
//         list-style: none;
//         border: 1px solid #999999;
//         border-radius: 40px;
//         padding: 7px 20px;
//         color: #000000;
//         margin: 0 10px;
//         cursor: pointer;
//       }
//       li:hover {
//         background-color: #0a3daa !important;
//         color: #fff !important;
//         border: none !important;
//       }
//     }
//   }

//   .content {
//     padding-top: 100px;
//     display: flex;
//     justify-content: space-between;

//     .left {
//       width: 60%;
//       padding: 40px 0;
//       margin: 0;
//       float: left;
//       box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
//       background: #ffffff;

//       .list-group {
//         padding: 0 30px 30px;

//         .list-group-item {
//           list-style: none;
//           border-bottom: 1px solid #e4eaec;
//           padding: 20px 0;

//           .media {
//             display: flex;

//             .media-left {
//               color: #76838f;
//             }

//             .media-body {
//               margin-left: 10px;
//               width: calc(100% - 46px);

//               p {
//                 color: #76838f;
//                 font-weight: 300;

//                 span {
//                   float: right;
//                   font-size: 14px;
//                 }
//               }

//               .title {
//                 margin: 10px 0;
//                 color: #2a333c;
//               }

//               .content {
//                 color: #2a333c;
//                 //border-color: #e4eaec;
//                 min-height: 20px;
//                 padding: 20px;
//                 border: 1px solid #e4eaec;
//                 background-color: #f3f7f9;
//                 box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.02);
//                 border-radius: 3px;
//                 font-size: 14px;
//               }
//             }
//           }
//         }
//       }
//     }

//     .right {
//       margin: 0 auto;
//       padding: 40px;
//       width: 38%;

//       .el-button {
//         width: 100%;
//         border-radius: 20px;
//         background-color: #000000;
//         border: #000000;
//       }
//     }
//   }
// }
</style>
