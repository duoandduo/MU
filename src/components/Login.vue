<template>
  <div class="mu-login">
    <v-card>
      <v-icon class="mu-login-icon-close" @click="handleClose">close</v-icon>
      <v-card-title class="headline lighten-2">
        <span class="mu-login-title">登录</span>
      </v-card-title>
      <v-card-text class="mu-login-content">
        <v-text-field
          label="手机号"
          class="mu-login-input"
          prepend-icon="mdi-account"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="验证码"
          class="mu-login-input"
          prepend-icon="mdi-lock"
          hide-details="auto"
        >
          <template v-slot:append>
            <span class="mu-login-code">获取验证码</span>
          </template>
        </v-text-field>
        <p class="mu-login-text">其他登录方式</p>
        <v-icon class="mu-login-icon-wechat">mdi-wechat</v-icon>
      </v-card-text>
      <p class="mu-login-description">登录/注册即代表同意《用户协议》</p>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="submit"
        >
          登录
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      
    }
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    submit() {
      this.$store.commit('setUserInfo', { name: 'abc' });
      console.log(this.$store.getters.isLogin);
      this.handleClose();
    }
  },
}
</script>

<style lang="scss" scoped>
$r: mu-login;

.#{$r} {
  text-align: center;
  &-title {
    font-size: 18px;
  }
  &-content {
    min-height: 300px;
  }
  &-input {
    margin-top: 30px;
  }
  &-code {
    font-size: 12px;
    color: #1976d2;
    cursor: pointer;
    margin-right: 5px;
    &:hover {
      opacity: .8;
    }
  }
  &-icon {
    &-close {
      position: absolute;
      top: 16px;
      right: 10px;
    }
    &-wechat {
      font-size: 40px;
      cursor: pointer;
      color: green;
    }
  }
  &-text {
    font-size: 14px;
    margin-top: 30px;
    text-align: center;
    opacity: .8;
  }
  &-description {
    font-size: 12px;
    text-align: center;
    opacity: .6;
  }
}

</style>