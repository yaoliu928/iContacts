export const handleMultiSelects = (state, e) => {
	const { name, id, value } = e.target;
	const arr =
		state[name]
			? state[id].filter((el) => el !== value)
			: state[id].concat(value);
	return arr;
};

export const handleCardClass = (props) => {
	const { activeId, id } = props;
	const className =
		activeId === id
			? 'single-card--active'
			: '';
	return className;
};

export const handleDeleteActive = (arr, state, id) => {
	const { activeId, detail } = state;
	const content =
		id === activeId
			? arr[0]
			: detail;
	return content;
};

export const handleActive = (arr, state, id) => {
	const { activeId } = state;
	const content =
		id === activeId
			? arr[0].id
			: activeId;
	return content;
};
