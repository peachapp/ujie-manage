import { useEffect } from "react";
import { Row, Col, Avatar, Card, Button } from "antd";
import { Icon } from "@iconify-icon/react";
import * as echarts from "echarts";
import scheduleImg from "assets/images/schedule.png";
// relative
import { autoPrefix, salesStatisticsOption } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

function Workbench() {
  useEffect(() => {
    let option = salesStatisticsOption;
    const chartEle = echarts.init(document.getElementById("CensusChart"));
    chartEle.setOption(option);
  }, []);

  return (
    <div id="Workbench" className={cx("container")}>
      <div className={cx("header")}>
        <Row gutter={12}>
          <Col span={12}>
            <div className={cx("user")}>
              <Avatar
                className={cx("avatar")}
                size={60}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div>
                <div className={cx("greetting")}>
                  早安, Vben Admin, 开始您一天的工作吧！
                </div>
                <div>今日晴，20℃ - 32℃！</div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className={cx("worklist")}>
              <div className={cx("workitem")}>
                <div className={cx("workitem-name")}>代办</div>
                <div className={cx("workitem-value")}>2/10</div>
              </div>
              <div className={cx("workitem")}>
                <div className={cx("workitem-name")}>项目</div>
                <div className={cx("workitem-value")}>9</div>
              </div>
              <div className={cx("workitem")}>
                <div className={cx("workitem-name")}>团队</div>
                <div className={cx("workitem-value")}>375</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={cx("content")}>
        <div className={cx("left")}>
          {/* 项目 */}
          <Card
            title="项目"
            size="small"
            extra={<Button type="link">更多</Button>}
          >
            <Card.Grid className={cx("proitem")}>
              <div className={cx("proitem-name")}>
                <Icon
                  icon="akar-icons:github-fill"
                  width={32}
                  style={{ color: "#000" }}
                />
                <span>Github</span>
              </div>
              <div className={cx("proitem-text")}>
                不要等待机会，而要创造机会。
              </div>
              <div className={cx("proitem-info")}>
                <span>开源组</span>
                <span>2022-08-01</span>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("proitem")}>
              <div className={cx("proitem-name")}>
                <Icon
                  icon="akar-icons:vue-fill"
                  width={32}
                  style={{ color: "#3fb27f" }}
                />
                <span>Vue</span>
              </div>
              <div className={cx("proitem-text")}>现在的你决定将来的你。</div>
              <div className={cx("proitem-info")}>
                <span>算法组</span>
                <span>2022-08-01</span>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("proitem")}>
              <div className={cx("proitem-name")}>
                <Icon
                  icon="akar-icons:html-fill"
                  width={32}
                  style={{ color: "#e18525" }}
                />
                <span>Html5</span>
              </div>
              <div className={cx("proitem-text")}>
                没有什么才能比努力更重要。
              </div>
              <div className={cx("proitem-info")}>
                <span>上班摸鱼</span>
                <span>2022-08-01</span>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("proitem")}>
              <div className={cx("proitem-name")}>
                <Icon
                  icon="akar-icons:angular-fill"
                  width={32}
                  style={{ color: "#bf0c2c" }}
                />
                <span>Angular</span>
              </div>
              <div className={cx("proitem-text")}>
                热情和欲望可以突破一切难关。
              </div>
              <div className={cx("proitem-info")}>
                <span>UI</span>
                <span>2022-08-01</span>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("proitem")}>
              <div className={cx("proitem-name")}>
                <Icon
                  icon="akar-icons:react-fill"
                  width={32}
                  style={{ color: "#00d8ff" }}
                />
                <span>React</span>
              </div>
              <div className={cx("proitem-text")}>
                健康的身体是实目标的基石。
              </div>
              <div className={cx("proitem-info")}>
                <span>技术牛</span>
                <span>2022-08-01</span>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("proitem")}>
              <div className={cx("proitem-name")}>
                <Icon
                  icon="akar-icons:javascript-fill"
                  width={32}
                  style={{ color: "#4daf1b" }}
                />
                <span>Js</span>
              </div>
              <div className={cx("proitem-text")}>
                路是走出来的，而不是空想出来的。
              </div>
              <div className={cx("proitem-info")}>
                <span>架构组</span>
                <span>2022-08-01</span>
              </div>
            </Card.Grid>
          </Card>
          <div className={cx("space-vertical")} />
          {/* 最新动态 */}
          <Card
            title="最新动态"
            size="small"
            extra={<Button type="link">更多</Button>}
          >
            <Card.Grid className={cx("trendsitem")}>
              <Avatar
                className={cx("trendsitem-avatar")}
                size={32}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div className={cx("trendsitem-info")}>
                <div>
                  <span>威廉</span>在<Button type="link">开源组</Button>
                  创建了项目
                  <Button type="link">Vue</Button>
                </div>
                <div className={cx("trendsitem-date")}>刚刚</div>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("trendsitem")}>
              <Avatar
                className={cx("trendsitem-avatar")}
                size={32}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div className={cx("trendsitem-info")}>
                <div>
                  <span>艾文</span>关注了<Button type="link">威廉</Button>
                </div>
                <div className={cx("trendsitem-date")}>1个小时前</div>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("trendsitem")}>
              <Avatar
                className={cx("trendsitem-avatar")}
                size={32}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div className={cx("trendsitem-info")}>
                <div>
                  <span>克里斯</span>发布了<Button type="link">个人动态</Button>
                </div>
                <div className={cx("trendsitem-date")}>1天前</div>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("trendsitem")}>
              <Avatar
                className={cx("trendsitem-avatar")}
                size={32}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div className={cx("trendsitem-info")}>
                <div>
                  <span>Vben</span>发表文章
                  <Button type="link">如何编写一个Vite插件</Button>
                </div>
                <div className={cx("trendsitem-date")}>2天前</div>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("trendsitem")}>
              <Avatar
                className={cx("trendsitem-avatar")}
                size={32}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div className={cx("trendsitem-info")}>
                <div>
                  <span>皮特</span>回复了<Button type="link">杰克</Button>
                  的问题
                  <Button type="link">如何进行项目优化？</Button>
                </div>
                <div className={cx("trendsitem-date")}>3天前</div>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("trendsitem")}>
              <Avatar
                className={cx("trendsitem-avatar")}
                size={32}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div className={cx("trendsitem-info")}>
                <div>
                  <span>杰克</span>关闭了问题
                  <Button type="link">如何运行项目</Button>
                </div>
                <div className={cx("trendsitem-date")}>1周前</div>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("trendsitem")}>
              <Avatar
                className={cx("trendsitem-avatar")}
                size={32}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div className={cx("trendsitem-info")}>
                <div>
                  <span>威廉</span>发布了<Button type="link">个人动态</Button>
                </div>
                <div className={cx("trendsitem-date")}>1周前</div>
              </div>
            </Card.Grid>
            <Card.Grid className={cx("trendsitem")}>
              <Avatar
                className={cx("trendsitem-avatar")}
                size={32}
                src={`https://joeschmoe.io/api/v1/random?r=${Math.random()}`}
              />
              <div className={cx("trendsitem-info")}>
                <div>
                  <span>威廉</span>推送了代码到
                  <Button type="link">Github</Button>
                </div>
                <div className={cx("trendsitem-date")}>2022-08-01 20:00</div>
              </div>
            </Card.Grid>
          </Card>
        </div>
        <div className={cx("space")} />
        <div className={cx("right")}>
          {/* 快捷导航 */}
          <Card title="快捷导航" size="small">
            <Card.Grid className={cx("navitem")}>
              <Icon
                icon="ant-design:home-outlined"
                width={32}
                style={{ color: "#1fdaca" }}
              />
              <div>首页</div>
            </Card.Grid>
            <Card.Grid className={cx("navitem")}>
              <Icon
                icon="ant-design:appstore-outlined"
                width={32}
                style={{ color: "#bf0c2c" }}
              />
              <div>仪表盘</div>
            </Card.Grid>
            <Card.Grid className={cx("navitem")}>
              <Icon icon="bx:layer" width={32} style={{ color: "#e18525" }} />
              <div>组件</div>
            </Card.Grid>
            <Card.Grid className={cx("navitem")}>
              <Icon
                icon="ant-design:setting-outlined"
                width={32}
                style={{ color: "#3fb27f" }}
              />
              <div>系统管理</div>
            </Card.Grid>
            <Card.Grid className={cx("navitem")}>
              <Icon icon="bx:key" width={32} style={{ color: "#4daf1b" }} />
              <div>权限管理</div>
            </Card.Grid>
            <Card.Grid className={cx("navitem")}>
              <Icon
                icon="ant-design:line-chart-outlined"
                width={32}
                style={{ color: "#00d8ff" }}
              />
              <div>图表</div>
            </Card.Grid>
          </Card>
          <div className={cx("space-vertical")} />
          <Card>
            <img src={scheduleImg} style={{ width: "100%" }} />
          </Card>
          <div className={cx("space-vertical")} />
          {/* 销售统计 */}
          <Card title="销售统计" size="small">
            <div id="CensusChart" style={{ width: "100%", height: 320 }}></div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Workbench;
