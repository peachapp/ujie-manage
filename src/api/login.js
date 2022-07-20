import service from "./axios";
// const urlPrefix = `/api`;
const urlPrefix = ``;

// 用户登录
export const signIn = (data) => {
  return service({
    url: `${urlPrefix}/user/signIn`,
    method: "post",
    data,
  });
};

// 用户注册
export const signUp = (data) => {
  return service({
    url: `${urlPrefix}/user/signUp`,
    method: "post",
    data,
  });
};

// 查询用户信息、路由、权限
export const getUser = (data) => {
  return service({
    url: `${urlPrefix}/user/information`,
    method: "post",
    data,
  });
};

// get请求
export const getcase = (data) => {
  return service({
    url: `/api/user/xxx`,
    method: "get",
    params: data,
  });
};

// post请求
export const postcase = (data) => {
  return service({
    url: `/api/user/xxx`,
    method: "post",
    data,
  });
};
