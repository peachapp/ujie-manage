export const menuListAll = [
  {
    parentId: "/",
    id: "dashboard/workbench",
    path: "/dashboard/workbench",
    redirect: "",
    elementPath: "views/dashboard/workbench",
    meta: {
      title: "工作台",
      icon: "HomeOutlined",
      auth: "",
      isMenu: true,
      isShow: true,
      lock: false,
    },
  },
  {
    parentId: "/",
    id: "dashboard/analysis",
    path: "/dashboard/analysis",
    redirect: "",
    elementPath: "views/dashboard/analysis",
    meta: {
      title: "分析页",
      icon: "HomeOutlined",
      auth: "",
      isMenu: true,
      isShow: true,
      lock: false,
    },
  },
];

export const findMenusByParentId = (list, parentId) => {
  if (Array.isArray(list) && list.length) {
    return list.filter((item) => item.parentId === parentId);
  } else {
    return [];
  }
};
