const filterObj = function filterObj(obj, predicate) {
  const result = {};

  Object.keys(obj).forEach((key) => {
    if (!predicate(obj[key])) {
      result[key] = obj[key];
    }
  });
  return result;
};

export { filterObj as default };
