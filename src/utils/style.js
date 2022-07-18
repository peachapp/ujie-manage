// 为避免类名冲突，类名加前缀
export const autoPrefix = (prefix = "") => {
  return function (className) {
    return [prefix, className].filter(Boolean).join("-");
  };
};
