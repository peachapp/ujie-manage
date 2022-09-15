import React, { useRef } from "react";
import { Layout as LayoutAnt } from "antd";
import { useRecoilState } from "recoil";
import { collapsedStore } from "store";
import { intoFullScreen, autoPrefix } from "utils";
import Header from "./header";
import Sidebar from "./sidebar/index";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const Layout = (props) => {
  const contentRef = useRef(null);

  const [collapsed, setCollapsed] = useRecoilState(collapsedStore);
  const onCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const onFullScreenOpen = () => {
    intoFullScreen(contentRef.current);
  };

  return (
    <LayoutAnt
      id="Layout"
      className={`${cx("container")} ${collapsed && cx("container-collapsed")}`}
    >
      <Header
        collapsed={collapsed}
        onCollapsedChange={onCollapsedChange}
        onFullScreenOpen={onFullScreenOpen}
      />
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
