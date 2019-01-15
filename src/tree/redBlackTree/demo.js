const Tree = require('./tree');
const Node = require('./node');

const array = [14, 5, 6, 2, 7, 3, 23]
const tree = new Tree()

array.forEach(node => {
	const nodeIns = new Node(node);
	tree.insert(nodeIns);
});

console.log(JSON.stringify(tree.acqTree()))