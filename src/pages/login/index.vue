<template>
  <div class="pages-login" :style="{backgroundImage: `url(${bg})`}">
    <div class="content-wrap" :style="{backgroundImage: `url(${borderImg})`}">
      <div class="title">欢迎登录</div>
      <div class="form-wrap">
        <div class="form-item" :style="{backgroundImage: `url(${inputBg})`}">
          <img :src="userIcon" class="pre-icon user">
          <input v-model="username" type="text" placeholder="请输入用户名" class="login-input">
        </div>
        <div class="form-item" :style="{backgroundImage: `url(${inputBg})`}">
          <img :src="passwordIcon" class="pre-icon passeord">
          <input v-model="password" type="password" placeholder="请输入用户名" class="login-input">
        </div>
        <div class="btn" @click="handleLogin">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/images/login-bg.png'
import borderImg from '@/assets/images/login-border.png'
import inputBg from '@/assets/images/login-input.png'
import userIcon from '@/assets/images/user.png'
import passwordIcon from '@/assets/images/password.png'

export default {
  data() {
    return {
      bg,
      borderImg,
      inputBg,
      userIcon,
      passwordIcon,
      username: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      if (!this.username) {
        this.$message.error({
          message: '用户名不能为空',
          duration: 1500
        })
        return
      }
      if (!this.password) {
        this.$message.error({
          message: '密码错误',
          duration: 1500
        })
        return
      }
      this.$message.success({
        message: '登录成功，片刻后进入系统',
        duration: 1500
      })
      setTimeout(() => {
        window.sessionStorage.setItem('isLogin', 'true')
        this.$router.push('/guide')
      }, 1000)
    },
  },
}
</script>

<style lang="less" scoped>
.pages-login{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .content-wrap{
    width: 46.9375rem;
    height: 31.5rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .title{
      font-size: 1.875rem;
      color: #fff;
      height: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .form-wrap{
      height: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .form-item{
        width: 23.75rem;
        height: 2.75rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding-left: 3rem;
        position: relative;
        &:first-child{
          margin-bottom: 2.5rem;
        }
        .pre-icon{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .user{
          left: 0.75rem;
          width: 1.625rem;
        }
        .passeord{
          left: 0.875rem;
          width: 1.375rem;
        }
        .login-input{
          width: 100%;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #80AAFF;
          font-size: 1rem;
          padding: 0 1.25rem;
        }
      }
      .btn{
        width: 8.75rem;
        height: 2.5rem;
        background: linear-gradient(#ffed71 0%, #c56202 100%);
        border-radius: 0.25rem;
        color: #fff;
        font-size: 1.25rem;
        line-height: 2.5rem;
        text-align: center;
        margin-top: 3.5rem;
        cursor: pointer;
      }
    }
  }
}
</style>
