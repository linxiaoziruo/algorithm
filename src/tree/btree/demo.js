const Node = require('./node');

const fn = function(value) {
	console.log(value)
};

const node1 = new Node({
	value: 100,
	fn: fn
});

const node2 = new Node({
	value: 200,
	fn: fn
});

const node3 = new Node({
	value: 300,
	left: node1,
	right: node2,
	fn: fn
});

const node4 = new Node({
	value: 400,
	left: node1,
	right: node2,
	fn: fn
});

const root = new Node({
	value: 500,
	left: node3,
	right: node4,
	fn: fn
});

console.log(root.getTree());

root.leftTraverse(fn);
root.rightTraverse(fn);