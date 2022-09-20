import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Dropdown, Menu, Avatar, Modal, Button } from "antd";
import { Icon } from "@iconify-icon/react";
import { isFullScreenAvailable, autoPrefix, exportPDF } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const Header = (props) => {
  const { collapsed, onCollapsedChange, onFullScreenOpen } = props;
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const onBeforeLogout = () => {
    modal.confirm({
      title: "温馨提醒",
      content: "是否确认退出系统?",
      okText: "确定",
      cancelText: "取消",
      centered: true,
      onOk: () => {
        navigate("/login");
        console.log("确认退出登录");
      },
    });
  };

  const menu = (
    <Menu
      items={[
        {
          key: "personal",
          label: (
            <div className={cx("menuitem")}>
              <Icon icon="bxs:user-detail" width={20} />
              <span>个人中心</span>
            </div>
          ),
        },
        {
          key: "lock",
          label: (
            <div className={cx("menuitem")}>
              <Icon icon="ant-design:lock-filled" width={20} />
              <span>锁定屏幕</span>
            </div>
          ),
        },
        {
          key: "logout",
          label: (
            <div className={cx("menuitem")} onClick={onBeforeLogout}>
              <Icon icon="ant-design:logout-outlined" width={20} />
              <span>退出系统</span>
            </div>
          ),
        },
      ]}
    />
  );

  const onExportPDF = () => {
    exportPDF("测试导出PDF", document.getElementById("LayContent"));
  };

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
        <Button type="link" onClick={onExportPDF}>
          导出
        </Button>
        <Dropdown overlay={menu} placement="bottom">
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

      {contextHolder}
    </Layout.Header>
  );
};

export default React.memo(Header);
