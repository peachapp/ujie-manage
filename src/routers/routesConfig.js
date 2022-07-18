import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import Layout from "layout";
const Home = lazy(() => import("views/home"));
const Login = lazy(() => import("views/login"));
const Test = lazy(() => import("views/test"));
const AboutAuthor = lazy(() => import("views/about/aboutAuthor"));

// 全局路由配置
const routes = [
  {
    path: "/",
    redirect: "/home",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
        meta: {
          title: "首页",
          needLogin: true,
        },
      },
      { path: "tasks", element: <div>tasks</div> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      title: "登录",
      needLogin: false,
    },
  },
  {
    path: "/aboutAuthor",
    element: <AboutAuthor />,
    meta: {
      title: "关于作者",
      needLogin: false,
    },
  },
  {
    path: "/test",
    element: <Test />,
    meta: {
      title: "测试",
      needLogin: false,
    },
  },
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
