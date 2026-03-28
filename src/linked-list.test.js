import { linkedList } from './linked-list.js';

test('append adds nodes in order', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');

	const head = list.getHead();
	expect(head.value).toBe('horse');
	expect(head.nextNode.value).toBe('fish');
});
