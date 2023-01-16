import React from "react";
import { Image, Menu } from "antd";
import { Icon } from "@iconify-icon/react";
import logo from "./images/logo.png";
import bg from "./images/bg.png";
import logo2 from "./images/logo2.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import "./style/index.less";
import "./style/super.less";
import "./style/large.less";
import "./style/medium.less";
import "./style/small.less";
import "./style/mini.less";

const menuItems = [
  {
    label: "",
    key: "menu",
    icon: (
      <Icon
        icon="ant-design:appstore-outlined"
        width={28}
        style={{ color: "#fff" }}
      />
    ),
    children: [
      {
        label: "车型总览",
        key: "key1",
      },
      {
        label: "电气化",
        key: "key2",
      },
      {
        label: "购车工具",
        key: "key3",
      },
      {
        label: "车主服务",
        key: "key4",
      },
      {
        label: "品牌天地",
        key: "key5",
      },
    ],
  },
];

function Responsive() {
  return (
    <div id="Responsive" className="responsive-container">
      <div className="part1">
        <div className="part1-box">
          <div className="header-shadow">
            <div className="header">
              <div className="header-left">
                <Image preview={false} width={282} src={logo} />
              </div>
              <div className="header-right">
                <div className="menu-h">
                  <div className="menu-h-item">车型总览</div>
                  <div className="menu-h-item">电气化</div>
                  <div className="menu-h-item">购车工具</div>
                  <div className="menu-h-item">车主服务</div>
                  <div className="menu-h-item">品牌天地</div>
                </div>
                <div className="menu-v">
                  <Menu width="100%" mode="horizontal" items={menuItems} />
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="content-top">
              <div className="content-title">2022 雷克萨斯全球设计大奖</div>
              <div className="content-label">新闻资讯</div>
            </div>
            <div className="content-bottom">
              2022 LEXUS雷克萨斯全球设计大奖
              <br />
              最高奖得主正式公布
              <br />
              Poh Yun Ru创作的
              <br />
              “记忆倒带”斩获最高奖殊荣
            </div>
          </div>
        </div>

        <div className="bg">
          <Image preview={false} src={bg} />
        </div>
      </div>

      <div className="part2">
        <Image rootClassName="logo2" preview={false} src={logo2} />
        <div className="content">
          <div className="content-top">
            近日，LEXUS雷克萨斯正式宣布2022全球设计大奖 最高奖得主，Poh
            YunRu所创作的“记忆倒带
            （Rewind）”从57个国家和地区的选手提交的1,726项
            参赛作品中脱颖而出，摘得2022第十届LEXUS雷克
            萨斯全球设计大奖最高奖桂冠。“记忆倒带
            （Rewind）”旨在通过先进科技，为失智老人等受记
            忆力障碍困扰的人群提供帮助，帮助他们唤醒记忆，构建更美好的未来。
          </div>
          <div className="content-bottom">
            LEXUS雷克萨斯全球设计大奖最高奖得主Poh Yun
            Ru表示：“我希望‘记忆倒带（Rewind）’能帮助更多人
            改善他们的生活，我非常感激LEXUS雷克萨斯全球设
            计大奖让我离这个目标又近了一步。能够获此殊荣，
            离不开大家给予的巨大支持，包括我的导师、团队内
            的工程师、程序员、医疗保健专家以及参与这一项目
            的广大用户。LEXUS雷克萨斯全球设计大奖让我们有
            机会将创意过程转化为实际的产品，这非常了不起。
            能与世界各地充满激情的设计师相聚于此，相互交流
            学习，令我备受鼓舞。这是一场意义深远、充满启迪
            的创意之旅，我很高兴能够通过创意与设计和大家一起构建更美好的未来。”
          </div>
        </div>
        <Image rootClassName="img1" preview={false} src={img1} />
      </div>

      <div className="part3">
        <div className="content">
          <div className="content-label1">
            LEXUS雷克萨斯全球设计大奖不同于其他设计赛事，6位决赛入围选手将接受4位蜚声国际的专业导师亲自指导。备受尊敬的精英导师们来自不同行业背景和专业领
            域，与决赛入围选手进行一对一的沟通交流，选手们将基于导师们的个性化设计指导，充分激发各自的创意潜能，精心打造并持续完善各自的原型设计作品。
            LEXUS雷克萨斯全球设计大奖已连续举办九届，共呈现90件独具创意的作品，为139名独立设计师和设计团队提供了展示各自才华和天赋的广阔平台。参赛者均致力于
            借助设计的力量，构建更美好未来。
          </div>
          <div className="content-title">雷克萨斯全球设计大奖赛历程</div>
          <div className="content-label2">
            经过筛选在2021年12月最终确定6名入围者，他们将与指定的导师一起设计原型作品参加大奖赛评选活动，随后宣布大奖赛冠军。完整的计划时间表如下。
          </div>
        </div>
        <div className="timeline">
          <div className="time-item">
            <div className="circle" />
            <div className="time-content">
              <div className="time-date">2021年11月</div>
              <div className="time-label">
                入围者筛选环节 评审以线上会议的形式筛选作品 和选出优秀参赛者。
              </div>
            </div>
          </div>
          <div className="time-item">
            <div className="circle" />
            <div className="time-content">
              <div className="time-date">2021年12月</div>
              <div className="time-label">
                确定入围者 最终筛选确定6名入围者。
              </div>
            </div>
          </div>
          <div className="time-item time-item-center">
            <div className="circle-outter">
              <div className="circle-inner">2022年1月</div>
            </div>
            <div className="time-content">
              <div className="time-label">导师计划 6名入围者接受导师指导。</div>
            </div>
          </div>
          <div className="time-item">
            <div className="circle" />
            <div className="time-content">
              <div className="time-date">2022年1月底</div>
              <div className="time-label">
                公布入围者名单 在雷克萨斯设计奖网站、新闻稿和
                社交媒体上公布6名入围者名单。
              </div>
            </div>
          </div>
          <div className="time-item">
            <div className="circle" />
            <div className="time-content">
              <div className="time-date">2022年1月</div>
              <div className="time-label">导师计划 6名入围者接受导师指导。</div>
            </div>
          </div>
        </div>
      </div>

      <div className="part4">
        <div className="part4-item part4-item1">
          <div className="part4-left">
            <div className="title">G路径检索服务</div>
            <div className="label">
              实时把握路况，避开拥堵路段，寻找最佳路径，减少堵车烦恼，并接通中心话务员，语音设定目的地；点击车载器界面G路径按钮，即可得到最优路径。
              截至2013年5月，此项服务已在北京、上海、广州、深圳、天津、沈阳、南京、成都、重庆、宁波、长沙、苏州、福州、珠海、东莞、长春、武汉、杭州、无锡、厦门、中山、青岛、太原、石家庄、泉州、台州、昆明、佛山28个城市开通。全国其他各大城市也将陆续开通此项服务。
            </div>
          </div>
          <Image rootClassName="img2" preview={false} src={img2} />
        </div>
        <div className="part4-item part4-item2">
          <div>
            <Image rootClassName="img3" preview={false} src={img3} />
            <div className="label">
              *预订相关费用将由用户自行承担。目前高尔夫球场预订服务已签约和确定签约的球场多达百余家，此项服务已在北京、上海、江苏、浙江、山东、江西、广东、海南、云南、广西、重庆、四川、河北、河南等多个城市及省份内开通。全国其他各大城市也将陆续开通此项服务。
            </div>
          </div>
          <div className="part4-right">
            <div className="title">G路径检索服务</div>
            <div className="label">
              实时把握路况，避开拥堵路段，寻找最佳路径，减少堵车烦恼，并接通中心话务员，语音设定目的地；点击车载器界面G路径按钮，即可得到最优路径。
              截至2013年5月，此项服务已在北京、上海、广州、深圳、天津、沈阳、南京、成都、重庆、宁波、长沙、苏州、福州、珠海、东莞、长春、武汉、杭州、无锡、厦门、中山、青岛、太原、石家庄、泉州、台州、昆明、佛山28个城市开通。全国其他各大城市也将陆续开通此项服务。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responsive;
