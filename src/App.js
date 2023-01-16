import React, { Suspense, lazy, useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { menusStore } from "store";
import { cloneDeep } from "lodash";
import { routes } from "routers";
import "./App.less";

function App() {
  const [routerList] = useState(cloneDeep(routes));

  const menus = useRecoilValue(menusStore);

  useEffect(() => {
    console.log("menus change");
  }, [menus]);

  menus.forEach((item) => {
    const Ele = lazy(() => import(`${item.elementPath}`));
    routerList[0].children.push({
      path: item.path,
      element: <Ele />,
      meta: item.meta,
    });
  });

  const elements = useRoutes(routerList);

  console.log("app routerList", routerList);

  return <Suspense fallback={<div>Loading...</div>}>{elements}</Suspense>;
}

export default App;
