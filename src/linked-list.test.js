import { linkedList } from './linked-list.js';

const list = linkedList();
test.skip('append adds nodes in order', () => {
	list.append('horse');
	list.append('fish');

	const head = list.getHead();
	expect(head.value).toBe('horse');
	expect(head.nextNode.value).toBe('fish');
});

test('prepends nodes to head', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');

	const head = list.getHead();
	expect(head.value).toBe('cat');
	expect(head.nextNode.value).toBe('horse');
	expect(head.nextNode.nextNode.value).toBe('fish');
});

test('get the size of the list', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');

	const length = list.size(list);
	expect(length).toBe(3);
});
