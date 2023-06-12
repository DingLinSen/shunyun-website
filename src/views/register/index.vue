<template>
  <div class="register">
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
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div class="back">
          <span>已有账号?</span>
          <el-button @click="backLogin">返回登录</el-button>
        </div>
        <p>会员注册</p>
        <el-form-item label="账号" prop="username">
          <el-input placeholder="用户名" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" placeholder="确认密码" v-model="ruleForm.confirmPassword"></el-input>
        </el-form-item>
        <div class="more">
          <div class="text">更多资料</div>
        </div>
        <el-form-item label="公司名称" prop="companyName">
          <el-input placeholder="公司名称" v-model="ruleForm.companyName"></el-input>
        </el-form-item>
        <el-form-item label="公司传真" prop="companyName">
          <el-input placeholder="公司传真" v-model="ruleForm.companyFacsimile"></el-input>
        </el-form-item>
        <el-form-item label="公司联系地址" prop="companyName">
          <el-input placeholder="公司联系地址" v-model="ruleForm.companyAddress"></el-input>
        </el-form-item>
        <el-form-item label="公司邮政编码" prop="companyName">
          <el-input placeholder="公司邮政编码" v-model="ruleForm.companyPostalCode"></el-input>
        </el-form-item>
        <el-form-item label="公司网址" prop="companyName">
          <el-input placeholder="公司网址" v-model="ruleForm.companyWebsite"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
      </el-form>
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
    //用户名校验
    let validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('此项不能为空'))
      } else {
        callback()
      }
    }
    //密码校验
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('此项不能为空'))
      } else if (value.length < 6) {
        callback(new Error('密码必须在6-30个字符之间'))
      } else if (value.length > 30) {
        callback(new Error('密码必须在6-30个字符之间'))
      } else {
        callback()
      }
    }
    //判断两次输入密码是否一致
    let validateConfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('此项不能为空'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        companyFacsimile: '',
        companyAddress: '',
        companyPostalCode: '',
        companyWebsite: '',
      },
      rules: {
        username: [{ validator: validateName, required: true, trigger: 'change' }],
        password: [{ validator: validatePassword, required: true, trigger: 'change' }],
        confirmPassword: [{ validator: validateConfirmPassword, required: true, trigger: 'change' }],
      },
    }
  },
  methods: {
    //点击立即注册按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '注册成功',
            type: 'success',
          })
          this.$router.push({ path: '/login' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //  返回登录页面
    backLogin() {
      this.$router.push({ path: '/login' })
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
  height: 1080px;
  background-image: url('../../assets/images/banner4.jpg');
  display: flex;
  align-items: center;

  .demo-ruleForm {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 40px 60px;
    width: 550px;
    margin: 0 auto;
    text-align: center;

    .back {
      align-items: center;
      display: flex;
      justify-content: right;

      .el-button {
        background-color: #57c7d4;
        color: #ffffff;
        margin-left: 5px;
      }
    }

    p {
      font-size: 28px;
    }

    .more {
      height: 1px;
      width: 100%;
      background-color: #e4eaec;
      position: relative;
      margin: 40px 0;

      .text {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #76838f;
        background-color: #fff;
        padding: 2px 5px;
        font-size: 14px;
        top: 50%;
      }
    }
  }
}
</style>
