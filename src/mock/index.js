import Mock from "mockjs";

Mock.mock("/user/signIn", "post", (option) => {
  return Mock.mock({
    code: "0",
    msg: "success",
    "list|5": [{ name: "@name", age: "@integer(18, 25)" }],
  });
});

Mock.mock("/user/signUp", "post", (option) => {
  return Mock.mock({
    code: "0",
    msg: "success",
    "list|5": [{ name: "@name", age: "@integer(18, 25)" }],
  });
});
