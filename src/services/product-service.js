import HTTP from "../utils/http";
const _http = new HTTP();
class Product {
  // login方法
  login(obj) {
    return _http.request({
      type: "post",
      url: "user/pc/api/user/login/password",
      data: {
        clientId: obj.clientId,
        mobile: obj.mobile,
        password: obj.password
      }
    });
  }
}

export default Product;
