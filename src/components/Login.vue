<template>
    <div class="Login">
        <div class="login">
            <div class="login-img">
                <img src="../assets/user.png" alt="">
            </div>
            <h2>领课教育系统-开源版</h2>
            <div class="login-pass">
                <div>
                    <input type="text" v-model="mobile">
                </div>
                <div>
                    <input type="password" v-model="password">
                </div>
                <button @click="Login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import Product from "../services/product-service";
const _product = new Product();
export default {
    name:'Login',
    data() {
        return {
            password:'',
            mobile:''
        }
    },
    methods: {
        Login(){
            let obj={
                password:"123456",
                mobile:"13800000000"
            }
            _product.login(obj).then(res => {
                console.log(res)
                // if(res.data.message=="登录成功"){
                    //  this.$router.push({
                        //query传参路径使用path
                        //params传参路径必须使用name
                        // path:'/message/private',
                        // name:'Private',
                        // query:{
                        //     res:res
                        // }
                    // })
                // }
            })
        }
    },
}
</script>

<style scoped lang='scss'>
.Login{
    height: 100%;
    width: 100%;
    background: rgb(147,222,254) url(../assets/login.png);//no-repeat center top
    background-size: 100% 100%;
    overflow: hidden;
    .login{
        width: 500px;
        margin: 0 auto;
        margin-top: 200px;
        background: #fff;
        overflow: hidden;
        padding: 50px 0;
        .login-img{
            display: block;
            position: absolute;
            top: 145px;
            left: 50%;
            margin-left: -50px;
            background: #FFF;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            text-align: center;
            border: 5px solid rgb(147,222,254);
            img{
                width: 60%;
                height: 60%;
                margin-top: 15px;
            }
        }
        h2{
            font-size: 40px;
            text-align: center;
            margin-top:50px;
        }
        .login-pass{
            width: 100%;
            input{
                width: 80%;
                height: 40px;
                display: block;
                margin: 0 auto;
                border: none;
                background: rgb(229,229,229);
                border-radius: 5px;
                margin-top: 40px;
            }
            button{
                width: 80%;
                height: 40px;
                display: block;
                margin: 0 auto;
                border: none;
                margin-top: 40px;
                border-radius: 5px;
                background: rgb(64,158,255);
                color: #FFF;
                font-size: 20px;
            }
        }
    }
}
</style>