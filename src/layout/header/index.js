import React from "react";
import { Layout as LayoutAnt } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isFullScreenStore, collapsedStore } from "store";
import { isFullScreenAvailable } from "utils";
import "./index.less";

const { Header: HeaderAnt } = LayoutAnt;

const Header = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedStore);
  const onCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const setFullScreen = useSetRecoilState(isFullScreenStore);
  const onIsFullScreenChange = () => {
    setFullScreen(true);
  };

  return (
    <HeaderAnt className="header-container" style={{ padding: 0 }}>
      <div className="header-control" onClick={onCollapsedChange}>
        {collapsed ? (
          <MenuUnfoldOutlined className="header-control-icon" />
        ) : (
          <MenuFoldOutlined className="header-control-icon" />
        )}
      </div>
      {isFullScreenAvailable ? (
        <div className="header-screen" onClick={onIsFullScreenChange}>
          <FullscreenOutlined className="header-screen-icon" />
        </div>
      ) : null}
    </HeaderAnt>
  );
};

export default React.memo(Header);
