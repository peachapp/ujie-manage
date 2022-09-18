// import * as echarts from "echarts";

const baseOption = {
  grid: {
    left: "50px",
    right: "20px",
    bottom: "30px",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
};

// 工作台-销售统计
export const salesStatisticsOption = {
  ...baseOption,
  legend: {
    data: ["浏览量", "销售额"],
  },
  xAxis: {
    type: "category",
    data: ["2017", "2018", "2019", "2020", "2021", "2022"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "浏览量",
      type: "bar",
      data: [8976, 7459, 6004, 12973, 9863, 5443],
    },
    {
      name: "销售额",
      type: "bar",
      data: [10976, 8456, 6759, 7673, 11232, 6756],
    },
  ],
};

// 分析页-流量趋势
export const flowTrendOption = {
  ...baseOption,
  legend: {
    data: ["浏览量", "成交量"],
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "浏览量",
      type: "line",
      smooth: true,
      areaStyle: {
        opacity: 0.8,
      },
      data: [
        111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000, 66666,
        44444, 22222, 11111, 4000, 2000, 500, 333,
      ],
    },
    {
      name: "成交量",
      type: "line",
      smooth: true,
      areaStyle: {
        opacity: 0.8,
      },
      data: [
        33, 66, 88, 333, 3333, 5000, 18000, 3000, 1200, 1300, 2200, 11000, 2221,
        1201, 390, 198, 60, 30,
      ],
    },
  ],
};

// 分析页-访问量
export const visitsOption = {
  ...baseOption,
  xAxis: {
    type: "category",
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        3000, 2000, 3333, 5000, 3200, 4200, 3200, 2100, 3000, 5100, 6000, 3200,
      ],
    },
  ],
};

// 分析页-转化率
export const conversionRateOption = {
  ...baseOption,
  tooltip: {
    trigger: "axis",
  },
  legend: {
    bottom: "0",
    right: "12px",
    data: ["访问", "购买"],
  },
  radar: {
    indicator: [
      { name: "电脑" },
      { name: "充电器" },
      { name: "耳机" },
      { name: "手机" },
      { name: "Ipad" },
      { name: "笔记本" },
    ],
  },
  series: [
    {
      type: "radar",
      data: [
        {
          name: "访问",
          value: [90, 50, 86, 40, 50, 20],
          symbol: "none",
          lineStyle: {
            width: 0,
          },
          areaStyle: {
            opacity: 0.8,
          },
        },
        {
          name: "购买",
          value: [70, 75, 70, 76, 20, 85],
          symbol: "none",
          lineStyle: {
            width: 0,
          },
          areaStyle: {
            opacity: 0.8,
          },
        },
      ],
    },
  ],
};

// 分析页-访问来源
export const accessSourceOption = {
  ...baseOption,
  tooltip: {
    trigger: "item",
  },
  legend: {
    bottom: "0",
    left: "center",
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "24",
          fontWeight: "bold",
        },
      },
      data: [
        { value: 1048, name: "搜索引擎" },
        { value: 735, name: "直接访问" },
        { value: 580, name: "邮件营销" },
        { value: 484, name: "联盟广告" },
      ],
    },
  ],
};

// 成交占比
export const dealRatioOption = {
  ...baseOption,
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "成交占比",
      type: "pie",
      radius: "50%",
      data: [
        { value: 335, name: "化妆品" },
        { value: 310, name: "服装" },
        { value: 274, name: "家居" },
        { value: 400, name: "电子产品" },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    },
  ],
};
