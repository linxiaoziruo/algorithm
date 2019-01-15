const PTree = require('../common/tree');

class Tree extends PTree {
	insert(node) {
		if (this.root == null) {
			this.root = node;
		} else {
			this.root.insert(node);
		}
	}

	delete(node) {
		const rootNode = node.right;
		const minNode = rootNode.findMinNode();
		this.root.setValue(minNode.acqValue());
		minNode.parent.setLeft(null);
	}
}

module.exports = Tree;