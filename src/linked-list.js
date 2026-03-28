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

	const getHead = () => {
		if (listHead === null) {
			return undefined;
		}
		return listHead;
	};

	const prepend = (value) => {
		listHead = node(value, listHead);
	};

	const size = () => {
		let count = 0;
		let tmp = listHead;
		while (tmp !== null) {
			count++;
			tmp = tmp.nextNode;
		}
		return count;
	};

	const tail = () => {
		let tmp = listHead;
		let last = undefined;

		while (tmp !== null) {
			last = tmp;
			tmp = tmp.nextNode;
		}
		return last;
	};

	const at = (index) => {
		let tmp = listHead;

		for (let i = 0; i < index; i++) {
			if (tmp === null) return undefined;
			tmp = tmp.nextNode;
		}
		return tmp || undefined;
	};

	const pop = () => {
		if (listHead === null) return undefined;
		let tmp = listHead;
		listHead = tmp.nextNode;
		return tmp;
	};

	const contains = (value) => {
		let tmp = listHead;

		while (tmp !== null) {
			if (tmp.value === value) {
				return true;
			}
			tmp = tmp.nextNode;
		}
		return false;
	};

	const findIndex = (value) => {
		let tmp = listHead;
		let count = 0;

		while (tmp !== null) {
			if (tmp.value === value) {
				return count;
			}
			tmp = tmp.nextNode;
			count++;
		}
		return -1;
	};

	return {
		append,
		getHead,
		prepend,
		size,
		tail,
		at,
		pop,
		contains,
		findIndex,
	};
};
