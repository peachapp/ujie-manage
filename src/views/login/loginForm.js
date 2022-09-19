import { Col, Row, Form, Input, Checkbox, Button } from "antd";
import { autoPrefix } from "utils";
import styles from "./index.less";

function LoginForm({ activeTabKey, onSuccess }) {
  const onFinish = (values) => {
    console.log("Success:", values);
    typeof onSuccess === "function" && onSuccess();
  };

  return (
    <Form
      name="loginForm"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      {/* 账号登录 */}
      {activeTabKey === "account" && (
        <>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入账号!",
              },
            ]}
          >
            <Input placeholder="账号" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>
        </>
      )}

      {/* 验证码登录 */}
      {activeTabKey === "vCode" && (
        <>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "请输入手机号码!",
              },
            ]}
          >
            <Input placeholder="手机号码" />
          </Form.Item>

          <Form.Item
            name="vcode"
            rules={[
              {
                required: true,
                message: "请输入验证码!",
              },
            ]}
          >
            <Input.Group>
              <Row gutter={12}>
                <Col span={16}>
                  <Input placeholder="短信验证码" />
                </Col>
                <Col span={8}>
                  <Button block>获取验证码</Button>
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
        </>
      )}

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
