import { Col, Row, Skeleton } from "antd";
// relative
import { autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

function Home() {
  return (
    <div id="Home" className={cx("container")}>
      <div className={cx("header")}>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </div>
      <div className={cx("content")}></div>
    </div>
  );
}

export default Home;
