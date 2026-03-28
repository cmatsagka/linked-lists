import { node } from './node.js';

export const linkedList = () => {
	let listHead = null;

	const append = (value) => {
		let newNode = node(value);

		if (listHead === null) {
			listHead = newNode;
			return;
		}

		let tmp = listHead;
		while (tmp.nextNode !== null) {
			tmp = tmp.nextNode;
		}
		tmp.nextNode = newNode;
	};

	const getHead = () => listHead;

	return { append, getHead };
};
