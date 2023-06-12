<template>
  <div class="container">
    <div class="title">{{ wisdomData[0].name }}</div>
    <div class="detail" v-if="isTechnicalService">方案概述</div>
    <div class="solutionContent">
      <div class="solutionLeft">
        <!--        <div class="text" v-if="isTechnicalService || isContactUs">-->
        <div class="text" v-if="isContactUs">
          <p class="ti">
            围绕化工园区现场的人、机、料、法、环五大生产要素，综合运用物联网、云计算、大数据及互联网技术，提供园区设备监控、作业行为监测、工地安防管理，助力智慧文明安全园区。
          </p>
          <p class="ti">
            使得园区现场做到智慧管理、自动监测，安全隐患实时报警、在线预控，实现现场作业标准化、项目管理精细化、决策监管科学化将实现智能建造技术普遍引用，智慧管理手动成常态，机械化换人，自动化减人。安全隐患大幅减少，工程质量安全水平得到显著的提升。
          </p>
          <img v-if="isWisdom" src="@/assets/images/solution/图片1.png" alt="" />
          <div class="text-title">方案架构</div>
          <img v-if="isWisdom" src="@/assets/images/solution/图片2.png" alt="" />
          <div class="text-title">组网</div>
          <img v-if="isWisdom" src="@/assets/images/solution/图片3.png" alt="" />
          <div class="text-title">客户价值</div>
          <img v-if="isWisdom" src="@/assets/images/solution/图片4.png" alt="" />
          <div class="text-title">方案价值</div>
          <img v-if="isWisdom" src="@/assets/images/solution/图片5.png" alt="" />
        </div>
        <ul class="contact" v-if="isContactUs">
          <li v-for="(item, index) in 4" :key="index">
            <img src="" alt="" />
            <p class="name">演示数据</p>
            <p>0731-0000-0000</p>
          </li>
        </ul>
        <ul class="card" v-if="isSolution || isAboutUs">
          <li @click="goPage(item.url)" v-for="(item, index) in iconNavList" :key="index">
            <div class="zzc"></div>
            <!-- <img src="@/assets/images/footer.jpg" alt="" /> -->
            <div class="box">
              <div class="one">0{{ index + 1 }}.</div>
              <div class="hengXian"></div>
              <div class="two">
                <i class="iconfont" :class="item.icon"></i>
              </div>
              <div class="three">
                <div class="title">
                  {{ item.title }}
                </div>
                <div class="content">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="box" v-if="isMap">
          <baidu-map id="allmap" @ready="mapReady" :scroll-wheel-zoom="true">
            <bm-marker :position="{ lng: 117.141589, lat: 36.675304 }" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"> </bm-marker>
          </baidu-map>
          <div class="map-text">
            <div class="title">舜云科技有限公司</div>
            <div class="address">
              <div class="top">
                <i class="iconfont icon-dizhi"></i>
                <span>公司地址</span>
              </div>
              <div class="bottom">山东省济南市历下区高新区舜华路1117号</div>
            </div>
            <div class="phone">
              <div class="top">
                <i class="iconfont icon-kefurexianxianxing"></i>
                <span>联系电话</span>
              </div>
              <div class="bottom">0531-66956750</div>
            </div>
          </div>
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
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      // iconNavList: [
      //   {
      //     icon: 'el-icon-s-order',
      //     title: '智慧园区',
      //     content: '解决传统园区长期面临的“服务体验差、综合安防弱、运营效率地”等痛点',
      //     url: '/park',
      //   },
      //   {
      //     icon: 'el-icon-s-order',
      //     title: '智慧医疗',
      //     content: '结合医院具有结构复杂、功能多样、人员密集、安防预警机制滞后等特点',
      //     url: '/medical',
      //   },
      //   {
      //     icon: 'el-icon-s-order',
      //     title: '智慧校园',
      //     content: '人工智能与教育领域的深度融合 让智慧触手可及',
      //     url: '/campus',
      //   },
      //   {
      //     icon: 'el-icon-s-order',
      //     title: '智慧建筑',
      //     content: '实现设备、资产、能源的运维智能化规划与管理的时空一体化',
      //     url: '/architecture',
      //   },
      //   {
      //     icon: 'el-icon-s-order',
      //     title: '智慧BIM',
      //     content: '帮助参与方直观了解设计意图，并支持精确的仿真和分析',
      //     url: '/bim',
      //   },
      // ],
    }
  },
  methods: {
    // changeSolution(item) {
    //   this.$router.push({path: item.url})
    // },
    goPage(url) {
      this.$router.push({ path: url })
    },
    //地图初始化
    mapReady({ BMap, map }) {
      this.point = new BMap.Point(117.141589, 36.675304) // 选择一个经纬度作为中心点
      map.centerAndZoom(this.point, 19) //设置地图中心点和缩放级别
      this.BMap = BMap
      this.map = map
    },
  },
  props: {
    //  解决方案
    isSolution: {
      type: Boolean,
      default: false,
    },
    //  技术服务
    isTechnicalService: {
      type: Boolean,
      default: false,
    },
    //  关于我们
    isAboutUs: {
      type: Boolean,
      default: false,
    },
    //  联系我们
    isContactUs: {
      type: Boolean,
      default: false,
    },
    isWisdom: {
      type: Boolean,
      default: false,
    },
    wisdomData: {
      type: Array,
      default: () => [],
    },
    iconNavList: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    isMap: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
  .box {
    // display: flex;
    justify-content: space-between;
    // align-items: center;
    .map-text {
      margin-top: 5%;
      .title {
        padding: 0 0 20px;
        color: #0a3daa;
        border-bottom: 1px solid #eee;
      }
      .address {
        margin: 50px 0;
        .top {
          margin-bottom: 10px;
          i {
            font-size: 20px;
            color: #0a3daa;
            margin-right: 10px;
          }
        }
      }
      .phone {
        .top {
          margin-bottom: 10px;
          i {
            font-size: 20px;
            color: #0a3daa;
            margin-right: 10px;
          }
        }
      }
    }
  }
  #allmap {
    height: 300px;
    width: 100%;
    margin: 10px 0;
  }
  * {
    margin: 0;
    padding: 0;
  }

  .active {
    color: #0a3daa;
  }

  .container {
    width: 80%;
    background-color: #ffffff;
    margin: 30px auto;

    .title {
      font-size: 32px;
      color: #000000;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .detail {
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
          text-indent: 2em;
          margin: 5px 0;
        }

        .text-title {
          color: rgb(191, 191, 191);
          font-size: 20px;
          margin-bottom: 10px;
        }

        .card {
          width: 90%;

          li {
            position: relative;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
            width: 100%;
            background-image: url('../../assets/images/智慧化工.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            background-position: -2000px -160px;
            height: 110px;
            .zzc {
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0.5;
              left: -2000px;
            }
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              left: -2000px;
            }
            .box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              z-index: 2;
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
                i {
                  font-size: 36px;
                  color: rgb(0, 0, 0);
                }
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
          }

          li:hover:nth-child(1) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧化工.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -160px;
            width: 115%;
            background-position: 0 -160px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
              }
            }
          }
          li:hover:nth-child(2) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧工地.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -160px;
            width: 115%;
            // background-position: 0 -160px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
              }
            }
          }
          li:hover:nth-child(3) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧社区.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -160px;
            width: 115%;
            background-position: 0 -180px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
              }
            }
          }
          li:hover:nth-child(4) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧矿山.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -160px;
            width: 115%;
            background-position: 0 -220px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
              }
            }
          }
          li:hover:nth-child(5) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧加油站.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -160px;
            width: 115%;
            background-position: 0 -260px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
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
  .box {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    .map-text {
      margin-left: 20px;
      margin-top: 5%;
      .title {
        padding: 0 0 20px;
        color: #0a3daa;
        border-bottom: 1px solid #eee;
      }
      .address {
        margin: 50px 0;
        .top {
          margin-bottom: 10px;
          i {
            font-size: 20px;
            color: #0a3daa;
            margin-right: 10px;
          }
        }
      }
      .phone {
        .top {
          margin-bottom: 10px;
          i {
            font-size: 20px;
            color: #0a3daa;
            margin-right: 10px;
          }
        }
      }
    }
  }
  #allmap {
    height: 450px;
    width: 70%;
    margin: 10px 0;
  }
  * {
    margin: 0;
    padding: 0;
  }

  .active {
    color: #0a3daa;
  }

  .container {
    width: 80%;
    background-color: #ffffff;
    margin: 30px auto;

    .title {
      font-size: 32px;
      color: #000000;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .detail {
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
          text-indent: 2em;
          margin: 5px 0;
        }

        .text-title {
          color: rgb(191, 191, 191);
          font-size: 20px;
          margin-bottom: 10px;
        }

        .card {
          width: 90%;

          li {
            position: relative;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
            width: 100%;
            background-image: url('../../assets/images/智慧化工.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            background-position: -2000px -160px;
            height: 110px;
            .zzc {
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0.5;
              left: 0px;
            }
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              left: -2000px;
            }
            .box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              z-index: 2;
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
                i {
                  font-size: 36px;
                  color: rgb(0, 0, 0);
                }
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
          }

          li:hover:nth-child(1) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧化工.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -100px;
            width: 115%;
            background-position: 0 -160px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
              }
            }
          }
          li:hover:nth-child(2) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧工地.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -100px;
            width: 115%;
            // background-position: 0 -160px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
              }
            }
          }
          li:hover:nth-child(3) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧社区.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -100px;
            width: 115%;
            background-position: 0 -180px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
              }
            }
          }
          li:hover:nth-child(4) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧矿山.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -100px;
            width: 115%;
            background-position: 0 -220px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
              }
            }
          }
          li:hover:nth-child(5) {
            color: #ffffff;
            background-position: top right;
            background-image: url('../../assets/images/智慧加油站.jpg');
            background-repeat: no-repeat;
            background-size: 100%, 100%;
            transition: all, 0.4s;
            margin-left: -100px;
            width: 115%;
            background-position: 0 -260px;

            .zzc {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: 2;
              background-color: rgb(0, 0, 0);
              transition: all, 0.4s;
            }

            img {
              position: absolute;
              width: 100%;
              height: 100%;
              transition: all, 0.3s;
              left: 0;
            }

            .box {
              .one {
                font-weight: 600;
                color: #ffffff;
              }

              .hengXian {
                width: 150px;
                height: 1px;
                background-color: #ffffff;
                display: block;
              }

              .two {
                i {
                  color: #ffffff;
                }
              }

              .three {
                .title {
                  color: #ffffff;
                }
                .content {
                  color: #ffffff;
                }
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
// .box {
//   display: flex;
//   justify-content: space-between;
//   // align-items: center;
//   .map-text {
//     margin-top: 5%;
//     .title {
//       padding: 0 0 20px;
//       color: #0a3daa;
//       border-bottom: 1px solid #eee;
//     }
//     .address {
//       margin: 50px 0;
//       .top {
//         margin-bottom: 10px;
//         i {
//           font-size: 20px;
//           color: #0a3daa;
//           margin-right: 10px;
//         }
//       }
//     }
//     .phone {
//       .top {
//         margin-bottom: 10px;
//         i {
//           font-size: 20px;
//           color: #0a3daa;
//           margin-right: 10px;
//         }
//       }
//     }
//   }
// }
// #allmap {
//   height: 450px;
//   width: 70%;
//   margin: 10px 0;
// }
// * {
//   margin: 0;
//   padding: 0;
// }

// .active {
//   color: #0a3daa;
// }

// .container {
//   width: 80%;
//   background-color: #ffffff;
//   margin: 30px auto;

//   .title {
//     font-size: 32px;
//     color: #000000;
//     margin-bottom: 20px;
//     font-weight: bold;
//   }

//   .detail {
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
//         text-indent: 2em;
//         margin: 5px 0;
//       }

//       .text-title {
//         color: rgb(191, 191, 191);
//         font-size: 20px;
//         margin-bottom: 10px;
//       }

//       .card {
//         width: 90%;

//         li {
//           position: relative;
//           cursor: pointer;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 30px;
//           width: 100%;
//           background-image: url('../../assets/images/智慧化工.jpg');
//           background-repeat: no-repeat;
//           background-size: 100%, 100%;
//           background-position: -2000px -160px;
//           height: 110px;
//           .zzc {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             opacity: 0.5;
//             left: -2000px;
//           }
//           img {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             left: -2000px;
//           }
//           .box {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             width: 100%;
//             z-index: 2;
//             .one {
//               font-size: 30px;
//             }

//             .hengXian {
//               width: 150px;
//               height: 1px;
//               background-color: #0a3daa;
//               display: none;
//             }

//             .two {
//               i {
//                 font-size: 36px;
//                 color: rgb(0, 0, 0);
//               }
//             }

//             .three {
//               width: 35%;

//               .title {
//                 font-size: 16px;
//               }

//               .content {
//                 font-size: 14px;
//               }
//             }
//           }
//         }

//         li:hover:nth-child(1) {
//           color: #ffffff;
//           background-position: top right;
//           background-image: url('../../assets/images/智慧化工.jpg');
//           background-repeat: no-repeat;
//           background-size: 100%, 100%;
//           transition: all, 0.4s;
//           margin-left: -160px;
//           width: 115%;
//           background-position: 0 -160px;

//           .zzc {
//             position: absolute;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             opacity: 0.4;
//             z-index: 2;
//             background-color: rgb(0, 0, 0);
//             transition: all, 0.4s;
//           }

//           img {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             transition: all, 0.3s;
//             left: 0;
//           }

//           .box {
//             .one {
//               font-weight: 600;
//               color: #ffffff;
//             }

//             .hengXian {
//               width: 150px;
//               height: 1px;
//               background-color: #ffffff;
//               display: block;
//             }

//             .two {
//               i {
//                 color: #ffffff;
//               }
//             }

//             .three {
//               .title {
//                 color: #ffffff;
//               }
//               .content {
//                 color: #ffffff;
//               }
//             }
//           }
//         }
//         li:hover:nth-child(2) {
//           color: #ffffff;
//           background-position: top right;
//           background-image: url('../../assets/images/智慧工地.jpg');
//           background-repeat: no-repeat;
//           background-size: 100%, 100%;
//           transition: all, 0.4s;
//           margin-left: -160px;
//           width: 115%;
//           // background-position: 0 -160px;

//           .zzc {
//             position: absolute;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             opacity: 0.4;
//             z-index: 2;
//             background-color: rgb(0, 0, 0);
//             transition: all, 0.4s;
//           }

//           img {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             transition: all, 0.3s;
//             left: 0;
//           }

//           .box {
//             .one {
//               font-weight: 600;
//               color: #ffffff;
//             }

//             .hengXian {
//               width: 150px;
//               height: 1px;
//               background-color: #ffffff;
//               display: block;
//             }

//             .two {
//               i {
//                 color: #ffffff;
//               }
//             }

//             .three {
//               .title {
//                 color: #ffffff;
//               }
//               .content {
//                 color: #ffffff;
//               }
//             }
//           }
//         }
//         li:hover:nth-child(3) {
//           color: #ffffff;
//           background-position: top right;
//           background-image: url('../../assets/images/智慧社区.jpg');
//           background-repeat: no-repeat;
//           background-size: 100%, 100%;
//           transition: all, 0.4s;
//           margin-left: -160px;
//           width: 115%;
//           background-position: 0 -180px;

//           .zzc {
//             position: absolute;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             opacity: 0.4;
//             z-index: 2;
//             background-color: rgb(0, 0, 0);
//             transition: all, 0.4s;
//           }

//           img {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             transition: all, 0.3s;
//             left: 0;
//           }

//           .box {
//             .one {
//               font-weight: 600;
//               color: #ffffff;
//             }

//             .hengXian {
//               width: 150px;
//               height: 1px;
//               background-color: #ffffff;
//               display: block;
//             }

//             .two {
//               i {
//                 color: #ffffff;
//               }
//             }

//             .three {
//               .title {
//                 color: #ffffff;
//               }
//               .content {
//                 color: #ffffff;
//               }
//             }
//           }
//         }
//         li:hover:nth-child(4) {
//           color: #ffffff;
//           background-position: top right;
//           background-image: url('../../assets/images/智慧矿山.jpg');
//           background-repeat: no-repeat;
//           background-size: 100%, 100%;
//           transition: all, 0.4s;
//           margin-left: -160px;
//           width: 115%;
//           background-position: 0 -220px;

//           .zzc {
//             position: absolute;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             opacity: 0.4;
//             z-index: 2;
//             background-color: rgb(0, 0, 0);
//             transition: all, 0.4s;
//           }

//           img {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             transition: all, 0.3s;
//             left: 0;
//           }

//           .box {
//             .one {
//               font-weight: 600;
//               color: #ffffff;
//             }

//             .hengXian {
//               width: 150px;
//               height: 1px;
//               background-color: #ffffff;
//               display: block;
//             }

//             .two {
//               i {
//                 color: #ffffff;
//               }
//             }

//             .three {
//               .title {
//                 color: #ffffff;
//               }
//               .content {
//                 color: #ffffff;
//               }
//             }
//           }
//         }
//         li:hover:nth-child(5) {
//           color: #ffffff;
//           background-position: top right;
//           background-image: url('../../assets/images/智慧加油站.jpg');
//           background-repeat: no-repeat;
//           background-size: 100%, 100%;
//           transition: all, 0.4s;
//           margin-left: -160px;
//           width: 115%;
//           background-position: 0 -260px;

//           .zzc {
//             position: absolute;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             opacity: 0.4;
//             z-index: 2;
//             background-color: rgb(0, 0, 0);
//             transition: all, 0.4s;
//           }

//           img {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             transition: all, 0.3s;
//             left: 0;
//           }

//           .box {
//             .one {
//               font-weight: 600;
//               color: #ffffff;
//             }

//             .hengXian {
//               width: 150px;
//               height: 1px;
//               background-color: #ffffff;
//               display: block;
//             }

//             .two {
//               i {
//                 color: #ffffff;
//               }
//             }

//             .three {
//               .title {
//                 color: #ffffff;
//               }
//               .content {
//                 color: #ffffff;
//               }
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
