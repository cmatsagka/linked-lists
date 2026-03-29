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

test('last value of an empty list is undefined', () => {
	const list = linkedList();
	expect(list.tail()).toBe(undefined);
});

test('last value of list', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');

	const last = list.tail();
	expect(last.value).toBe('fish');
});

test('return node value at index', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');
	expect(list.at(0).value).toBe('cat');
	expect(list.at(1).value).toBe('horse');
	expect(list.at(2).value).toBe('fish');
});

test('return undefined for out of bounds index', () => {
	const list = linkedList();
	list.append('fish');
	expect(list.at(5)).toBe(undefined);
});

test('pop head node from empty list and return undefined', () => {
	const list = linkedList();
	expect(list.pop()).toBe(undefined);
});

test('pop head node and return value', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');
	expect(list.pop().value).toBe('cat');
});

test('pop head node and return value', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');
	list.prepend('dog');

	expect(list.pop().value).toBe('dog');
});

test('return true or false if list contains value', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');
	list.prepend('dog');

	expect(list.contains('dog')).toEqual(true);
	console.log(list.contains('dog'));
	expect(list.contains('mouse')).toEqual(false);
	console.log(list.contains('mouse'));
});

test('return the index of the node that contains value', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');
	list.prepend('dog');

	expect(list.findIndex('cat')).toBe(1);
	expect(list.findIndex('fish')).toBe(3);
	expect(list.findIndex('dog')).toBe(0);
	expect(list.findIndex('mouse')).toBe(-1);
});

test('represent node list as string', () => {
	const list = linkedList();
	list.append('horse');
	list.append('fish');
	list.prepend('cat');
	list.prepend('dog');

	expect(list.toString()).toEqual(
		`(dog) -> (cat) -> (horse) -> (fish) -> null`
	);
});

test('represent empty node list as empty sting', () => {
	const list = linkedList();

	expect(list.toString()).toBe('');
});

test('insertAt: inserts multiple values at a specific index', () => {
	const list = linkedList();
	list.append('A');
	list.append('D');

	list.insertAt(1, 'B', 'C');

	expect(list.toString()).toBe('(A) -> (B) -> (C) -> (D) -> null');
});

test('insertAt: throws RangeError if index is out of bounds', () => {
	const list = linkedList();
	list.append('A');

	expect(() => list.insertAt(5, 'Z')).toThrow(RangeError);
});
