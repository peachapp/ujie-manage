import { useState, useEffect, useRef } from "react";
import { Row, Col, Avatar, Card, Tag } from "antd";
import { Icon } from "@iconify-icon/react";
import * as echarts from "echarts";
import statistics1 from "assets/images/statistics1.png";
import statistics2 from "assets/images/statistics2.png";
import statistics3 from "assets/images/statistics3.png";
import statistics4 from "assets/images/statistics4.png";
// relative
import {
  autoPrefix,
  flowTrendOption,
  visitsOption,
  conversionRateOption,
  accessSourceOption,
  dealRatioOption,
} from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const cardTabList = [
  {
    key: "flowTrend",
    tab: "流量趋势",
  },
  {
    key: "visits",
    tab: "访问量",
  },
];

function Analysis() {
  const [activeTabKey, setActiveTabKey] = useState("flowTrend");

  const chartEleRef = useRef(null);

  useEffect(() => {
    chartEleRef.current = echarts.init(document.getElementById("TabChart"));

    const conversionRateChartEle = echarts.init(
      document.getElementById("conversionRateChart")
    );
    conversionRateChartEle.setOption(conversionRateOption);

    const accessSourceChartEle = echarts.init(
      document.getElementById("accessSourceChart")
    );
    accessSourceChartEle.setOption(accessSourceOption);

    const dealRatioChartEle = echarts.init(
      document.getElementById("dealRatioChart")
    );
    dealRatioChartEle.setOption(dealRatioOption);
  }, []);

  useEffect(() => {
    let option = activeTabKey === "flowTrend" ? flowTrendOption : visitsOption;
    console.log("option", option);
    chartEleRef.current.setOption(option, { notMerge: true });
  }, [activeTabKey]);

  return (
    <div id="Analysis" className={cx("container")}>
      <Row gutter={12}>
        <Col span={6}>
          <Card title="访问数" size="small" extra={<Tag color="green">月</Tag>}>
            <div className={cx("statisticsitem")}>
              <div className={cx("statisticsitem-value")}>
                <span>$2,000</span>
                <div className={cx("statisticsitem-img")}>
                  <img src={statistics1} style={{ width: "32px" }} />
                </div>
              </div>
              <div className={cx("statisticsitem-value-total")}>
                <span>总访问数</span>
                <span>$120,000</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="成交额" size="small" extra={<Tag color="blue">月</Tag>}>
            <div className={cx("statisticsitem")}>
              <div className={cx("statisticsitem-value")}>
                <span>$20,000</span>
                <div className={cx("statisticsitem-img")}>
                  <img src={statistics2} style={{ width: "32px" }} />
                </div>
              </div>
              <div className={cx("statisticsitem-value-total")}>
                <span>总成交额</span>
                <span>$500,000</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="下载数"
            size="small"
            extra={<Tag color="orange">周</Tag>}
          >
            <div className={cx("statisticsitem")}>
              <div className={cx("statisticsitem-value")}>
                <span>$8,000</span>
                <div className={cx("statisticsitem-img")}>
                  <img src={statistics3} style={{ width: "32px" }} />
                </div>
              </div>
              <div className={cx("statisticsitem-value-total")}>
                <span>总下载数</span>
                <span>$120,000</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="成交数"
            size="small"
            extra={<Tag color="purple">年</Tag>}
          >
            <div className={cx("statisticsitem")}>
              <div className={cx("statisticsitem-value")}>
                <span>$5,000</span>
                <div className={cx("statisticsitem-img")}>
                  <img src={statistics4} style={{ width: "32px" }} />
                </div>
              </div>
              <div className={cx("statisticsitem-value-total")}>
                <span>总成交数</span>
                <span>$50,000</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <div className={cx("space-vertical")} />
      <Card
        size="small"
        tabList={cardTabList}
        activeTabKey={activeTabKey}
        onTabChange={setActiveTabKey}
      >
        <div id="TabChart" style={{ width: "100%", height: 320 }}></div>
      </Card>
      <div className={cx("space-vertical")} />
      <Row gutter={12}>
        <Col span={8}>
          <Card title="转化率" size="small">
            <div
              id="conversionRateChart"
              style={{ width: "100%", height: 320 }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="访问来源" size="small">
            <div
              id="accessSourceChart"
              style={{ width: "100%", height: 320 }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="成交占比" size="small">
            <div id="dealRatioChart" style={{ width: "100%", height: 320 }} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Analysis;
