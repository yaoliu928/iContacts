export const addData = (arr, state) => {
  arr.push(state);
};
export const deleteData = (arr, deleteId) => {
  arr.splice(arr.findIndex(({ id }) => id === deleteId), 1);
};
export const getData = (arr, getId) => {
  const content = arr.find(({ id }) => id === getId);
  return content;
};
