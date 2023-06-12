<template>
  <div class="login">
    <!-- 头部 -->
    <Header></Header>
    <!--    大图-->
    <div class="bannerTop">
      <div class="img">
        <!-- <div class="text">
          <p>实现能源的运维智能化规划与管理的时空一体化</p>
          <p>Operation and maintenance intelligence and</p>
          <p>management integration</p>
        </div> -->
      </div>
    </div>
    <div class="bannerBottom">
      <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
          <p>会员登录</p>
          <el-form-item label="账号" prop="username">
            <el-input placeholder="用户名/邮箱/手机" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <p class="forgetPassword">忘记密码?</p>
        </el-form>
        <div class="register">
          <p>会员注册</p>
          <p>没有账号？现在去注册</p>
          <el-button @click="goRegister">立即注册</el-button>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer :isFooterImg="false"></Footer>
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
  name: 'index',
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '此项不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '此项不能为空', trigger: 'blur' }],
      },
    }
  },
  methods: {
    //点击确定登录按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.username == 'admin' && this.ruleForm.password == '123456') {
            this.$message({
              message: '登录成功',
              type: 'success',
            })
            this.$router.push({ path: '/' })
          } else {
            this.$message({
              message: '用户名或密码错误',
              type: 'error',
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //跳转到注册页面
    goRegister() {
      this.$router.push({ path: '/register' })
    },
  },
  components: {
    Header,
    Footer,
    Affix,
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.bannerTop {
  width: 100%;
  height: 500px;
  display: flex;

  .img {
    width: 100%;
    background-image: url('../../assets/images/联系我们大图.jpg');
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

.bannerBottom {
  width: 100%;
  height: 500px;
  background-image: url('../../assets/images/banner4.jpg');
  display: flex;
  align-items: center;

  .login {
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    display: flex;
    align-items: center;
  }

  .demo-ruleForm {
    width: 300px;
    padding: 40px 60px;
    text-align: center;
    border-right: 1px solid #ddd;

    p {
      font-size: 28px;
    }

    .el-form-item {
      margin: 20px 0;
    }

    .el-button {
      padding: 10px 30px;
    }

    .forgetPassword {
      margin-top: 20px;
      font-size: 14px;
      color: #62a8ea;
      cursor: pointer;
    }
  }

  .register {
    width: 300px;
    padding: 40px 60px;
    text-align: center;

    p:nth-child(2) {
      margin: 20px 0;
      font-size: 14px;
    }

    .el-button {
      padding: 10px 30px;
      background-color: #57c7d4;
      color: #ffffff;
    }
  }
}
</style>
