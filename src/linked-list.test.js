import { linkedList } from './linked-list.js';

test.skip('append adds nodes in order', () => {
	const list = linkedList();
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

	const count = list.size();
	expect(count).toBe(3);
});

test('size of an empty list is 0', () => {
	const list = linkedList();
	expect(list.size()).toBe(0);
});

test('head value of an empty list is undefined', () => {
	const list = linkedList();
	expect(list.getHead()).toBe(undefined);
});

test('get head value of list', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');

	const head = list.getHead();
	expect(head.value).toBe('cat');
});
