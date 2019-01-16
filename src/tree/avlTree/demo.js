const Tree = require('./tree');
const Node = require('./node');

const array = [14, 5, 6, 2, 7, 3, 23, 25, 12, 15, 11, 27, 28, 29, 30, 31, 32, 33]
const tree = new Tree()

array.forEach(node => {
	const nodeIns = new Node(node);
	tree.insert(nodeIns);
	console.log(node, tree.acqBalanceNum());
});

// console.log(JSON.stringify(tree.acqTree()))

// console.log(tree.acqBalanceNum());