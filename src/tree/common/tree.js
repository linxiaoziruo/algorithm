class Tree {
	constructor(root) {
		this.root = root;
	}

	acqRoot() {
		return this.root
	}

	find(value) {
		if (this.root != null) return this.root.find(value)
	}

	acqTree() {
		if (this.root != null) return this.root.acqTree();
	}

	middleTraverse(fn) {
		if (this.root != null) return this.root.middleTraverse(fn)
	}

	leftTraverse(fn) {
		if (this.root != null) return this.root.leftTraverse(fn)
	}

	rightTraverse(fn) {
		if (this.root != null) return this.root.rightTraverse(fn)
	}
}

module.exports = Tree;