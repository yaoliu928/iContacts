export const addData = (arr, state) => {
  arr.push(state);
};
export const deleteData = (arr, deleteId) => {
  arr.splice(arr.findIndex(({ id }) => id === deleteId), 1);
};
