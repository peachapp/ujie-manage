import React from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { collapsedStore } from "store";
import { isFullScreenAvailable, autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const Header = (props) => {
  const { onFullScreenOpen } = props;
  const [collapsed, setCollapsed] = useRecoilState(collapsedStore);
  const onCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout.Header className={cx("container")} style={{ padding: 0 }}>
      <div className={cx("control")} onClick={onCollapsedChange}>
        {collapsed ? (
          <MenuUnfoldOutlined className={cx("control-icon")} />
        ) : (
          <MenuFoldOutlined className={cx("control-icon")} />
        )}
      </div>
      {isFullScreenAvailable ? (
        <div className={cx("screen")} onClick={onFullScreenOpen}>
          <FullscreenOutlined className={cx("screen-icon")} />
        </div>
      ) : null}
    </Layout.Header>
  );
};

export default React.memo(Header);
