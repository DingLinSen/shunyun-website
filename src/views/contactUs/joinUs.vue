<template>
  <div class="joinUs">
    <!-- 轮播图 -->
    <div class="banner">
      <img src="@/assets/images/联系我们大图.jpg" alt="" />
      <div class="text">欢迎加入我们</div>
    </div>
    <!-- 内容-->
    <!--<container :isContactUs="true" :wisdomData="wisdomData"></container>-->
    <div class="container">
      <h1>加入我们</h1>
      <p class="text">加入舜云，为合作伙伴创造价值</p>
      <ul class="job-list">
        <li class="job-item">
          <div class="content" @click.stop="changeShow(1)">
            <div class="title">
              <h3>前端工程师</h3>
            </div>
            <div class="job-condition">
              <div class="job-left">
                <p>发布日期: <span>2023-06-07</span></p>
                <p>招聘人数: <span>不限</span></p>
                <p>工资待遇: <span>10-15k</span></p>
                <p>工作地点: <span>济南</span></p>
              </div>
              <div class="job-right"><i @click.stop="changeShow(1)" :class="isShow ? 'i-click' : ''" class="el-icon-caret-right"></i></div>
            </div>
          </div>
          <div v-if="isShow" :class="isShow ? 'job-textTwo' : ''" class="job-text">
            <p>
              岗位职责：<br />
              1、页面功能开发，配合交互视觉，完成设计稿高还原度的实现； <br />
              2、参与前端标准化，探索前端新技术并落地实践；<br />
              3、负责组件的编写维护，新技术探索研究，组间的技术对接；<br />
              4、独立自主搭建过微信小程序开发框架，以及整个小程序的各种功能开发；<br />
              5、或可以独立完成过小程序部署和上线。<br />
              任职要求：<br />
              1、本科及以上学历，2年以上前端开发经验；<br />
              1、熟练掌握HTML5、CSS3、javascript（含es6）等前端技术；<br />
              2、熟练掌握原型链，Vue全家桶，Element UI；<br />
              3、熟悉nodejs、webpack等常用开发工具，熟悉前端构建、性能优化；<br />
              4、具备较好的学习能力、沟通能力与团队协作能力；<br />
              5、有webgl、threejs或JAVA开发经验者优先； <br />
              6、有移动端H5页面开发经验者优先。
            </p>
          </div>
        </li>
        <li class="job-item">
          <div class="content" @click.stop="changeShow(2)">
            <div class="title">
              <h3>AI算法工程师</h3>
            </div>
            <div class="job-condition">
              <div class="job-left">
                <p>发布日期: <span>2023-06-07</span></p>
                <p>招聘人数: <span>不限</span></p>
                <p>工资待遇: <span>10-15k</span></p>
                <p>工作地点: <span>济南</span></p>
              </div>
              <div class="job-right"><i @click.stop="changeShow(2)" :class="isShowTwo ? 'i-click' : ''" class="el-icon-caret-right"></i></div>
            </div>
          </div>
          <div v-if="isShowTwo" :class="isShowTwo ? 'job-textTwo' : ''" class="job-text">
            <p>
              岗位职责：<br />
              1、利用深度学习网络和图像处理算法，进行视频目标类别分析、人脸识别、行为分析等功能开发； <br />
              2、对深度学习网络，进行训练、剪枝、模型性能优化。<br />
              3、对深度学习的前沿技术进行研究，掌握最新的技术成果并能够转化为实用算法。<br />
              任职要求：<br />
              1、计算机、图像处理、模式识别及数学类相关专业；<br />
              2、具有扎实的数学功底，对视频图像处理、模式识别、机器学习有较深入的理解与认识；<br />
              3、熟练掌握c/c++、matlab、OpenCV、Python等语言，有扎实的编程基础；<br />
              4、具有较强的技术文献收集能力，以及英文文献阅读理解能力；<br />
              5、熟悉深度学习常用模型与DL开源框架者优先，如CNN,DBN,Caffe，TensorFlow等； <br />
              6、在下述任一方向有深入研究者优先：人脸检测识别、图像内容搜索、OCR、目标检测与跟踪等；<br />
              7、在CVPR、ICCV等国际顶级会议或期刊上发表过文章者优先。
            </p>
          </div>
        </li>
        <li class="job-item">
          <div class="content" @click.stop="changeShow(3)">
            <div class="title">
              <h3>C/C++软件开发工程师</h3>
            </div>
            <div class="job-condition">
              <div class="job-left">
                <p>发布日期: <span>2023-06-07</span></p>
                <p>招聘人数: <span>不限</span></p>
                <p>工资待遇: <span>13-17k</span></p>
                <p>工作地点: <span>济南</span></p>
              </div>
              <div class="job-right"><i @click.stop="changeShow(3)" :class="isShowThree ? 'i-click' : ''" class="el-icon-caret-right"></i></div>
            </div>
          </div>
          <div v-if="isShowThree" :class="isShowThree ? 'job-textTwo' : ''" class="job-text">
            <p>
              岗位职责：<br />
              1、负责AI嵌入式产品的产品化软件开发； <br />
              2、负责AI数据中心产品的产品化软件开发。<br />
              任职要求：<br />
              1、本科及以上学历，计算机、软件、通信、电子、自动化、应用数学等相关专业；<br />
              2、英语听说读写能力全面，CET-4以上；<br />
              3、熟悉使用C/C++/Python其中一种语言；<br />
              4、具有良好的代码开发风格和软件工程思维；<br />
              5、有很好的团队合作精神、认真负责，对技术有好奇心。
            </p>
          </div>
        </li>
        <li class="job-item">
          <div class="content" @click.stop="changeShow(4)">
            <div class="title">
              <h3>产品经理</h3>
            </div>
            <div class="job-condition">
              <div class="job-left">
                <p>发布日期: <span>2023-06-07</span></p>
                <p>招聘人数: <span>不限</span></p>
                <p>工资待遇: <span>10-15k</span></p>
                <p>工作地点: <span>济南</span></p>
              </div>
              <div class="job-right"><i @click.stop="changeShow(4)" :class="isShowFour ? 'i-click' : ''" class="el-icon-caret-right"></i></div>
            </div>
          </div>
          <div v-if="isShowFour" :class="isShowFour ? 'job-textTwo' : ''" class="job-text">
            <p>
              岗位职责：<br />
              1、负责产品的需求方案的提出及内容规划管理。<br />
              2、产品及解决方案包装，市场策略的建议。<br />
              3、统筹安排，讨论、修改，制订出可行性方案。<br />
              4、和技术部紧密结合，确保产品实现进度和质量<br />
              5、把握人工智能/大数据/区块链的发展趋势，制定产品竞争战略和计划。<br />
              任职要求：<br />
              1、本科以上学历，有AI行业经验优先，熟悉公共安全行业业务优先<br />
              2、具有良好的沟通能力和协调能力、团队合作精神。<br />
              3、对市场的走势具备判断力，能够将市场的需求或潜在需求转换成产品需求。<br />
              4、具备数据收集、分析和判断能力，从客户调查反馈中做出总结，指导将来产品的更新或新产品研发。<br />
            </p>
          </div>
        </li>
        <li class="job-item">
          <div class="content" @click.stop="changeShow(5)">
            <div class="title">
              <h3>技术支持工程师</h3>
            </div>
            <div class="job-condition">
              <div class="job-left">
                <p>发布日期: <span>2023-06-07</span></p>
                <p>招聘人数: <span>不限</span></p>
                <p>工资待遇: <span>10-15k</span></p>
                <p>工作地点: <span>济南</span></p>
              </div>
              <div class="job-right"><i @click.stop="changeShow(5)" :class="isShowFive ? 'i-click' : ''" class="el-icon-caret-right"></i></div>
            </div>
          </div>
          <div v-if="isShowFive" :class="isShowFive ? 'job-textTwo' : ''" class="job-text">
            <p>
              岗位职责：<br />
              1、负责智能算法产品和解决方案技术支持工作；<br />
              2、负责智能算法产品的对外测试&项目交付；<br />
              3、负责智能算法产品技术资料的编写，培训工作；<br />
              4、能够了解市场需求，推动产品和方案落地；<br />
              5、负责区域/行业的合作伙伴赋能；<br />
              任职要求：<br />
              1、本科及以上学历，英语CET-4及以上；<br />
              2、工科背景专业；<br />
              3、有较强的服务意识和团队协作精神，责任心强，细致耐心；<br />
              4、性格热情、亲和力强，具有奋斗精神与承压能力；<br />
              5、工作细心认真，责任心、学习能力强，良好的沟通协调能力。<br />
            </p>
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
//引入内容
import container from '@/layout/container'
//引入侧边导航栏
import Affix from '@/layout/affix'

export default {
  name: 'joinUs',
  data() {
    return {
      isShow: false,
      isShowTwo: false,
      isShowThree: false,
      isShowFour: false,
      isShowFive: false,
    }
  },
  components: {
    Header,
    Banner,
    Footer,
    container,
    Affix,
  },
  methods: {
    changeShow(index) {
      if (index == 1) {
        this.isShow = !this.isShow
      } else if (index == 2) {
        this.isShowTwo = !this.isShowTwo
      } else if (index == 3) {
        this.isShowThree = !this.isShowThree
      } else if (index == 4) {
        this.isShowFour = !this.isShowFour
      } else if (index == 5) {
        this.isShowFive = !this.isShowFive
      }
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
      display: none;
      position: absolute;
      top: 50%;
      left: 10%;
      color: #ffffff;
      font-size: 42px;
    }
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container {
    width: 70%;
    background-color: #ffffff;
    margin: 30px auto;

    .text {
      color: #999999;
      margin: 40px 0;
    }

    .job-list {
      .job-item {
        background: rgb(255, 255, 255);

        .content {
          padding: 30px 4% 30px 4%;
          position: relative;
          cursor: pointer;

          .title {
            font-weight: 700;
            border-left: 4px solid #0a3daa;
            padding: 0 30px;
          }

          .job-condition {
            display: flex;
            margin: 20px 0;
            justify-content: space-between;
            align-items: center;

            .job-left {
              // display: flex;
              justify-content: space-between;
              width: 75%;
              line-height: 2;

              p {
                span {
                  color: #999999;
                }
              }
            }

            .job-right {
              color: #0a3daa;
              font-size: 30px;
              .i-click {
                transition: all 0.5s;
                transform: rotate(90deg);
              }
              i {
                transition: all 0.5s;
              }
            }
          }
        }

        @keyframes xs {
          from {
            height: 0;
            overflow: hidden;
          }
          to {
            border-top: 1px solid #000;
            height: auto;
            overflow: hidden;
            padding: 30px 4% 30px 4%;
          }
        }

        .job-text {
          height: 0;
          overflow: hidden;
          padding: 0px 4% 0px 4%;
          animation-name: xs;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;

          p {
            line-height: 2;
          }
        }
      }

      .job-item:hover {
        .content {
          background-color: #eee;
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
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container {
    width: 70%;
    background-color: #ffffff;
    margin: 30px auto;

    .text {
      color: #999999;
      margin: 40px 0;
    }

    .job-list {
      .job-item {
        background: rgb(255, 255, 255);

        .content {
          padding: 30px 4% 30px 4%;
          position: relative;
          cursor: pointer;

          .title {
            font-weight: 700;
            border-left: 4px solid #0a3daa;
            padding: 0 30px;
          }

          .job-condition {
            display: flex;
            margin: 20px 0;
            justify-content: space-between;
            align-items: center;

            .job-left {
              display: flex;
              justify-content: space-between;
              width: 75%;

              p {
                span {
                  color: #999999;
                }
              }
            }

            .job-right {
              color: #0a3daa;
              font-size: 30px;
              .i-click {
                transition: all 0.5s;
                transform: rotate(90deg);
              }
              i {
                transition: all 0.5s;
              }
            }
          }
        }

        @keyframes xs {
          from {
            height: 0;
            overflow: hidden;
          }
          to {
            border-top: 1px solid #000;
            height: auto;
            overflow: hidden;
            padding: 30px 4% 30px 4%;
          }
        }

        .job-text {
          height: 0;
          overflow: hidden;
          padding: 0px 4% 0px 4%;
          animation-name: xs;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;

          p {
            line-height: 2;
          }
        }
      }

      .job-item:hover {
        .content {
          background-color: #eee;
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
// * {
//   margin: 0;
//   padding: 0;
//   list-style: none;
// }

// .container {
//   width: 70%;
//   background-color: #ffffff;
//   margin: 30px auto;

//   .text {
//     color: #999999;
//     margin: 40px 0;
//   }

//   .job-list {
//     .job-item {
//       background: rgb(255, 255, 255);

//       .content {
//         padding: 30px 4% 30px 4%;
//         position: relative;
//         cursor: pointer;

//         .title {
//           font-weight: 700;
//           border-left: 4px solid #0a3daa;
//           padding: 0 30px;
//         }

//         .job-condition {
//           display: flex;
//           margin: 20px 0;
//           justify-content: space-between;
//           align-items: center;

//           .job-left {
//             display: flex;
//             justify-content: space-between;
//             width: 75%;

//             p {
//               span {
//                 color: #999999;
//               }
//             }
//           }

//           .job-right {
//             color: #0a3daa;
//             font-size: 30px;
//             .i-click {
//               transition: all 0.5s;
//               transform: rotate(90deg);
//             }
//             i {
//               transition: all 0.5s;
//             }
//           }
//         }
//       }

//       @keyframes xs {
//         from {
//           height: 0;
//           overflow: hidden;
//         }
//         to {
//           border-top: 1px solid #000;
//           height: auto;
//           overflow: hidden;
//           padding: 30px 4% 30px 4%;
//         }
//       }

//       .job-text {
//         height: 0;
//         overflow: hidden;
//         padding: 0px 4% 0px 4%;
//         animation-name: xs;
//         animation-duration: 0.8s;
//         animation-fill-mode: forwards;

//         p {
//           line-height: 2;
//         }
//       }
//     }

//     .job-item:hover {
//       .content {
//         background-color: #eee;
//       }
//     }
//   }
// }
</style>
