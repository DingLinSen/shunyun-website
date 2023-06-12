<template>
  <div class="home">
    <!-- 头部 -->
    <!--    <Header></Header>-->
    <!-- 轮播图 -->
    <Banner :isBanner="true"></Banner>
    <!-- 内容 -->
    <div class="content">
      <ul class="iconNavContent">
        <li @click="goPage(item.url)" v-for="(item, index) in iconNavList" :key="index">
          <div class="icon">
            <!-- <img :src="item.icon" alt="" /> -->
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <span class="title">{{ item.title }}</span>
          <br />
          <!-- <span class="text">{{ item.content }}</span> -->
          <div class="left"></div>
          <div class="right"></div>
        </li>
      </ul>
      <div class="content-text">
        <div class="title">成功商业案例</div>
        <span>SUCCESSFUL CASES</span>
        <ul>
          <li @click="goCaseDetail">
            <div class="zzc"></div>
            <img src="@/assets/images/businessCase/图片14.png" alt="" />
            <h4>智慧加油站</h4>
            <br />
            <ol class="content-title">
              安全经营、降本增效，实现智能化转型升级
            </ol>
            <ol>
              卸油作业规范依赖人员安全意识<br />
              抽烟、打电话等危险行为难管控<br />
              人员操作难管控<br />
              无法保障24小时监测
            </ol>
            <ol class="content-title">
              精细运营、数智决策，实现数字化管理提效
            </ol>
            <ol>
              加油和非油品销售，无有效结合<br />
              无精准客户画像，无法使用进行精准营销<br />
              自主服务程度低<br />
            </ol>
          </li>
          <li @click="gochemicalPlant">
            <div class="zzc"></div>
            <img src="@/assets/images/businessCase/图片15.png" alt="" />
            <h4>智慧化工厂</h4>
            <br />
            <div class="ti text">
              近年来，国家和企业对安全生产越来越重视，“人防与技防相结合”、“预防为主”的安全文明生产指导方针深入贯彻到工厂企业，安全文明生产环境是企业工厂的基本要求。
            </div>
            <div class="text ti">
              化工园区安全监管主要存在两大现实难题。第一个是单位主体责任落实难，经营单位落实主体责任过程较繁琐、结果难以呈现，单靠“人海战术”摸排收集的监管数据也难以及时更新，无法实时跟进单位主体责任的落地；第二个是监管部门信息共享难，多部门之间的监管“信息壁垒”仍然存在，监管的“信息孤岛”格局难以打破；因此，建设以互联网、物联网IoT、人工智能AI及大数据技术为核心的互联网+化工智慧系统，能够加快实现全程留痕、信息可追溯，提升监管效能，真正做到监管的及时精准，也促使化工单位及其从业人员的行为更加规范。
            </div>
            <!--            <span>{{ item.date }}</span>-->
            <!--            <span class="text">近年来，国家和企业对安全生产越来越重视，“人防与技防相结合”、“预防为主”的安全文明生产指导方针深入贯彻到工厂企业，安全文明生产环境是企业工厂的基本要求。</span>-->
          </li>
          <li @click="goSite">
            <div class="zzc"></div>
            <img src="@/assets/images/businessCase/图片16.png" alt="" />
            <h4>智慧工地</h4>
            <br />
            <div class="ti text center">
              通过工地可视化系统为政府、企业、现场施工管理提供了先进技术手段，通过安装在建筑施工作业现场的各类摄像头，构造只能监控和防范体系，就能有效补充传通方法和技术在监管中的缺陷，实现对人、机、料、法、环的全方位实时监控，变被动“监督”为主动“监控”；同时其也将为安全生产监督管理引入新理念，真正体现“安全第一、预防为主、综合治理”的安全生产方针，传统的施工检测，容易受人为影响且效率低下，通过引入AI技术，可以有效提供建筑施工质量，进而构建智能建筑，并最终达到创造智能城市的目标
            </div>
            <!--            <span>{{ item.date }}</span>-->
            <span class="text"></span>
          </li>
        </ul>
        <div class="btn">
          <span @click="goBusinessCase">More&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="el-icon-right"></i></span>
        </div>
      </div>
      <div class="container" v-model="introductionData">
        <h2>{{ introductionData.title }}</h2>
        <p class="en">{{ introductionData.company }}</p>
        <div class="text">
          <p>{{ introductionData.contentOne }}</p>
        </div>
        <div class="text">
          <p>{{ introductionData.contentTwo }}</p>
        </div>
        <!-- <ul class="containerList">
          <li>
            <p>
              <span class="number">{{ introductionData.customer }}</span
              >+
            </p>
            <p class="textBlod">一起成长的客户</p>
          </li>
          <li>
            <p>
              <span class="number">{{ introductionData.project }}</span
              >+
            </p>
            <p class="textBlod">完成的项目合作</p>
          </li>
          <li>
            <p>
              <span class="number">{{ introductionData.year }}</span
              >年
            </p>
            <p class="textBlod">匠心沉淀</p>
          </li>
          <li>
            <p>
              <span class="number">{{ introductionData.satisfied }}</span
              >%
            </p>
            <p class="textBlod">客户满意度</p>
          </li>
        </ul> -->
      </div>
      <div class="media-center">
        <div class="title-box">
          <div class="left">
            <p>媒体中心</p>
            <p class="underline"></p>
          </div>
          <ul class="tabs">
            <li @click="goPage(item.url)" v-for="(item, index) in tabsData" :key="index">{{ item.name }}</li>
          </ul>
        </div>
        <div class="media-box">
          <div class="left" @click="goMediaContent">
            <div class="img">
              <img src="@/assets/images/mediaCenter/rgzn.jpg" alt="" />
              <div class="zzc"></div>
            </div>
            <div class="text">
              <div class="text-content">
                <div class="text-title">人工智能前沿——未来AI技术的五大应用领域</div>
                <p>未来人工智能技术发展的五大应用领域：航空航天、医疗保健、建筑行业、能源领域以及供应链。</p>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="first" @click="goSjrg">
              <div class="text-content">
                <div class="text-title">视觉人工智能行业发展现状及趋势分析</div>
                <p>
                  在新一轮AI热潮之下，人工智能技术将加速与更多技术和产业的融合，下游蓬勃的需求将被唤醒。面向智能化的时代，舜云科技为客户提供覆盖多个场景的完整系统级解决方案，实现AI赋能于智慧安防、智能车载、智能硬件三大应用领域。
                </p>
              </div>
              <!--              <div class="date">-->
              <!--                <span class="day">19</span>-->
              <!--                <span class="year">2020-11</span>-->
              <!--              </div>-->
            </div>
            <ul>
              <li @click="goSf" class="text">
                <p>算法的五个特性</p>
              </li>
              <li @click="goFzqs" class="text">
                <p>AI视觉技术的发展趋势</p>
              </li>
              <li @click="goJsyl" class="text">
                <p>AI视觉技术原理是什么？</p>
              </li>
              <li @click="goWhy" class="text">
                <p>为什么说视觉AI很重要？</p>
              </li>
            </ul>
          </div>
        </div>
        <div @click="goMediaCenter" class="btn">
          <span>More&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-arrow-right"></i></span>
        </div>
      </div>
      <!--      <div class="cooperation">-->
      <!--        <div class="title">合作伙伴</div>-->
      <!--        <span>PARTNERS</span>-->
      <!--        <ul class="cooperation-img">-->
      <!--          <li v-for="(item, index) in 8" :key="index"><img src="@/assets/images/0335e0f16c10f5ad55bdcb78aa95e41.png" alt=""/>-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </div>-->
    </div>
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 右侧固定 -->
    <Affix></Affix>
  </div>
</template>

<script>
import { getIntroduction, getServiceContent, getSuccessData } from '@/api'
// 引入头部
import Header from '@/layout/header'
// 引入轮播图
import Banner from '@/layout/banner'
//引入底部
import Footer from '@/layout/footer'
//引入侧边导航栏
import Affix from '@/layout/affix'

export default {
  name: 'HomeView',
  data: function () {
    return {
      iconNavList: [
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
          content: '赋能校园，助力学校安防升级',
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
      ], //图标导航栏
      successData: [
        {
          title: '产业园区楼宇自控',
          date: '2020-11-25',
          content:
            '采用人工智能、数据库和云计算技术，将建筑信息化、建筑智能化实现有机融合。经过多年积累，已形成星级酒店、办公楼宇、文化场馆、产业园区、城市综合体、文体场馆、医疗机构、养老基地、市政工程等多行业。具有独特见解的、完善的智慧建筑解决方案，提供综合、集约、联控、运算模式和应用模型的综合性智慧建筑解决方案，以智慧建筑的管需求和功能应用为出发点。',
          url: '/businessCase',
        },
        {
          title: '产业园区楼宇自控',
          date: '2020-11-25',
          content:
            '采用人工智能、数据库和云计算技术，将建筑信息化、建筑智能化实现有机融合。经过多年积累，已形成星级酒店、办公楼宇、文化场馆、产业园区、城市综合体、文体场馆、医疗机构、养老基地、市政工程等多行业。具有独特见解的、完善的智慧建筑解决方案，提供综合、集约、联控、运算模式和应用模型的综合性智慧建筑解决方案，以智慧建筑的管需求和功能应用为出发点。',
          url: '/businessCase',
        },
        {
          title: '产业园区楼宇自控',
          date: '2020-11-25',
          content:
            '采用人工智能、数据库和云计算技术，将建筑信息化、建筑智能化实现有机融合。经过多年积累，已形成星级酒店、办公楼宇、文化场馆、产业园区、城市综合体、文体场馆、医疗机构、养老基地、市政工程等多行业。具有独特见解的、完善的智慧建筑解决方案，提供综合、集约、联控、运算模式和应用模型的综合性智慧建筑解决方案，以智慧建筑的管需求和功能应用为出发点。',
          url: '/businessCase',
        },
      ], //成功案例的数据
      introductionData: {
        title: 'ABOUT US',
        company: '舜云科技有限公司',
        contentOne:
          '山东舜云信息科技有限公司，是一家专业提供IT信息化建设服务及解决方案的公司。2016年开始踏入网络信息化领域，以“务实、诚信”的态度，“专业、专注”的精神，服务于客户。以“为客户提供高品质的应用解决方案”为价值，精细化管理为经营理念，为企业发展奠定基石，插上腾飞的翅膀。我们致力于将技术与场景应用充分融合，贴近用户进行产品方案设计和创新，助力各行业用户实现数字化转型和业务价值创新。我们坚持“专业”导向，拥有一支专业、训练有素的技术服务队伍，在大中型局域网、城域网、骨干广域网及网络安全传输、企业计算机安全认证、AI智能和算法等方面积累了丰富的经验。公司发展坚持“技术创造价值，专业成就未来”，做网络与信息安全的守护者，持续为客户提供高品质的解决方案，实现企业和客户的共同发展。共建一个稳定、安全、高效的智能信息化社会。',
        customer: 800,
        project: 1600,
        year: 13,
        satisfied: 98,
      }, //公司简介的数据
      tabsData: [
        {
          name: '全部',
          url: '/mediaCenter',
        },
        {
          name: '技术前沿',
          url: '/frontier',
        },
        {
          name: '行业资讯',
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
    // 获取带图片的导航列表
    async getServiceContent() {
      const result = await getServiceContent()
      // this.iconNavList = result.data.data
    },
    //  获取成功案例的数据
    async getSuccessData() {
      const result = await getSuccessData()
      // this.successData = result.data
    },
    async getIntroduction() {
      const result = await getIntroduction()
      // this.introductionData = result.data
    },
    //  点击按钮跳转到媒体中心
    goMediaCenter() {
      this.$router.push({ path: '/mediaCenter' })
    },
    goBusinessCase() {
      this.$router.push({ path: '/businessCase' })
    },
    //  跳转页面
    goPage(url) {
      this.$router.push(url)
    },
    goCaseDetail() {
      this.$router.push({ path: '/caseDetail' })
    },
    gochemicalPlant() {
      this.$router.push({ path: '/chemicalPlant' })
    },
    goSite() {
      this.$router.push({ path: '/site' })
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
  mounted() {
    this.getServiceContent()
    this.getSuccessData()
    this.getIntroduction()
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
  .content {
    width: 78%;
    margin: 0 auto;

    .iconNavContent {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .icon {
        margin-top: 40px;
        text-align: center;
        font-size: 50px;
        color: #0a3daa;
        i {
          font-size: 50px;
        }
      }

      li {
        width: 100%;
        list-style: none;
        text-align: center;
        // border-right: 1px solid #f8f8f8;
        padding: 0 10px;
        position: relative;

        .title {
          line-height: 80px;
          font-weight: 700;
        }

        .text {
          font-size: 14px;
          color: #999999;
        }

        .left {
          width: 0;
          transition: all 0.3s linear;
          background-color: #0a3daa;
        }

        .right {
          width: 0;
          transition: all 0.3s linear;
          background-color: #0a3daa;
        }
      }

      // li:hover .left {
      //   height: 100%;
      //   background-color: #0a3daa;
      //   position: absolute;
      //   top: 0;
      //   width: 50%;
      //   z-index: -2;
      // }

      // li:hover .right {
      //   height: 100%;
      //   background-color: #0a3daa;
      //   position: absolute;
      //   top: 0;
      //   right: 0;
      //   width: 50%;
      //   z-index: -2;
      // }

      // li:hover {
      //   width: 100%;
      //   list-style: none;
      //   text-align: center;
      //   border-right: 1px solid #f8f8f8;
      //   padding: 0 10px;
      //   color: #ffffff;
      //   cursor: pointer;
      //   z-index: 9999;

      //   .icon {
      //     color: #ffffff;
      //   }

      //   .title {
      //     font-weight: 700;
      //   }

      //   .text {
      //     font-size: 14px;
      //     color: #ffffff;
      //   }
      // }
    }

    .content-text {
      margin-top: 20px;

      .title {
        font-size: 26px;
      }

      ul {
        margin-top: 10px;
        // display: flex;
        // justify-content: space-between;

        li {
          margin: 10px 0;
          display: flex;
          flex-direction: column;
          //justify-content: center;
          list-style: none;
          background-color: rgb(242, 242, 242);
          width: 100%;
          // height: 350px;
          padding: 60px 20px;
          cursor: pointer;
          // position: relative;
          z-index: 2;

          .content-title {
            //font-size: 18px;
            //font-family: "FangSong";
            margin: 3px 0;
            //color: #4673c4;
            font-weight: 600;
            color: #000;
          }

          ol {
            z-index: 2;
            //font-family: "FangSong";
            margin: 3px 10px;
            -webkit-line-clamp: 2; //设置几行
            display: -webkit-box; //设置为伸缩盒弹性盒子展示
            overflow: hidden; //超出隐藏
            text-overflow: ellipsis; //设置超出部分以省略号展示
            -webkit-box-orient: vertical; //伸缩盒弹性盒子的排列方式
            line-height: 1.5;
            color: #999999;
          }

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            visibility: hidden;
          }

          h4 {
            z-index: 2;
          }

          span {
            font-size: 14px;
            color: #999999;
            z-index: 2;
          }

          .text {
            -webkit-line-clamp: 3; //设置几行
            display: -webkit-box; //设置为伸缩盒弹性盒子展示
            overflow: hidden; //超出隐藏
            text-overflow: ellipsis; //设置超出部分以省略号展示
            -webkit-box-orient: vertical; //伸缩盒弹性盒子的排列方式
            line-height: 1.5;
          }

          .ti {
            color: #999999;
            text-indent: 2em;
            //font-family: "FangSong";
            z-index: 2;
          }

          .center {
            margin: 40px 0;
          }
        }

        // li:nth-child(2) {
        //   margin: 0 30px;
        // }
      }

      @keyframes zzc {
        from {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        to {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          background: #0a3daa;
          opacity: 0.4;
        }
      }
      @keyframes showImg {
        from {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          visibility: hidden;
          transform: scale(0.9);
        }
        to {
          visibility: visible;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 0.5s ease-out;
        }
      }

      @keyframes bi {
        from {
          display: flex;
          flex-direction: column;
          //justify-content: center;
          list-style: none;
          background-color: rgb(242, 242, 242);
          width: 33%;
          height: 350px;
          padding: 60px 20px;
          cursor: pointer;
        }
        to {
          display: flex;
          flex-direction: column;
          //justify-content: center;
          list-style: none;
          width: 33%;
          height: 350px;
          padding: 40px 20px;
          cursor: pointer;
          //background-image: url("../../assets/images/0335e0f16c10f5ad55bdcb78aa95e41.png");
          //background-repeat: no-repeat;
          //background-size: 100% 100%;
          background: #0a3daa;
          //color: #ffffff;
        }
      }

      // li:hover {
      //   animation-name: bi;
      //   animation-duration: 0.65s;
      //   animation-fill-mode: forwards;
      //   color: #ffffff;

      //   .content-title {
      //     color: #ffffff;
      //   }

      //   ol {
      //     color: #ffffff;
      //   }

      //   .ti {
      //     color: #ffffff;
      //   }

      //   h4 {
      //     color: #ffffff;
      //   }

      //   span {
      //     color: #ffffff;
      //   }
      // }

      // li:hover img {
      //   animation-name: showImg;
      //   animation-duration: 0.65s;
      //   animation-fill-mode: forwards;
      // }

      // li:hover .zzc {
      //   animation-name: zzc;
      //   animation-duration: 0.1s;
      //   animation-fill-mode: forwards;
      // }

      .btn {
        text-align: center;

        span {
          margin-top: 20px;
          font-size: 14px;
          padding: 10px 30px;
          border-radius: 2em;
          border: 1px solid #0a3daa;
          background-color: #0a3daa;
          color: rgb(255, 255, 255);
          display: inline-block;
          transition: all 0.25s ease-out 0s;

          i {
            font-weight: 600;
          }
        }

        span:hover {
          background-color: #fff;
          cursor: pointer;
          color: #0a3daa;
        }
      }
    }

    .container {
      margin-top: 80px;

      h2 {
        font-size: 42px;
        line-height: 42px;
        text-align: center;
        padding-bottom: 15px;
      }

      .en {
        color: #999999;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        padding-bottom: 40px;
      }

      .text {
        margin: 10px 0;

        p {
          color: #999999;
          line-height: 30px;
        }
      }

      .containerList {
        display: flex;
        justify-content: space-around;
        margin-top: 65px;

        li {
          list-style: none;
          text-align: center;

          .number {
            font-size: 62px;
            padding-right: 10px;
            color: #0a3daa;

            span {
            }
          }

          .textBlod {
            font-weight: bold;
          }
        }
      }
    }

    .media-center {
      margin-top: 80px;

      .title-box {
        // display: flex;
        // justify-content: space-between;

        .left {
          p {
            font-size: 22px;
            font-weight: 200;
          }

          .underline {
            width: 38px;
            height: 2px;
            background: #0a3daa;
            margin-top: 6px;
          }
        }

        .tabs {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          align-items: center;
          // margin-right: 30px;
          margin-top: 20px;

          li {
            padding: 8px 15px;
            margin: 0 5px;
          }

          // li {
          //   cursor: pointer;
          //   font-size: 13px;
          //   margin: 0 5px;
          //   padding: 6px 20px;
          // }

          li:nth-child(1) {
            background-color: #0a3daa;
            color: #fff;
          }

          // li:hover {
          //   background-color: #0a3daa;
          //   color: #fff;
          // }
        }
      }

      .media-box {
        // display: flex;
        // justify-content: space-between;
        margin-top: 50px;

        @keyframes you {
          from {
            cursor: pointer;
            width: 40%;
          }
          to {
            cursor: pointer;
            width: 40%;
            margin-left: 20px;
          }
        }
        @keyframes zzcTwo {
          from {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            background-color: #ffffff;
          }
          to {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }

        // .left:hover {
        //   animation-name: you;
        //   animation-duration: 0.5s;
        //   animation-fill-mode: forwards;
        // }

        // .left:hover .zzc {
        //   animation-name: zzcTwo;
        //   animation-duration: 0.5s;
        //   animation-fill-mode: forwards;
        // }

        .left {
          cursor: pointer;
          width: 100%;

          .img {
            width: 100%;
            height: 320px;
            position: relative;

            img {
              width: 100%;
              height: 100%;
            }

            // .zzc {
            //   position: absolute;
            //   top: 0;
            //   width: 100%;
            //   height: 100%;
            //   opacity: 0.3;
            //   background-color: #ffffff;
            // }
          }

          .text {
            background: #0a3daa;
            padding: 28px 20px 28px 20px;
            display: flex;

            .date {
              width: 100%;
              display: flex;
              flex-direction: column;
              color: #fff;

              .day {
                font-size: 36px;
                font-weight: bold;
                color: #ffffff;
              }

              .year {
                font-size: 14px;
                margin-top: 5px;
              }
            }

            .text-content {
              // margin-left: 27px;

              .text-title {
                color: #fff;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                padding-bottom: 15px;
              }

              p {
                padding-top: 15px;
                color: #fff;
              }
            }
          }
        }

        .right {
          // margin-left: 70px;
          flex: 1;

          @keyframes pl {
            from {
            }
            to {
              padding-left: 20px;
              color: #0a3daa;
            }
          }

          .first {
            padding: 18px 0 0 0;
            cursor: pointer;
            display: flex;
            justify-content: space-between;

            .date {
              // width: 100%;
              display: flex;
              flex-direction: column;
              color: #999999;

              .day {
                font-size: 36px;
                font-weight: bold;
              }

              .year {
                font-size: 14px;
                margin-top: 5px;
              }
            }

            .text-content {
              // margin-bottom: 20px;
              width: 100%;

              .text-title {
                border-bottom: 1px solid #999999;
                padding-bottom: 15px;
              }

              p {
                padding-top: 15px;
                color: #999999;
              }
            }
          }

          .first:hover {
            animation-name: pl;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
          }
        }

        ul {
          li:hover {
            animation-name: pl;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
          }

          .text {
            display: flex;
            justify-content: space-between;
            padding: 18px 0;
            border-bottom: 1px solid #999999;

            p {
              cursor: pointer;
            }

            span {
              color: #999999;
              font-size: 14px;
            }
          }

          .text:hover {
            color: #0a3daa;
          }
        }
      }

      .btn {
        text-align: center;

        span {
          margin-top: 20px;
          font-size: 14px;
          padding: 10px 30px;
          // border-radius: 2em;
          border: 1px solid #0a3daa;
          // background-color: #0a3daa;
          color: #0a3daa;
          display: inline-block;
          transition: all 0.25s ease-out 0s;

          i {
            font-weight: 600;
          }
        }

        span:hover {
          background-color: #0a3daa;
          cursor: pointer;
          color: #fff;
        }
      }
    }

    .cooperation {
      margin-top: 80px;

      .title {
        font-size: 32px;
      }

      span {
        font-size: 14px;
        color: #999999;
      }

      .cooperation-img {
        text-align: center;
        width: 80%;
        margin: 0 auto;
        height: 420px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;
        align-items: center;

        li {
          cursor: pointer;
          padding: 10px 5px;

          img {
            width: 240px;
            height: 150px;
          }
        }

        li:hover {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
}
@media screen and (min-width: 770px) {
  .content {
    width: 78%;
    margin: 0 auto;

    .iconNavContent {
      display: flex;
      // flex-wrap: wrap;
      justify-content: space-between;
      height: 200px;
      // box-shadow: 0px 1px 2px #e4e4e4;

      .icon {
        margin-top: 40px;
        text-align: center;
        font-size: 50px;
        color: #0a3daa;
        i {
          font-size: 50px;
        }
      }

      li {
        width: 100%;
        list-style: none;
        text-align: center;
        // border-right: 1px solid #f8f8f8;
        padding: 0 10px;
        position: relative;

        .title {
          line-height: 80px;
          font-weight: 700;
        }

        .text {
          font-size: 14px;
          color: #999999;
        }

        .left {
          width: 0;
          transition: all 0.3s linear;
          background-color: #0a3daa;
        }

        .right {
          width: 0;
          transition: all 0.3s linear;
          background-color: #0a3daa;
        }
      }

      li:hover .left {
        height: 100%;
        background-color: #0a3daa;
        position: absolute;
        top: 0;
        width: 50%;
        z-index: -2;
      }

      li:hover .right {
        height: 100%;
        background-color: #0a3daa;
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        z-index: -2;
      }

      li:hover {
        width: 100%;
        list-style: none;
        text-align: center;
        border-right: 1px solid #f8f8f8;
        padding: 0 10px;
        color: #ffffff;
        cursor: pointer;
        z-index: 9999;

        .icon {
          color: #ffffff;
        }

        .title {
          font-weight: 700;
        }

        .text {
          font-size: 14px;
          color: #ffffff;
        }
      }
    }

    .content-text {
      margin-top: 80px;

      .title {
        font-size: 26px;
      }

      ul {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        li {
          display: flex;
          flex-direction: column;
          //justify-content: center;
          list-style: none;
          background-color: rgb(242, 242, 242);
          width: 33%;
          // height: 350px;
          padding: 60px 20px;
          cursor: pointer;
          position: relative;
          z-index: 2;

          .content-title {
            //font-size: 18px;
            //font-family: "FangSong";
            margin: 3px 0;
            //color: #4673c4;
            font-weight: 600;
            color: #000;
          }

          ol {
            z-index: 2;
            //font-family: "FangSong";
            // margin: 3px 10px;
            -webkit-line-clamp: 2; //设置几行
            display: -webkit-box; //设置为伸缩盒弹性盒子展示
            overflow: hidden; //超出隐藏
            text-overflow: ellipsis; //设置超出部分以省略号展示
            -webkit-box-orient: vertical; //伸缩盒弹性盒子的排列方式
            line-height: 1.5;
            color: #999999;
          }

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            visibility: hidden;
          }

          h4 {
            z-index: 2;
          }

          span {
            font-size: 14px;
            color: #999999;
            z-index: 2;
          }

          .text {
            -webkit-line-clamp: 3; //设置几行
            display: -webkit-box; //设置为伸缩盒弹性盒子展示
            overflow: hidden; //超出隐藏
            text-overflow: ellipsis; //设置超出部分以省略号展示
            -webkit-box-orient: vertical; //伸缩盒弹性盒子的排列方式
            line-height: 1.5;
          }

          .ti {
            color: #999999;
            text-indent: 2em;
            //font-family: "FangSong";
            z-index: 2;
          }

          .center {
            margin: 40px 0;
          }
        }

        li:nth-child(2) {
          margin: 0 30px;
        }
      }

      @keyframes zzc {
        from {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        to {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          background: #0a3daa;
          opacity: 0.4;
        }
      }
      @keyframes showImg {
        from {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          visibility: hidden;
          transform: scale(0.9);
        }
        to {
          visibility: visible;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 0.5s ease-out;
        }
      }

      @keyframes bi {
        from {
          display: flex;
          flex-direction: column;
          //justify-content: center;
          list-style: none;
          background-color: rgb(242, 242, 242);
          width: 33%;
          // height: 350px;
          padding: 60px 20px;
          cursor: pointer;
        }
        to {
          display: flex;
          flex-direction: column;
          //justify-content: center;
          list-style: none;
          width: 33%;
          // height: 350px;
          padding: 40px 20px;
          cursor: pointer;
          //background-image: url("../../assets/images/0335e0f16c10f5ad55bdcb78aa95e41.png");
          //background-repeat: no-repeat;
          //background-size: 100% 100%;
          background: #0a3daa;
          //color: #ffffff;
        }
      }

      li:hover {
        animation-name: bi;
        animation-duration: 0.65s;
        animation-fill-mode: forwards;
        color: #ffffff;

        .content-title {
          color: #ffffff;
        }

        ol {
          color: #ffffff;
        }

        .ti {
          color: #ffffff;
        }

        h4 {
          color: #ffffff;
        }

        span {
          color: #ffffff;
        }
      }

      li:hover img {
        animation-name: showImg;
        animation-duration: 0.65s;
        animation-fill-mode: forwards;
      }

      li:hover .zzc {
        animation-name: zzc;
        animation-duration: 0.1s;
        animation-fill-mode: forwards;
      }

      .btn {
        text-align: center;

        span {
          margin-top: 20px;
          font-size: 14px;
          padding: 10px 30px;
          border-radius: 2em;
          border: 1px solid #0a3daa;
          background-color: #0a3daa;
          color: rgb(255, 255, 255);
          display: inline-block;
          transition: all 0.25s ease-out 0s;

          i {
            font-weight: 600;
          }
        }

        span:hover {
          background-color: #fff;
          cursor: pointer;
          color: #0a3daa;
        }
      }
    }

    .container {
      margin-top: 80px;

      h2 {
        font-size: 42px;
        line-height: 42px;
        text-align: center;
        padding-bottom: 15px;
      }

      .en {
        color: #999999;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        padding-bottom: 40px;
      }

      .text {
        margin: 10px 0;

        p {
          color: #999999;
          line-height: 30px;
        }
      }

      .containerList {
        display: flex;
        justify-content: space-around;
        margin-top: 65px;

        li {
          list-style: none;
          text-align: center;

          .number {
            font-size: 62px;
            padding-right: 10px;
            color: #0a3daa;

            span {
            }
          }

          .textBlod {
            font-weight: bold;
          }
        }
      }
    }

    .media-center {
      margin-top: 80px;

      .title-box {
        display: flex;
        justify-content: space-between;

        .left {
          p {
            font-size: 22px;
            font-weight: 200;
          }

          .underline {
            width: 38px;
            height: 2px;
            background: #0a3daa;
            margin-top: 6px;
          }
        }

        .tabs {
          display: flex;
          align-items: center;
          margin-right: 30px;

          li {
            cursor: pointer;
            font-size: 13px;
            margin: 0 5px;
            padding: 6px 20px;
          }

          li:nth-child(1) {
            background-color: #0a3daa;
            color: #fff;
          }

          li:hover {
            background-color: #0a3daa;
            color: #fff;
          }
        }
      }

      .media-box {
        display: flex;
        // justify-content: space-between;
        margin-top: 50px;

        @keyframes you {
          from {
            cursor: pointer;
            width: 40%;
          }
          to {
            cursor: pointer;
            width: 40%;
            margin-left: 20px;
          }
        }
        @keyframes zzcTwo {
          from {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            background-color: #ffffff;
          }
          to {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }

        .left:hover {
          animation-name: you;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }

        .left:hover .zzc {
          animation-name: zzcTwo;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }

        .left {
          cursor: pointer;
          width: 40%;

          .img {
            width: 100%;
            height: 320px;
            position: relative;

            img {
              width: 100%;
              height: 100%;
            }

            .zzc {
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
              opacity: 0.3;
              background-color: #ffffff;
            }
          }

          .text {
            background: #0a3daa;
            padding: 28px 20px 28px 40px;
            display: flex;

            .date {
              width: 100%;
              display: flex;
              flex-direction: column;
              color: #fff;

              .day {
                font-size: 36px;
                font-weight: bold;
                color: #ffffff;
              }

              .year {
                font-size: 14px;
                margin-top: 5px;
              }
            }

            .text-content {
              margin-left: 27px;

              .text-title {
                color: #fff;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                padding-bottom: 15px;
              }

              p {
                padding-top: 15px;
                color: #fff;
              }
            }
          }
        }

        .right {
          margin-left: 70px;
          flex: 1;

          @keyframes pl {
            from {
            }
            to {
              padding-left: 20px;
              color: #0a3daa;
            }
          }

          .first {
            cursor: pointer;
            display: flex;
            justify-content: space-between;

            .date {
              // width: 100%;
              display: flex;
              flex-direction: column;
              color: #999999;

              .day {
                font-size: 36px;
                font-weight: bold;
              }

              .year {
                font-size: 14px;
                margin-top: 5px;
              }
            }

            .text-content {
              margin-bottom: 20px;
              width: 85%;

              .text-title {
                border-bottom: 1px solid #999999;
                padding-bottom: 15px;
              }

              p {
                padding-top: 15px;
                color: #999999;
              }
            }
          }

          .first:hover {
            animation-name: pl;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
          }
        }

        ul {
          li:hover {
            animation-name: pl;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
          }

          .text {
            display: flex;
            justify-content: space-between;
            padding: 18px 0;
            border-bottom: 1px solid #999999;

            p {
              cursor: pointer;
            }

            span {
              color: #999999;
              font-size: 14px;
            }
          }

          .text:hover {
            color: #0a3daa;
          }
        }
      }

      .btn {
        text-align: center;

        span {
          margin-top: 20px;
          font-size: 14px;
          padding: 10px 30px;
          // border-radius: 2em;
          border: 1px solid #0a3daa;
          // background-color: #0a3daa;
          color: #0a3daa;
          display: inline-block;
          transition: all 0.25s ease-out 0s;

          i {
            font-weight: 600;
          }
        }

        span:hover {
          background-color: #0a3daa;
          cursor: pointer;
          color: #fff;
        }
      }
    }

    .cooperation {
      margin-top: 80px;

      .title {
        font-size: 32px;
      }

      span {
        font-size: 14px;
        color: #999999;
      }

      .cooperation-img {
        text-align: center;
        width: 80%;
        margin: 0 auto;
        height: 420px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;
        align-items: center;

        li {
          cursor: pointer;
          padding: 10px 5px;

          img {
            width: 240px;
            height: 150px;
          }
        }

        li:hover {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
}
.home {
  width: 100%;
  position: relative;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

// .content {
//   width: 78%;
//   margin: 0 auto;

//   .iconNavContent {
//     display: flex;
//     // flex-wrap: wrap;
//     justify-content: space-between;
//     height: 200px;
//     // box-shadow: 0px 1px 2px #e4e4e4;

//     .icon {
//       margin-top: 40px;
//       text-align: center;
//       font-size: 50px;
//       color: #0a3daa;
//       i {
//         font-size: 50px;
//       }
//     }

//     li {
//       width: 100%;
//       list-style: none;
//       text-align: center;
//       // border-right: 1px solid #f8f8f8;
//       padding: 0 10px;
//       position: relative;

//       .title {
//         line-height: 80px;
//         font-weight: 700;
//       }

//       .text {
//         font-size: 14px;
//         color: #999999;
//       }

//       .left {
//         width: 0;
//         transition: all 0.3s linear;
//         background-color: #0a3daa;
//       }

//       .right {
//         width: 0;
//         transition: all 0.3s linear;
//         background-color: #0a3daa;
//       }
//     }

//     li:hover .left {
//       height: 100%;
//       background-color: #0a3daa;
//       position: absolute;
//       top: 0;
//       width: 50%;
//       z-index: -2;
//     }

//     li:hover .right {
//       height: 100%;
//       background-color: #0a3daa;
//       position: absolute;
//       top: 0;
//       right: 0;
//       width: 50%;
//       z-index: -2;
//     }

//     li:hover {
//       width: 100%;
//       list-style: none;
//       text-align: center;
//       border-right: 1px solid #f8f8f8;
//       padding: 0 10px;
//       color: #ffffff;
//       cursor: pointer;
//       z-index: 9999;

//       .icon {
//         color: #ffffff;
//       }

//       .title {
//         font-weight: 700;
//       }

//       .text {
//         font-size: 14px;
//         color: #ffffff;
//       }
//     }
//   }

//   .content-text {
//     margin-top: 80px;

//     .title {
//       font-size: 26px;
//     }

//     ul {
//       margin-top: 10px;
//       display: flex;
//       justify-content: space-between;

//       li {
//         display: flex;
//         flex-direction: column;
//         //justify-content: center;
//         list-style: none;
//         background-color: rgb(242, 242, 242);
//         width: 33%;
//         height: 350px;
//         padding: 60px 20px;
//         cursor: pointer;
//         position: relative;
//         z-index: 2;

//         .content-title {
//           //font-size: 18px;
//           //font-family: "FangSong";
//           margin: 3px 0;
//           //color: #4673c4;
//           font-weight: 600;
//           color: #000;
//         }

//         ol {
//           z-index: 2;
//           //font-family: "FangSong";
//           margin: 3px 10px;
//           -webkit-line-clamp: 2; //设置几行
//           display: -webkit-box; //设置为伸缩盒弹性盒子展示
//           overflow: hidden; //超出隐藏
//           text-overflow: ellipsis; //设置超出部分以省略号展示
//           -webkit-box-orient: vertical; //伸缩盒弹性盒子的排列方式
//           line-height: 1.5;
//           color: #999999;
//         }

//         img {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           visibility: hidden;
//         }

//         h4 {
//           z-index: 2;
//         }

//         span {
//           font-size: 14px;
//           color: #999999;
//           z-index: 2;
//         }

//         .text {
//           -webkit-line-clamp: 3; //设置几行
//           display: -webkit-box; //设置为伸缩盒弹性盒子展示
//           overflow: hidden; //超出隐藏
//           text-overflow: ellipsis; //设置超出部分以省略号展示
//           -webkit-box-orient: vertical; //伸缩盒弹性盒子的排列方式
//           line-height: 1.5;
//         }

//         .ti {
//           color: #999999;
//           text-indent: 2em;
//           //font-family: "FangSong";
//           z-index: 2;
//         }

//         .center {
//           margin: 40px 0;
//         }
//       }

//       li:nth-child(2) {
//         margin: 0 30px;
//       }
//     }

//     @keyframes zzc {
//       from {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: 2;
//       }
//       to {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: 2;
//         background: #0a3daa;
//         opacity: 0.4;
//       }
//     }
//     @keyframes showImg {
//       from {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         visibility: hidden;
//         transform: scale(0.9);
//       }
//       to {
//         visibility: visible;
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         transition: all 0.5s ease-out;
//       }
//     }

//     @keyframes bi {
//       from {
//         display: flex;
//         flex-direction: column;
//         //justify-content: center;
//         list-style: none;
//         background-color: rgb(242, 242, 242);
//         width: 33%;
//         height: 350px;
//         padding: 60px 20px;
//         cursor: pointer;
//       }
//       to {
//         display: flex;
//         flex-direction: column;
//         //justify-content: center;
//         list-style: none;
//         width: 33%;
//         height: 350px;
//         padding: 40px 20px;
//         cursor: pointer;
//         //background-image: url("../../assets/images/0335e0f16c10f5ad55bdcb78aa95e41.png");
//         //background-repeat: no-repeat;
//         //background-size: 100% 100%;
//         background: #0a3daa;
//         //color: #ffffff;
//       }
//     }

//     li:hover {
//       animation-name: bi;
//       animation-duration: 0.65s;
//       animation-fill-mode: forwards;
//       color: #ffffff;

//       .content-title {
//         color: #ffffff;
//       }

//       ol {
//         color: #ffffff;
//       }

//       .ti {
//         color: #ffffff;
//       }

//       h4 {
//         color: #ffffff;
//       }

//       span {
//         color: #ffffff;
//       }
//     }

//     li:hover img {
//       animation-name: showImg;
//       animation-duration: 0.65s;
//       animation-fill-mode: forwards;
//     }

//     li:hover .zzc {
//       animation-name: zzc;
//       animation-duration: 0.1s;
//       animation-fill-mode: forwards;
//     }

//     .btn {
//       text-align: center;

//       span {
//         margin-top: 20px;
//         font-size: 14px;
//         padding: 10px 30px;
//         border-radius: 2em;
//         border: 1px solid #0a3daa;
//         background-color: #0a3daa;
//         color: rgb(255, 255, 255);
//         display: inline-block;
//         transition: all 0.25s ease-out 0s;

//         i {
//           font-weight: 600;
//         }
//       }

//       span:hover {
//         background-color: #fff;
//         cursor: pointer;
//         color: #0a3daa;
//       }
//     }
//   }

//   .container {
//     margin-top: 80px;

//     h2 {
//       font-size: 42px;
//       line-height: 42px;
//       text-align: center;
//       padding-bottom: 15px;
//     }

//     .en {
//       color: #999999;
//       font-size: 24px;
//       line-height: 24px;
//       text-align: center;
//       padding-bottom: 40px;
//     }

//     .text {
//       margin: 10px 0;

//       p {
//         color: #999999;
//         line-height: 30px;
//       }
//     }

//     .containerList {
//       display: flex;
//       justify-content: space-around;
//       margin-top: 65px;

//       li {
//         list-style: none;
//         text-align: center;

//         .number {
//           font-size: 62px;
//           padding-right: 10px;
//           color: #0a3daa;

//           span {
//           }
//         }

//         .textBlod {
//           font-weight: bold;
//         }
//       }
//     }
//   }

//   .media-center {
//     margin-top: 80px;

//     .title-box {
//       display: flex;
//       justify-content: space-between;

//       .left {
//         p {
//           font-size: 22px;
//           font-weight: 200;
//         }

//         .underline {
//           width: 38px;
//           height: 2px;
//           background: #0a3daa;
//           margin-top: 6px;
//         }
//       }

//       .tabs {
//         display: flex;
//         align-items: center;
//         margin-right: 30px;

//         li {
//           cursor: pointer;
//           font-size: 13px;
//           margin: 0 5px;
//           padding: 6px 20px;
//         }

//         li:nth-child(1) {
//           background-color: #0a3daa;
//           color: #fff;
//         }

//         li:hover {
//           background-color: #0a3daa;
//           color: #fff;
//         }
//       }
//     }

//     .media-box {
//       display: flex;
//       // justify-content: space-between;
//       margin-top: 50px;

//       @keyframes you {
//         from {
//           cursor: pointer;
//           width: 40%;
//         }
//         to {
//           cursor: pointer;
//           width: 40%;
//           margin-left: 20px;
//         }
//       }
//       @keyframes zzcTwo {
//         from {
//           position: absolute;
//           top: 0;
//           width: 100%;
//           height: 100%;
//           opacity: 0.4;
//           background-color: #ffffff;
//         }
//         to {
//           position: absolute;
//           top: 0;
//           width: 100%;
//           height: 100%;
//           opacity: 0;
//         }
//       }

//       .left:hover {
//         animation-name: you;
//         animation-duration: 0.5s;
//         animation-fill-mode: forwards;
//       }

//       .left:hover .zzc {
//         animation-name: zzcTwo;
//         animation-duration: 0.5s;
//         animation-fill-mode: forwards;
//       }

//       .left {
//         cursor: pointer;
//         width: 40%;

//         .img {
//           width: 100%;
//           height: 320px;
//           position: relative;

//           img {
//             width: 100%;
//             height: 100%;
//           }

//           .zzc {
//             position: absolute;
//             top: 0;
//             width: 100%;
//             height: 100%;
//             opacity: 0.3;
//             background-color: #ffffff;
//           }
//         }

//         .text {
//           background: #0a3daa;
//           padding: 28px 20px 28px 40px;
//           display: flex;

//           .date {
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//             color: #fff;

//             .day {
//               font-size: 36px;
//               font-weight: bold;
//               color: #ffffff;
//             }

//             .year {
//               font-size: 14px;
//               margin-top: 5px;
//             }
//           }

//           .text-content {
//             margin-left: 27px;

//             .text-title {
//               color: #fff;
//               border-bottom: 1px solid rgba(255, 255, 255, 0.2);
//               padding-bottom: 15px;
//             }

//             p {
//               padding-top: 15px;
//               color: #fff;
//             }
//           }
//         }
//       }

//       .right {
//         margin-left: 70px;
//         flex: 1;

//         @keyframes pl {
//           from {
//           }
//           to {
//             padding-left: 20px;
//             color: #0a3daa;
//           }
//         }

//         .first {
//           cursor: pointer;
//           display: flex;
//           justify-content: space-between;

//           .date {
//             // width: 100%;
//             display: flex;
//             flex-direction: column;
//             color: #999999;

//             .day {
//               font-size: 36px;
//               font-weight: bold;
//             }

//             .year {
//               font-size: 14px;
//               margin-top: 5px;
//             }
//           }

//           .text-content {
//             margin-bottom: 20px;
//             width: 85%;

//             .text-title {
//               border-bottom: 1px solid #999999;
//               padding-bottom: 15px;
//             }

//             p {
//               padding-top: 15px;
//               color: #999999;
//             }
//           }
//         }

//         .first:hover {
//           animation-name: pl;
//           animation-duration: 0.5s;
//           animation-fill-mode: forwards;
//         }
//       }

//       ul {
//         li:hover {
//           animation-name: pl;
//           animation-duration: 0.5s;
//           animation-fill-mode: forwards;
//         }

//         .text {
//           display: flex;
//           justify-content: space-between;
//           padding: 18px 0;
//           border-bottom: 1px solid #999999;

//           p {
//             cursor: pointer;
//           }

//           span {
//             color: #999999;
//             font-size: 14px;
//           }
//         }

//         .text:hover {
//           color: #0a3daa;
//         }
//       }
//     }

//     .btn {
//       text-align: center;

//       span {
//         margin-top: 20px;
//         font-size: 14px;
//         padding: 10px 30px;
//         // border-radius: 2em;
//         border: 1px solid #0a3daa;
//         // background-color: #0a3daa;
//         color: #0a3daa;
//         display: inline-block;
//         transition: all 0.25s ease-out 0s;

//         i {
//           font-weight: 600;
//         }
//       }

//       span:hover {
//         background-color: #0a3daa;
//         cursor: pointer;
//         color: #fff;
//       }
//     }
//   }

//   .cooperation {
//     margin-top: 80px;

//     .title {
//       font-size: 32px;
//     }

//     span {
//       font-size: 14px;
//       color: #999999;
//     }

//     .cooperation-img {
//       text-align: center;
//       width: 80%;
//       margin: 0 auto;
//       height: 420px;
//       display: flex;
//       flex-wrap: wrap;
//       margin-top: 50px;
//       align-items: center;

//       li {
//         cursor: pointer;
//         padding: 10px 5px;

//         img {
//           width: 240px;
//           height: 150px;
//         }
//       }

//       li:hover {
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
//       }
//     }
//   }
// }

.Affix {
  z-index: 9999;
  position: fixed;
  width: 55px;
  right: 0;
  top: 50%;
  transform: translate(-20%, -80%);

  ul {
    color: #fff;

    li {
      cursor: pointer;
      background-color: #0a3daa;
      height: 55px;
      text-align: center;
      line-height: 55px;
      margin: 2px 0;
    }
  }
}
</style>
