import Mock from "mockjs";
import { menuListAll } from "utils";

// 用户登录
Mock.mock("/user/signIn", "post", (option) => {
  return Mock.mock({
    code: "0",
    msg: "success",
    "list|5": [{ name: "@name", age: "@integer(18, 25)" }],
  });
});

// 用户注册
Mock.mock("/user/signUp", "post", (option) => {
  return Mock.mock({
    code: "0",
    msg: "success",
    "list|5": [{ name: "@name", age: "@integer(18, 25)" }],
  });
});

// 查询用户信息、路由、权限
Mock.mock("/user/information", "get", (option) => {
  return Mock.mock({
    code: "0",
    msg: "success",
    data: {
      menuList: [...menuListAll],
      userInfo: {
        name: "@name",
        age: "@integer(18, 25)",
      },
    },
  });
});
