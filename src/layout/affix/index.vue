<template>
  <div class="affix">
    <div class="boxList">
      <div class="box" v-for="(item, index) in fixedData" :key="index">
        <div class="content" @click="changeAffix(item)" @mouseleave="leaveAffix">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ item.content }}</span>
          <div v-if="isPhone" class="service-phone">
            <i class="el-icon-phone"></i>
            <h4 class="title">服务热线</h4>
            <p class="phone">0531-66956750</p>
          </div>
          <div v-if="isCode" class="affix-code">
            <img src="@/assets/images/code.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      fixedData: [
        {
          content: '售前客服',
          icon: 'icon-kefu',
          url: '/contactInformation',
        },
        {
          content: '售后支持',
          icon: 'icon-shouhouwuyou',
          url: '/contactInformation',
        },
        {
          content: '服务热线',
          icon: 'icon-kefurexianxianxing',
          phone: true,
        },
        {
          content: '微信客服',
          icon: 'icon-weixin',
          code: true,
        },
      ],
      isCode: false,
      isPhone: false,
    }
  },
  methods: {
    //点击侧边固定按钮
    changeAffix(item) {
      if (item.code) {
        this.isCode = true
      }
      if (item.phone) {
        this.isPhone = true
      }
      this.$router.push(item.url)
    },
    //移开按钮隐藏二维码
    leaveAffix() {
      this.isCode = false
      this.isPhone = false
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.affix {
  position: fixed;
  inset: 300px 10px auto auto;
  background-color: transparent;
  z-index: 1699;

  .boxList {
    .box {
      width: 54px;
      height: 54px;
      position: relative;
      margin-bottom: 1px;

      .content {
        background-color: #0a3daa;
        position: absolute;
        width: 54px;
        height: 54px;
        top: 0;
        right: 0;
        transition: all 0.3s;
        opacity: 0.8;
        color: #fff;
        font-size: 14px;
        line-height: 54px;
        //overflow: hidden;
        text-align: center;
        cursor: pointer;

        .service-phone {
          display: none;
          position: absolute;
          top: 54px;
          //left: -54px;
          width: 130px;
          height: 150px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
          background-color: #ffffff;
          transition: all 0.3s;
          z-index: 2;

          i {
            color: #0a3daa;
            font-size: 24px;
          }

          .title {
            color: #000;
            font-weight: 600;
          }

          .phone {
            color: #999999;
          }
        }

        i {
          font-size: 20px;
          width: 54px;
          margin-right: 5px;
        }

        span {
          display: none;
        }

        .affix-code {
          display: none;

          img {
            width: 130px;
            height: 130px;
          }
        }
      }

      .content:hover {
        width: 130px;
        opacity: 1;

        span {
          display: inline-block;
        }

        .affix-code {
          display: block;
        }

        .service-phone {
          display: block;
        }
      }
    }
  }
}
</style>
