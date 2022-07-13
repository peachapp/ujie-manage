import Home from "views/home/index";

// 全局路由配置
const routes = [
  {
    path: "/",
    // redirect: "/home",
    element: <Home />,
    children: [
      { path: "messages", element: <div>message</div> },
      { path: "tasks", element: <div>tasks</div> },
    ],
  },
  {
    path: "/home",
    element: <Home />,
    meta: {
      title: "首页",
      needLogin: true,
    },
  },
  // {
  //   path: "/login",
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ "@/views/login/index"),
  //   meta: {
  //     title: "登录",
  //   },
  // },
  // {
  //   path: "*",
  //   component: () =>
  //     import(/* webpackChunkName: "404" */ "views/static/page404"),
  //   meta: {
  //     title: "404",
  //   },
  // },
];

export default routes;
