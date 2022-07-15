import React, { useRef, useEffect } from "react";
import { Layout as LayoutAnt } from "antd";
import { useRecoilValue } from "recoil";
import { isFullScreenStore } from "store";
import { intoFullScreen, outFullScreen } from "utils";
import Header from "./header";
import Sidebar from "./sidebar/index";
import "./index.less";

const { Content } = LayoutAnt;

const Layout = (props) => {
  const contentRef = useRef(null);
  const isFullScreen = useRecoilValue(isFullScreenStore);
  console.log("isFullScreen", isFullScreen, isFullScreenStore);

  useEffect(() => {
    if (isFullScreen) {
      intoFullScreen(contentRef.current);
    } else {
      console.log("退出 FullScreen");
      // outFullScreen();
    }
  }, [isFullScreen]);

  return (
    <LayoutAnt id="Layout" className="layout-container">
      <Header />
      <LayoutAnt>
        <Sidebar />
        <Content
          style={{
            minHeight: 280,
          }}
        >
          <div className="layout-content" ref={contentRef}>
            {props.children}
          </div>
        </Content>
      </LayoutAnt>
    </LayoutAnt>
  );
};

export default React.memo(Layout);
