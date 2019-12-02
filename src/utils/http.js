import config from "../config/index";
import Axios from "axios";

class HTTP {
  request(params) {
    return new Promise((resolve, reject) => {
      Axios({
        method: params.type || "get",
        url: config.baseUrl + params.url,
        data: params.data
      }).then(res => {
        reject.log(res);
      });
    });
  }
}
export default HTTP;
