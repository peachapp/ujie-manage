export const menuListAll = [
  {
    parentId: "/",
    id: "home",
    path: "/home",
    redirect: "",
    elementPath: "views/home",
    meta: {
      title: "首页",
      icon: "HomeOutlined",
      needLogin: true,
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
