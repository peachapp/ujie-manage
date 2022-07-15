import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { routes } from "routers";
import logo from "logo.svg";
import { Button } from "antd";
import "./App.less";

function App() {
  const elements = useRoutes(routes);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>{elements}</RecoilRoot>
    </Suspense>
  );
}

export default App;
