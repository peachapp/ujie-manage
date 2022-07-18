import React, { useRef, useEffect } from "react";
import { Layout as LayoutAnt } from "antd";
import { useRecoilValue } from "recoil";
import { isFullScreenStore } from "store";
import { intoFullScreen, autoPrefix } from "utils";
import Header from "./header";
import Sidebar from "./sidebar/index";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

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
    <LayoutAnt id="Layout" className={cx("container")}>
      <Header />
      <LayoutAnt>
        <Sidebar />
        <LayoutAnt.Content
          style={{
            minHeight: 280,
          }}
        >
          <div className={cx("content")} ref={contentRef}>
            {props.children}
          </div>
        </LayoutAnt.Content>
      </LayoutAnt>
    </LayoutAnt>
  );
};

export default React.memo(Layout);
