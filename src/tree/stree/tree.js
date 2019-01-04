class Tree {
	constructor() {
		this.root = null;
	}

	acqRoot() {
		return this.root
	}

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

	find(value) {
		return this.root.find(value)
	}
}

module.exports = Tree;