<template>
  <div>
    <div>用户名：<input type="text" v-model="loginInfo.name" /></div>
    <div>密码：<input type="password" v-model="loginInfo.password" /></div>
    <div>
      <input type="button" value="登录" @click="login" />
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginInfo: {
        name: "",
        password: "",
      },
      user: {
        name: "1",
        password: "1",
      },
    };
  },
  methods: {
    login() {
      if (this.loginInfo.name == this.user.name && this.loginInfo.password == this.user.password) {
        alert("登录成功");
        this.$route.meta.isLogin=true;
        this.$router.push({
          path: "/home",
        });
      } else {
        alert("用户名或密码错误");
      }
    },
  },
};
</script>