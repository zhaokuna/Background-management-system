/**
 * product-service.js Created by SmallFour on 2019/10/22/14:16
 */

// 第二个文件：M层

/*
* M : 数据
* V： 视图
* C： 业务逻辑层
* */

import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
  // login方法
  login (obj) {
    return _http.request({
      type: 'post',
      url: 'apis/user/pc/api/user/login/password',
      data: {
        clientId: "lkb65617f842ad4c37895a733b8de43cbb",
        mobile: obj.mobile,
        password:obj.password,
      }
    })
  }




  
}

export default Product
