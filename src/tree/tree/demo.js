const Node = require('./node');
const Tree = require('./tree');

const rootNode = new Node(100);
const tree = new Tree(rootNode);

tree.insertLeft(rootNode, new Node(200));
tree.insertRight(rootNode, new Node(300));

// console.log(tree.getTree());

// tree.leftTraverse(function(value) {
// 	console.log(value)
// });

tree.rightTraverse(function(value) {
	console.log(value)
});