import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { collapsedStore } from "store";
import { autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const menuData = [
  {
    key: "dashboard/workbench",
    title: "工作台",
    path: "/dashboard/workbench",
    icon: <HomeOutlined />,
  },
  {
    key: "aboutAuthor",
    title: "关于作者",
    path: "/aboutAuthor",
    icon: <UserOutlined />,
  },
  // { key: '404', title: '404', path: '', icon: '' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const collapsed = useRecoilValue(collapsedStore);

  const currentPathKey =
    (
      (menuData || []).find(
        (menuDataItem) => menuDataItem.path === location.pathname
      ) || {}
    ).key || "dashboard/workbench";

  const [selectedKeys, setSelectedKeys] = useState([currentPathKey]);

  const onSelectedKeysChange = ({ key }) => {
    navigate(`/${key}`);
    setSelectedKeys([key]);
  };

  return (
    <Layout.Sider
      className={cx("container")}
      width={144}
      collapsedWidth={64}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        onClick={onSelectedKeysChange}
      >
        {(menuData || []).map((menuDataItem) => {
          return (
            <Menu.Item key={menuDataItem.key} icon={menuDataItem.icon}>
              {menuDataItem.title}
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
};

export default React.memo(Sidebar);
