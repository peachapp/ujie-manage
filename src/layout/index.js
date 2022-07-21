import React, { useRef } from "react";
import { Layout as LayoutAnt } from "antd";
import { intoFullScreen, autoPrefix } from "utils";
import Header from "./header";
import Sidebar from "./sidebar/index";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const Layout = (props) => {
  const contentRef = useRef(null);
  console.log("Layout");

  const onFullScreenOpen = () => {
    intoFullScreen(contentRef.current);
  };

  return (
    <LayoutAnt id="Layout" className={cx("container")}>
      <Header onFullScreenOpen={onFullScreenOpen} />
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
