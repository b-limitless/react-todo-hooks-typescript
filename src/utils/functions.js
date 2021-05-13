export const getFileByName = (data, filedName) => {
  const getAttrs = data.map((row) => {
    const parseRow = JSON.parse(row);
    const getRows = parseRow.filter((item) => {
      if (item.filedName === filedName) {
        return true;
      }
    });
    return getRows;
  });
  
  const getGraphData = getAttrs.map((item) => {
    return item[0];
  });
  return getGraphData;
};
