import React from "react";
import { Layout, Dropdown, Menu, Avatar } from "antd";
import { Icon } from "@iconify-icon/react";
import { isFullScreenAvailable, autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const Header = (props) => {
  const { collapsed, onCollapsedChange, onFullScreenOpen } = props;

  return (
    <Layout.Header className={cx("container")} style={{ padding: 0 }}>
      <div className={cx("control")} onClick={onCollapsedChange}>
        {collapsed ? (
          <Icon
            icon="ant-design:menu-unfold-outlined"
            width={32}
            className={cx("control-icon")}
          />
        ) : (
          <Icon
            icon="ant-design:menu-fold-outlined"
            width={32}
            className={cx("control-icon")}
          />
        )}
      </div>
      <div className={cx("right")}>
        <Dropdown overlay={menu} placement="bottomLeft">
          <div className={cx("user")}>
            <Avatar
              className={cx("avatar")}
              size={32}
              src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
            />
            <span>杰克</span>
          </div>
        </Dropdown>
        {isFullScreenAvailable ? (
          <div className={cx("screen")} onClick={onFullScreenOpen}>
            <Icon
              icon="ant-design:fullscreen-outlined"
              width={32}
              className={cx("control-icon")}
            />
          </div>
        ) : null}
      </div>
    </Layout.Header>
  );
};

export default React.memo(Header);
