<template>
<div class="login-wrap">
  <h2 class="title">登 录</h2>
  <!-- 登录表单 -->
  <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
          <el-input type="text" size="small" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
          <el-input type="password" size="small" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" size="small" @click="loginSubmit('loginForm')">登录</el-button>
      </el-form-item>
  </el-form>
</div>
</template>

<script>
import crypto from 'crypto';
import { login } from 'comp/util/api';

export default {
  components:{
    
  },
  data() {
    return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },
    };
  },
  mounted() {

  },
  methods: {
    
    loginSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 深拷贝，否则会显示加密后的值
          console.log('加密前的密码：', JSON.parse(JSON.stringify(this.loginForm.password)));

          // 密码加密
          var md5 = crypto.createHash("md5");
          md5.update(this.loginForm.password) //需要加密的密码
          var password = md5.digest('hex');  //password 加密完的密码

          // 重新赋值给password
          this.loginForm.password = password;
          console.log('加密后的密码：', this.loginForm.password);
          alert('加密后的密码：'+this.loginForm.password);

          // 登录（直接扔loginForm）
          this.doLogin(this.loginForm);
        }
      });
    },
    doLogin(params){
      console.log('登录参数', params);
      // 和后台对接示例，login是引于util/api.js中封装好的接口
      login(params).then(res=>{
        console.log('登录...',res);
        if(res.code === 200){
          this.$message.success('登录成功！');
        }
      },err=>{
        console.log('登录失败',err);
      });
    },
  },
};

</script>

<style lang="less">
    .login-wrap{
      padding: 40px;
      width: 500px;
      background: #fff;
      margin: 100px auto;
      .title{
        text-align: center;
        margin-bottom: 20px;
      }
      .el-form{
          margin-bottom: 20px;
      }
    }
</style>
