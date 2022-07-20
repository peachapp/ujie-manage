import axios from "axios";
// import { Dialog } from "vant";
import { notification } from "antd";

// console.log("import.meta.env", import.meta.env);

/****** 创建axios实例 ******/
const service = axios.create({
  // baseURL: import.meta.env.BASE_URL, // api的base_url
  baseURL: "", // api的base_url
  timeout: 60000, // 请求超时时间
});

/****** request 拦截器 ==> 对请求做处理 ******/
service.interceptors.request.use(
  (response) => {
    // if (response.headers.authorization) {
    //   const authorization = response.headers.authorization;
    //   if (authorization.startsWith("Bearer ") || authorization.startsWith("bearer ")) {
    //     store.dispatch("SetToken", authorization);
    //   };
    // } else if (!response.headers.authorization) {
    //   response.headers.authorization = localStorage.getItem("TOKEN") ? "Bearer " + localStorage.getItem("TOKEN") : "";
    // };

    if (
      response.data &&
      response.data.meta &&
      response.data.meta.success === false
    ) {
      return Promise.reject(response);
    }

    return response;
  },
  (error) => {
    // 请求错误处理
    Promise.reject(error);
  }
);

/****** response 拦截器 ==> 对响应做处理 ******/
service.interceptors.response.use(
  (response) => {
    // console.log("ressssss", response);
    // 响应成功处理

    // 根据后端提供的数据进行对应的处理
    // code === 0 成功
    // if (response.data.ok) {

    // } else {
    //   Dialog.alert({
    //     title: "请求错误！",
    //     message: response.data.result.msg || "获取数据时发生了未知错误！",
    //   });
    // };

    return response.data;
  },
  (error) => {
    // 响应错误处理

    // 如果是某个请求被业务代码, 取消掉导致的错误, 则不处理, 直接将错误返回给业务代码
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    let errMsg = error.response.data.result.msg;

    // Dialog.alert({
    //   title: "请求错误！",
    //   message: errMsg || "获取数据时发生了未知错误！",
    // });

    notification.open({
      message: "请求错误！",
      description: errMsg || "获取数据时发生了未知错误！",
      onClick: () => {},
    });

    return Promise.reject(error);
  }
);

export default service;
