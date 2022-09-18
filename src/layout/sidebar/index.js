import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Icon } from "@iconify-icon/react";
import { useRecoilValue } from "recoil";
import { collapsedStore } from "store";
import { autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const menuData = [
  {
    key: "dashboard",
    title: "dashboard",
    path: "dashboard",
    icon: "ant-design:appstore-outlined",
    children: [
      {
        key: "dashboard/workbench",
        title: "工作台",
        path: "/dashboard/workbench",
      },
      {
        key: "dashboard/analysis",
        title: "分析页",
        path: "/dashboard/analysis",
      },
    ],
  },
  {
    key: "aboutAuthor",
    title: "关于作者",
    path: "/aboutAuthor",
    icon: "icon-park-outline:me",
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

  const getmenuDataItem = (list) => {
    return (list || []).map((item) => {
      if (Array.isArray(item.children)) {
        return (
          <Menu.SubMenu
            key={item.key}
            icon={<Icon icon={item.icon} width={20} />}
            title={item.title}
          >
            {getmenuDataItem(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} icon={<Icon icon={item.icon} width={20} />}>
          {item.title}
        </Menu.Item>
      );
    });
  };

  return (
    <Layout.Sider
      className={cx("container")}
      width={210}
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
        {getmenuDataItem(menuData)}
      </Menu>
    </Layout.Sider>
  );
};

export default React.memo(Sidebar);
