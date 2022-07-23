import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { menusStore } from "store";

const CheckAuth = (props) => {
  const menus = useRecoilValue(menusStore);
  const aa = useLocation();

  console.log("aa", aa);

  // props
  const { auth, children } = props;

  return !!auth ? children : <Navigate replace to="/login" />;
};

export default React.memo(CheckAuth);
