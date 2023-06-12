<template>
  <div class="banner">
    <el-carousel @change="changeBanner" v-if="isBanner" loop arrow="never" autoplay trigger="click">
      <el-carousel-item>
        <img v-if="isShowOne" src="@/assets/images/banner/1.jpg" />
        <!-- <h3 class="small">{{ item }}</h3> -->
        <div class="img-text">
          <div class="title">舜云科技边缘盒子</div>
          <div class="content">强劲算力，按需加载算法，快速部署，支持8/16路视频分析</div>
          <div class="content">满足安全生产等场景的应用需求</div>
        </div>
        <div v-if="isShowOne" class="one-btn">
          <button @click="goContactInformation">申请试用</button>
          <button @click="goProjectConsultation">项目咨询</button>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img v-show="isShow" class="imgTwo" src="@/assets/images/banner/2.png" alt="" />
        <!-- <h3 class="small">{{ item }}</h3> -->
        <div v-show="isShow" class="solution" @click="goSolution">
          <div class="text">
            <span>舜云AI可视化预警管理系统V1.0</span> <br />
            正式发布
          </div>
          <div class="btn" @click="goContactInformation">申请试用</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { getBanner } from '@/api'

export default {
  data() {
    return {
      bannerList: [
        {
          url: 'img/banner1.c2a500d1.jpg',
          isShow: true,
        },
        {
          url: 'img/banner2.ae9f7b22.jpg',
        },
      ], //轮播图列表
      isShow: false,
      isShowOne: true,
      // isShowTwo: true
    }
  },
  methods: {
    // 获取轮播图
    async getBanner() {
      const result = await getBanner()
      // this.bannerList = result.data.data
    },
    //  点击解决方案按钮进行跳转
    goSolution() {
      this.$router.push({ path: '/solution' })
    },
    changeBanner(now, old) {
      this.isShow = !this.isShow
      this.isShowOne = !this.isShowOne
      // this.isShowTwo = !this.isShowTwo
    },
    goContactInformation() {
      this.$router.push('/contactInformation')
    },
    goProjectConsultation() {
      this.$router.push('/projectConsultation')
    },
  },
  mounted() {
    this.getBanner()
    // console.log(this.height)
  },
  props: {
    isBanner: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 769px) {
  .banner {
    text-align: center;
    width: 100%;
    margin-top: 60px;
    position: relative;

    @keyframes btn {
      from {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      to {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    @keyframes btn1 {
      from {
        position: absolute;
        top: 80%;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
      }
      to {
        position: absolute;
        top: 60%;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
      }
    }

    @keyframes showImg {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transition: all 0.5s ease-out;
      }
    }
    @keyframes tx {
      from {
        position: absolute;
        top: 50%;
        left: 20%;
        z-index: 2;
        transform: translate(-50%, -50%);
        color: #ffffff;
        line-height: 2;
      }
      to {
        position: absolute;
        top: 30%;
        left: 20%;
        z-index: 2;
        transform: translate(-50%, -50%);
        color: #ffffff;
        line-height: 2;
      }
    }
    .text {
      z-index: 2;
    }
    .img-text {
      display: none;
      animation-name: tx;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      position: absolute;
      top: 30%;
      left: 20%;
      z-index: 2;
      transform: translate(-50%, -50%);
      color: #ffffff;
      line-height: 2;
      .title {
        letter-spacing: 0.2em;
        font-size: 42px;
        font-weight: 600;
      }
    }
    .one-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      animation-name: btn1;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      button {
        // width: 128px;
        // height: 42px;
        // line-height: 42px;
        padding: 10px 15px;
        background-color: #0a3daa;
        border: none;
        color: #ffffff;
        margin: 10px 20px;
        cursor: pointer;
      }
      button:hover {
        transition: all 0.3s linear;
        background-color: rgb(255, 255, 255);
        color: #0a3daa;
      }
    }

    @keyframes tx1 {
      from {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 20%;
        transform: translate(-50%, -50%);
        animation-name: btn;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
      }
      to {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 20%;
        transform: translate(-50%, -50%);
        animation-name: btn;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
      }
    }
    .solution {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%);
      animation-name: btn;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      .text {
        display: none;
        margin-top: 100px;
        // margin: 20px 0;
        margin-bottom: 40%;
        color: #ffffff;
        font-size: 42px;
        font-weight: 600;
        // letter-spacing: 0.2em;
        line-height: 2;
        span {
          font-size: 36px;
        }
      }
      .btn {
        // width: 128px;
        // height: 42px;
        // line-height: 42px;
        padding: 10px 15px;
        background: #0a3daa;
        border-color: #0a3daa;
        color: rgb(255, 255, 255);
        font-size: 0.4267rem;
        cursor: pointer;
      }
    }

    .solution .btn:hover {
      transition: all 0.3s linear;
      background-color: rgb(255, 255, 255);
      color: #0a3daa;
    }

    .bigImg {
      width: 100%;
      height: 500px;
    }
    video {
      width: 100%;
      height: 100%;
    }

    img {
      animation-name: showImg;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      width: 100%;
      height: 100%;
    }

    .img {
      width: 100%;
      height: 100%;
      background-image: url('../../assets/images/banner3.jpg');
      display: flex;
      align-items: center;

      .text {
        width: 66%;
        margin: 0 auto;
        color: #ffffff;

        p {
          font-size: 32px;
          margin: 15px 0;
        }
      }
    }
  }

  ::v-deep .el-carousel__container {
    height: 500px;
    cursor: pointer;
  }
  .el-carousel__item .imgTwo {
    position: absolute;
    top: 80px;
    right: 100px;
    width: 60%;
    height: 80%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #000000;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #000000;
  }
}

@media screen and (min-width: 770px) {
  .banner {
    text-align: center;
    width: 100%;
    margin-top: 60px;
    position: relative;

    @keyframes btn {
      from {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 70%;
        left: 0%;
        transform: translate(10%, -50%);
      }
      to {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 40%;
        left: 0%;
        transform: translate(10%, -50%);
      }
    }
    @keyframes btn1 {
      from {
        position: absolute;
        top: 100%;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
      }
      to {
        position: absolute;
        top: 80%;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
      }
    }

    @keyframes showImg {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transition: all 0.5s ease-out;
      }
    }
    @keyframes tx {
      from {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 70%;
        left: 5%;
        transform: translate(10%, -50%);
        // display: flex;
        // flex-direction: column;
        // position: absolute;
        // top: 50%;
        // left: 20%;
        // z-index: 2;
        // transform: translate(-50%, -50%);
        // color: #ffffff;
        // line-height: 2;
      }
      to {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 40%;
        left: 5%;
        transform: translate(10%, -50%);
        // display: flex;
        // flex-direction: column;
        // position: absolute;
        // top: 30%;
        // left: 20%;
        // z-index: 2;
        // transform: translate(-50%, -50%);
        // color: #ffffff;
        // line-height: 2;
      }
    }
    .text {
      z-index: 2;
    }
    .img-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 5%;
      transform: translate(-50%, -50%);
      animation-name: tx;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      color: #ffffff;
      line-height: 2;

      // display: flex;
      // flex-direction: column;
      // animation-name: tx;
      // animation-duration: 3s;
      // animation-fill-mode: forwards;
      // position: absolute;
      // top: 30%;
      // left: 20%;
      // z-index: 2;
      // transform: translate(-50%, -50%);
      // color: #ffffff;
      // line-height: 2;
      .title {
        letter-spacing: 0.2em;
        font-size: 42px;
        font-weight: 600;
      }
    }
    .one-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      animation-name: btn1;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      button {
        width: 128px;
        height: 42px;
        line-height: 42px;
        background-color: #0a3daa;
        border: none;
        color: #ffffff;
        margin: 0 20px;
        cursor: pointer;
      }
      button:hover {
        transition: all 0.3s linear;
        background-color: rgb(255, 255, 255);
        color: #0a3daa;
      }
    }

    @keyframes tx1 {
      from {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 20%;
        transform: translate(-50%, -50%);
        animation-name: btn;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
      }
      to {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 20%;
        transform: translate(-50%, -50%);
        animation-name: btn;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
      }
    }
    .solution {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%);
      animation-name: btn;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      .text {
        margin-top: 100px;
        // margin: 20px 0;
        margin-bottom: 40%;
        color: #ffffff;
        font-size: 42px;
        font-weight: 600;
        // letter-spacing: 0.2em;
        line-height: 2;
        span {
          font-size: 36px;
        }
      }
      .btn {
        width: 128px;
        height: 42px;
        line-height: 42px;
        background: #0a3daa;
        border-color: #0a3daa;
        color: rgb(255, 255, 255);
        font-size: 16px;
        cursor: pointer;
      }
    }

    .solution .btn:hover {
      transition: all 0.3s linear;
      background-color: rgb(255, 255, 255);
      color: #0a3daa;
    }

    .bigImg {
      width: 100%;
      height: 500px;
    }
    video {
      width: 100%;
      height: 100%;
    }

    img {
      animation-name: showImg;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      width: 100%;
      height: 100%;
    }

    .img {
      width: 100%;
      height: 100%;
      background-image: url('../../assets/images/banner3.jpg');
      display: flex;
      align-items: center;

      .text {
        width: 66%;
        margin: 0 auto;
        color: #ffffff;

        p {
          font-size: 32px;
          margin: 15px 0;
        }
      }
    }
  }

  ::v-deep .el-carousel__container {
    height: 740px;
    cursor: pointer;
  }
  .el-carousel__item .imgTwo {
    position: absolute;
    top: 80px;
    right: 100px;
    width: 60%;
    height: 80%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #000000;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #000000;
  }
}
// .banner {
//   text-align: center;
//   width: 100%;
//   margin-top: 60px;
//   position: relative;

//   @keyframes btn {
//     from {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       text-align: center;
//       position: absolute;
//       z-index: 2;
//       top: 70%;
//       left: 0%;
//       transform: translate(10%, -50%);
//     }
//     to {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       text-align: center;
//       position: absolute;
//       z-index: 2;
//       top: 40%;
//       left: 0%;
//       transform: translate(10%, -50%);
//     }
//   }
//   @keyframes btn1 {
//     from {
//       position: absolute;
//       top: 100%;
//       left: 50%;
//       z-index: 2;
//       transform: translate(-50%, -50%);
//     }
//     to {
//       position: absolute;
//       top: 80%;
//       left: 50%;
//       z-index: 2;
//       transform: translate(-50%, -50%);
//     }
//   }

//   @keyframes showImg {
//     from {
//       opacity: 0;
//       transform: scale(0.9);
//     }
//     to {
//       opacity: 1;
//       transition: all 0.5s ease-out;
//     }
//   }
//   @keyframes tx {
//     from {
//       position: absolute;
//       top: 50%;
//       left: 20%;
//       z-index: 2;
//       transform: translate(-50%, -50%);
//       color: #ffffff;
//       line-height: 2;
//     }
//     to {
//       position: absolute;
//       top: 30%;
//       left: 20%;
//       z-index: 2;
//       transform: translate(-50%, -50%);
//       color: #ffffff;
//       line-height: 2;
//     }
//   }
//   .text {
//     z-index: 2;
//   }
//   .img-text {
//     animation-name: tx;
//     animation-duration: 3s;
//     animation-fill-mode: forwards;
//     position: absolute;
//     top: 30%;
//     left: 20%;
//     z-index: 2;
//     transform: translate(-50%, -50%);
//     color: #ffffff;
//     line-height: 2;
//     .title {
//       letter-spacing: 0.2em;
//       font-size: 42px;
//       font-weight: 600;
//     }
//   }
//   .one-btn {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     z-index: 2;
//     transform: translate(-50%, -50%);
//     animation-name: btn1;
//     animation-duration: 3s;
//     animation-fill-mode: forwards;
//     button {
//       width: 128px;
//       height: 42px;
//       line-height: 42px;
//       background-color: #0a3daa;
//       border: none;
//       color: #ffffff;
//       margin: 0 20px;
//       cursor: pointer;
//     }
//     button:hover {
//       transition: all 0.3s linear;
//       background-color: rgb(255, 255, 255);
//       color: #0a3daa;
//     }
//   }

//   @keyframes tx1 {
//     from {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       text-align: center;
//       position: absolute;
//       z-index: 2;
//       top: 50%;
//       left: 20%;
//       transform: translate(-50%, -50%);
//       animation-name: btn;
//       animation-duration: 0.8s;
//       animation-fill-mode: forwards;
//     }
//     to {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       text-align: center;
//       position: absolute;
//       z-index: 2;
//       top: 50%;
//       left: 20%;
//       transform: translate(-50%, -50%);
//       animation-name: btn;
//       animation-duration: 0.8s;
//       animation-fill-mode: forwards;
//     }
//   }
//   .solution {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     position: absolute;
//     z-index: 2;
//     top: 50%;
//     left: 20%;
//     transform: translate(-50%, -50%);
//     animation-name: btn;
//     animation-duration: 3s;
//     animation-fill-mode: forwards;
//     .text {
//       margin-top: 100px;
//       // margin: 20px 0;
//       margin-bottom: 40%;
//       color: #ffffff;
//       font-size: 42px;
//       font-weight: 600;
//       // letter-spacing: 0.2em;
//       line-height: 2;
//       span {
//         font-size: 36px;
//       }
//     }
//     .btn {
//       width: 128px;
//       height: 42px;
//       line-height: 42px;
//       background: #0a3daa;
//       border-color: #0a3daa;
//       color: rgb(255, 255, 255);
//       font-size: 16px;
//       cursor: pointer;
//     }
//   }

//   .solution .btn:hover {
//     transition: all 0.3s linear;
//     background-color: rgb(255, 255, 255);
//     color: #0a3daa;
//   }

//   .bigImg {
//     width: 100%;
//     height: 500px;
//   }
//   video {
//     width: 100%;
//     height: 100%;
//   }

//   img {
//     animation-name: showImg;
//     animation-duration: 3s;
//     animation-fill-mode: forwards;
//     width: 100%;
//     height: 100%;
//   }

//   .img {
//     width: 100%;
//     height: 100%;
//     background-image: url('../../assets/images/banner3.jpg');
//     display: flex;
//     align-items: center;

//     .text {
//       width: 66%;
//       margin: 0 auto;
//       color: #ffffff;

//       p {
//         font-size: 32px;
//         margin: 15px 0;
//       }
//     }
//   }
// }

// ::v-deep .el-carousel__container {
//   height: 740px;
//   cursor: pointer;
// }
// .el-carousel__item .imgTwo {
//   position: absolute;
//   top: 80px;
//   right: 100px;
//   width: 60%;
//   height: 80%;
// }

// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 14px;
//   opacity: 0.75;
//   line-height: 150px;
//   margin: 0;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #000000;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #000000;
// }
</style>
