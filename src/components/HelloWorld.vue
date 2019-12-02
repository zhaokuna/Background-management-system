<template>
  <div>
    <!-- 大框 视图 -->
    <div class="box">
      <!-- 中间的大框 包裹图片和登陆注册 -->
      <div class="containe">
        <div class="menu">
          <img src="../assets/1.png" alt />
        </div>
        <!-- 图片 -->
        <div class="menu1">
          <div class="herder">
            <img src="../assets/tmall_64.jpg" alt />
          </div>
          <!-- 头像 -->
          <h1>领客教育系统——开源版</h1>
          <div class="redirect_inp">
            <el-input
              v-model="mobile"
              placeholder="请输入内容"
              class="redriect_input"
            ></el-input>
            <el-input
              placeholder="请输入密码"
              v-model="password"
              show-password
              class="redriect_input"
            ></el-input>
          </div>
          <!-- <router-link to="/dashboard"> -->
          <el-button type="primary" class="redirce_btn" @click="Login"
            >登录</el-button
          >
          <!-- </router-link> -->
        </div>
      </div>
      <!-- 下面的一行字 -->
      <p>广州市领课网络科技有限公司 版权所有@2015-2019 |粤ICP备16009964号</p>
    </div>
  </div>
</template>

<script>
import Product from "../services/product-service";
const _product = new Product();
export default {
  data() {
    return {
      password: "",
      mobile: ""
    };
  },
  methods: {
    Login() {
      let obj = {
        password: this.password,
        mobile: this.mobile
      };
      _product.login(obj).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 1300px;
  background: #93defe;
  overflow: hidden;
}
.containe {
  width: 80%;
  height: 600px;

  margin: 0 auto;
  margin-top: 210px;
  display: flex;
  justify-content: space-between;
}
.menu {
  width: 800px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
.menu1 {
  width: 600px;
  height: 100%;
  background: white;
}
.herder {
  width: 150px;
  height: 150px;
  border-radius: 55%;
  border: 10px solid #93defe;
  background: white;
  position: fixed;
  top: 98px;
  right: 493px;
  img {
    width: 90px;
    height: 70px;
    margin-top: 35px;
    margin-left: 30px;
  }
}
h1 {
  margin-top: 160px;
  margin-left: 109px;
}
.redirect_inp {
  margin-top: 60px;
}
.redriect_input {
  width: 80%;
  height: 60px;
  margin-left: 80px;
  //   border: 1px solid black;
  //   background: rgb(221, 220, 220);
}
.redirce_btn {
  width: 80%;
  height: 60px;
  margin-left: 80px;
}
p {
  width: 900px;
  height: 60px;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 60px;
  color: white;
}
</style>
