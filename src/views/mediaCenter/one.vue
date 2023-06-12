<template>
  <div class="one">
    <!-- 头部 -->
    <Header></Header>
    <!-- 大图 -->
    <div class="banner">
      <img src="@/assets/images/媒体中心大图.jpg" alt="" />
      <div class="text">分享舜云最新动态</div>
    </div>
    <!-- 内容 -->
    <div class="container">
      <div class="content-left" v-if="this.val == 1">
        <div class="top">
          <p class="title">山东省某单位信息化设备采购项目一</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <div class="announcement">招标公告</div>
          一、采购人:山东舜云信息科技有限公司 <br />
          <div class="ti">地址:中国(山东)自由贸易试验区济南片区舜华路2000号舜泰广场6号楼</div>
          <div class="ti">联系人:齐女士&emsp;&emsp;&emsp; 联系方式: 18595273931</div>

          二、采购项目名称:山东省某单位信息化设备采购项目一 <br />
          <div class="ti">采购项目编号: Sy20230602-1-1</div>
          <div class="ti">采购项目货物名称:网络安全产品</div>
          <div class="ti">投标人资格要求:</div>
          <div class="ti">1、符合《中华人民共和国政府采购法》第22条规定;</div>
          <div class="ti">2、在中国境内注册，具有独立承担民事责任的能力，并具有有效的营业执照，且具有相应的供货和服务能力的生产商或经销商:</div>
          <div class="ti">3、本项目不接受联合体投标。</div>
          三、获取报名资格 <br />
          <div class="ti">
            凡有意参加投标者，请于2023 年6月2日至 2023 年6月6日，每日上午 9:00 时至12:00，下午 14:00 时至
            17:00分(北京时间，法定节假日除外，下同)，持下列电子资料获取报名资格:法定代表人身份证或企业法人授权委托书及被授权代表身份证复印件企业法人营业执照副本加盖投标人公章的复印件。
          </div>
          <div class="ti">请将上列报名资格文件发送到邮箱qich@shunyunxinxi.com。</div>
          四、招标文件售价<br />
          <div class="ti">招标文件售价:100元/份，售后不退。2023年6月6日17:00前汇至招标单位财务指定账户(备注:SY20230602-1-1 服务费)，以下为账号信息:</div>
          <div class="ti">名称:山东舜云信息科技有限公司</div>
          <div class="ti">开户行:中国建设银行股份有限公司济南山钢支行</div>
          <div class="ti">账号: 37050161667600000027</div>
          五、开标时间及方式 <br />
          <div class="ti">开标时间:2023-06-09 &emsp; 09:30</div>
          <div class="ti">开标方式:详见招标文件</div>
          六、采购项目联系方式 <br />

          <div class="ti">联系人:齐女士 &emsp;&emsp;&emsp; 联系方式:18595273931</div>
        </div>
        <div class="btn">
          <div class="btn-left" @click="goTwo">上一篇:山东省某单位信息化设备采购项目二</div>
          <div class="btn-right">下一篇:没有了</div>
        </div>
      </div>
      <div class="content-left" v-if="this.val == 2">
        <div class="top">
          <p class="title">山东省某单位信息化设备采购项目二</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <div class="announcement">招标公告</div>
          一、采购人:山东舜云信息科技有限公司 <br />
          <div class="ti">地址:中国(山东)自由贸易试验区济南片区舜华路2000号舜泰广场6号楼</div>
          <div class="ti">联系人:齐女士&emsp;&emsp;&emsp; 联系方式: 18595273931</div>

          二、采购项目名称:山东省某单位信息化设备采购项目二 <br />
          <div class="ti">采购项目编号: Sy20230602-1-2</div>
          <div class="ti">采购项目货物名称:网络安全产品</div>
          <div class="ti">投标人资格要求:</div>
          <div class="ti">1、符合《中华人民共和国政府采购法》第22条规定;</div>
          <div class="ti">2、在中国境内注册，具有独立承担民事责任的能力，并具有有效的营业执照，且具有相应的供货和服务能力的生产商或经销商:</div>
          <div class="ti">3、本项目不接受联合体投标。</div>
          三、获取报名资格 <br />
          <div class="ti">
            凡有意参加投标者，请于2023 年6月5日至 2023 年6月9日，每日上午 9:00 时至12:00，下午 14:00 时至
            17:00分(北京时间，法定节假日除外，下同)，持下列电子资料获取报名资格:法定代表人身份证或企业法人授权委托书及被授权代表身份证复印件企业法人营业执照副本加盖投标人公章的复印件。
          </div>
          <div class="ti">请将上列报名资格文件发送到邮箱qich@shunyunxinxi.com。</div>
          四、招标文件售价<br />
          <div class="ti">招标文件售价:100元/份，售后不退。2023年6月9日17:00前汇至招标单位财务指定账户(备注:SY20230602-1-2 服务费)，以下为账号信息:</div>
          <div class="ti">名称:山东舜云信息科技有限公司</div>
          <div class="ti">开户行:中国建设银行股份有限公司济南山钢支行</div>
          <div class="ti">账号: 37050161667600000027</div>
          五、开标时间及方式 <br />
          <div class="ti">开标时间:2023-06-12 &emsp; 09:30</div>
          <div class="ti">开标方式:详见招标文件</div>
          六、采购项目联系方式 <br />

          <div class="ti">联系人:齐女士 &emsp;&emsp;&emsp; 联系方式:18595273931</div>
        </div>
        <div class="btn">
          <div class="btn-left" @click="goThree">上一篇:山东省某单位信息化设备采购项目三</div>
          <div class="btn-right" @click="goOne">下一篇:山东省某单位信息化设备采购项目一</div>
        </div>
      </div>
      <div class="content-left" v-if="this.val == 3">
        <div class="top">
          <p class="title">山东省某单位信息化设备采购项目三</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <div class="announcement">招标公告</div>
          一、采购人:山东舜云信息科技有限公司 <br />
          <div class="ti">地址:中国(山东)自由贸易试验区济南片区舜华路2000号舜泰广场6号楼</div>
          <div class="ti">联系人:齐女士&emsp;&emsp;&emsp; 联系方式: 18595273931</div>

          二、采购项目名称:山东省某单位信息化设备采购项目三<br />
          <div class="ti">采购项目编号: Sy20230602-1-3</div>
          <div class="ti">采购项目货物名称:网络安全产品</div>
          <div class="ti">投标人资格要求:</div>
          <div class="ti">1、符合《中华人民共和国政府采购法》第22条规定;</div>
          <div class="ti">2、在中国境内注册，具有独立承担民事责任的能力，并具有有效的营业执照，且具有相应的供货和服务能力的生产商或经销商:</div>
          <div class="ti">3、本项目不接受联合体投标。</div>
          三、获取报名资格 <br />
          <div class="ti">
            凡有意参加投标者，请于2023 年6月5日至 2023 年6月9日，每日上午 9:00 时至12:00，下午 14:00 时至
            17:00分(北京时间，法定节假日除外，下同)，持下列电子资料获取报名资格:法定代表人身份证或企业法人授权委托书及被授权代表身份证复印件企业法人营业执照副本加盖投标人公章的复印件。
          </div>
          <div class="ti">请将上列报名资格文件发送到邮箱qich@shunyunxinxi.com。</div>
          四、招标文件售价<br />
          <div class="ti">招标文件售价:100元/份，售后不退。2023年6月9日17:00前汇至招标单位财务指定账户(备注:SY20230602-1-3服务费)，以下为账号信息:</div>
          <div class="ti">名称:山东舜云信息科技有限公司</div>
          <div class="ti">开户行:中国建设银行股份有限公司济南山钢支行</div>
          <div class="ti">账号: 37050161667600000027</div>
          五、开标时间及方式 <br />
          <div class="ti">开标时间:2023-06-13 &emsp; 09:30</div>
          <div class="ti">开标方式:详见招标文件</div>
          六、采购项目联系方式 <br />

          <div class="ti">联系人:齐女士 &emsp;&emsp;&emsp; 联系方式:18595273931</div>
        </div>
        <div class="btn">
          <div class="btn-left" @click="goFour">上一篇:山东省某单位信息化设备采购项目四</div>
          <div class="btn-right" @click="goTwo">下一篇:山东省某单位信息化设备采购项目二</div>
        </div>
      </div>
      <div class="content-left" v-if="this.val == 4">
        <div class="top">
          <p class="title">山东省某单位信息化设备采购项目四</p>
          <!--          <p class="date">2020-11-19 15:03:20 <i class="el-icon-eye"></i> 317</p>-->
        </div>
        <div class="text">
          <div class="announcement">招标公告</div>
          一、采购人:山东舜云信息科技有限公司 <br />
          <div class="ti">地址:中国(山东)自由贸易试验区济南片区舜华路2000号舜泰广场6号楼</div>
          <div class="ti">联系人:齐女士&emsp;&emsp;&emsp; 联系方式: 18595273931</div>

          二、采购项目名称:山东省某单位信息化设备采购项目四<br />
          <div class="ti">采购项目编号: Sy20230602-1-4</div>
          <div class="ti">采购项目货物名称:网络安全产品</div>
          <div class="ti">投标人资格要求:</div>
          <div class="ti">1、符合《中华人民共和国政府采购法》第22条规定;</div>
          <div class="ti">2、在中国境内注册，具有独立承担民事责任的能力，并具有有效的营业执照，且具有相应的供货和服务能力的生产商或经销商:</div>
          <div class="ti">3、本项目不接受联合体投标。</div>
          三、获取报名资格 <br />
          <div class="ti">
            凡有意参加投标者，请于2023 年6月7日至 2023 年6月9日，每日上午 9:00 时至12:00，下午 14:00 时至
            17:00分(北京时间，法定节假日除外，下同)，持下列电子资料获取报名资格:法定代表人身份证或企业法人授权委托书及被授权代表身份证复印件企业法人营业执照副本加盖投标人公章的复印件。
          </div>
          <div class="ti">请将上列报名资格文件发送到邮箱qich@shunyunxinxi.com。</div>
          四、招标文件售价<br />
          <div class="ti">招标文件售价:100元/份，售后不退。2023年6月9日17:00前汇至招标单位财务指定账户(备注:SY20230602-1-1 服务费)，以下为账号信息:</div>
          <div class="ti">名称:山东舜云信息科技有限公司</div>
          <div class="ti">开户行:中国建设银行股份有限公司济南山钢支行</div>
          <div class="ti">账号: 37050161667600000027</div>
          五、开标时间及方式 <br />
          <div class="ti">开标时间:2023-06-14 &emsp; 09:30</div>
          <div class="ti">开标方式:详见招标文件</div>
          六、采购项目联系方式 <br />

          <div class="ti">联系人:齐女士 &emsp;&emsp;&emsp; 联系方式:18595273931</div>
        </div>
        <div class="btn">
          <div class="btn-left">上一篇:没有了</div>
          <div class="btn-right" @click="goThree">下一篇:山东省某单位信息化设备采购项目三</div>
        </div>
      </div>
      <div class="content-right">
        <div class="center">
          <div class="title" @click="goMediaCenter">媒体中心</div>
          <div class="tab" @click="goFrontier">技术前沿</div>
          <div class="tab" @click="goConsultation">行业资讯</div>
          <div class="tab active" @click="goReport">招标采购</div>
        </div>
        <div class="recommend">
          <div class="title">相关推荐</div>
          <div class="tab" @click="goOne">山东省某单位信息化设备采购项目一</div>
          <div class="tab" @click="goTwo">山东省某单位信息化设备采购项目二</div>
          <div class="tab" @click="goThree">山东省某单位信息化设备采购项目三</div>
          <div class="tab" @click="goFour">山东省某单位信息化设备采购项目四</div>
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
//引入底部
import Footer from '@/layout/footer'
//引入侧边导航栏
import Affix from '@/layout/affix'
export default {
  data() {
    return {
      val: '',
    }
  },
  methods: {
    goMediaCenter() {
      this.$router.push({ path: '/mediaCenter' })
    },
    goFrontier() {
      this.$router.push({ path: '/frontier' })
    },
    goConsultation() {
      this.$router.push({ path: '/consultation' })
    },
    goReport() {
      this.$router.push({ path: '/report' })
    },
    goOne() {
      this.$router.push({ path: '/one', query: { value: 1 } })
      location.reload()
    },
    goTwo() {
      this.$router.push({ path: '/one', query: { value: 2 } })
      location.reload()
    },
    goThree() {
      this.$router.push({ path: '/one', query: { value: 3 } })
      location.reload()
    },
    goFour() {
      this.$router.push({ path: '/one', query: { value: 4 } })
      location.reload()
    },
  },
  components: {
    Header,
    Footer,
    Affix,
  },
  created() {
    this.val = this.$route.query.value
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
    margin: 0 auto;
    // display: flex;
    justify-content: space-between;

    .content-left {
      width: 100%;

      .top {
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid #999999;

        .title {
          font-size: 24px;
        }

        .date {
          font-size: 14px;
          color: #a3afb7;
          margin-top: 10px;
        }
      }

      .text {
        padding: 10px;
        border-bottom: 1px solid #999999;

        .text-title {
          font-weight: 600;
          font-size: 18px;
        }

        p {
          margin: 10px 0;
        }

        .ti {
          white-space: normal;
          text-indent: 2em;
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
          cursor: pointer;
        }

        .tab {
          font-size: 14px;
          padding: 20px;
          border-top: 1px solid #999999;
          cursor: pointer;
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
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid #999999;

        .title {
          font-size: 24px;
        }

        .date {
          font-size: 14px;
          color: #a3afb7;
          margin-top: 10px;
        }
      }

      .text {
        padding: 10px;
        border-bottom: 1px solid #999999;

        .text-title {
          font-weight: 600;
          font-size: 18px;
        }

        p {
          margin: 10px 0;
        }

        .ti {
          white-space: normal;
          text-indent: 2em;
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
          cursor: pointer;
        }

        .tab {
          font-size: 14px;
          padding: 20px;
          border-top: 1px solid #999999;
          cursor: pointer;
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
//       text-align: center;
//       padding: 30px 0;
//       border-bottom: 1px solid #999999;

//       .title {
//         font-size: 24px;
//       }

//       .date {
//         font-size: 14px;
//         color: #a3afb7;
//         margin-top: 10px;
//       }
//     }

//     .text {
//       padding: 10px;
//       border-bottom: 1px solid #999999;
//       line-height: 2;
//       .announcement {
//         font-size: 32px;
//         text-align: center;
//         letter-spacing: 0.2em;
//       }

//       .text-title {
//         font-weight: 600;
//         font-size: 18px;
//       }

//       p {
//         margin: 10px 0;
//       }

//       .ti {
//         white-space: normal;
//         text-indent: 2em;
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
//         cursor: pointer;
//       }

//       .tab {
//         font-size: 14px;
//         padding: 20px;
//         border-top: 1px solid #999999;
//         cursor: pointer;
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
