import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Card, Divider } from "antd";
import { Icon } from "@iconify-icon/react";
import loginbg from "assets/images/loginbg.png";
import { autoPrefix } from "utils";
import LoginForm from "./loginForm";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const tabList = [
  {
    key: "account",
    tab: "账号登录",
  },
  {
    key: "vCode",
    tab: "验证码登录",
  },
  // {
  //   key: "qrCode",
  //   tab: "二维码登录",
  // },
];

function Login() {
  const navigate = useNavigate();
  const [activeTabKey, setActiveTabKey] = useState("account");

  const loginCallback = () => {
    navigate("/dashboard/workbench");
  };

  return (
    <div id="Login" className={cx("container")}>
      <Row style={{ height: "100%" }}>
        <Col span={10} className={cx("flex-center")}>
          <img src={loginbg} style={{ width: "80%" }} />
        </Col>
        <Col span={14} className={cx("content")}>
          <Card
            size="small"
            bordered={false}
            tabList={tabList}
            activeTabKey={activeTabKey}
            onTabChange={setActiveTabKey}
            style={{ width: "400px" }}
          >
            <LoginForm activeTabKey={activeTabKey} onSuccess={loginCallback} />

            <Divider plain>其他登录方式</Divider>
            <div className={cx("other")}>
              <Icon
                icon="ant-design:github-filled"
                width={32}
                className={cx("other-icon")}
              />
              <Icon
                icon="ant-design:wechat-filled"
                width={32}
                className={cx("other-icon")}
              />
              <Icon
                icon="ant-design:alipay-circle-filled"
                width={32}
                className={cx("other-icon")}
              />
              <Icon
                icon="ant-design:google-circle-filled"
                width={32}
                className={cx("other-icon")}
              />
              <Icon
                icon="ant-design:twitter-circle-filled"
                width={32}
                className={cx("other-icon")}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
