import React, { lazy } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Layout from "layout";
const Login = lazy(() => import("views/login"));
const Test = lazy(() => import("views/test"));
const AboutAuthor = lazy(() => import("views/about/aboutAuthor"));

// 静态页
const Page403 = lazy(() => import("views/static/page403"));
const Page404 = lazy(() => import("views/static/page404"));
const Page500 = lazy(() => import("views/static/page500"));

// 全局路由配置
const routes = [
  {
    id: "/",
    path: "/",
    redirect: "/dashboard/workbench",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [],
  },
  {
    id: "login",
    path: "/login",
    element: <Login />,
    meta: {
      title: "登录",
      auth: false,
    },
  },
  {
    id: "aboutAuthor",
    path: "/aboutAuthor",
    element: <AboutAuthor />,
    meta: {
      title: "关于作者",
      auth: false,
    },
  },
  {
    id: "test",
    path: "/test",
    element: <Test />,
    meta: {
      title: "测试",
      auth: false,
    },
  },
  {
    id: "403",
    path: "/403",
    element: <Page403 />,
    meta: {
      title: "403",
      auth: false,
    },
  },
  {
    id: "404",
    path: "/404",
    element: <Page404 />,
    meta: {
      title: "404",
      auth: false,
    },
  },
  {
    id: "500",
    path: "/500",
    element: <Page500 />,
    meta: {
      title: "500",
      auth: false,
    },
  },
  {
    path: "*",
    element: <Navigate replace to="404"></Navigate>,
  },
];

export default routes;
