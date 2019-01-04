class Tree {
	constructor(node) {
		this.root = node;
	}

	insertLeft(p, left) {
		p.insertLeft(left)
	}

	insertRight(p, right) {
		p.insertRight(right)
	}

	getTree() {
		return this.root.getTree();
	}

	leftTraverse(fn) {
		return this.root.leftTraverse(fn)
	}

	rightTraverse(fn) {
		return this.root.rightTraverse(fn)
	}
}

module.exports = Tree;