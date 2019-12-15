export const handleMultiSelects = (state, e) => {
  const { name, id, value } = e.target;
  const arr = state[name]
    ? state[id].filter((el) => el !== value)
    : state[id].concat(value)
  return arr;
};

export const handleCardClass = (props) => {
  const { activeId, id } = props;
  const className = activeId === id
    ? 'single-card--active'
    : '';
  return className;
}