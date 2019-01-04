class Node {
	constructor(value) {
		this.value = value;
	}

	isLeaf() {
		return this.left == null && this.right == null
	}

	acqValue() {
		return this.value;
	}

	insertLeft(node) {
		this.left = node
		node.parent = this;
	}

	insertRight(node) {
		this.right = node;
		node.parent = this;
	}

	getTree() {
		if (this.isLeaf()) {
			return this.value;
		} else {
			return {
				value: this.value,
				left: this.left ? this.left.getTree() : undefined,
				right: this.right ? this.right.getTree() : undefined
			}
		}
	}

	leftTraverse(fn) {
		let rs;
		if (this.isLeaf()) {
			rs = fn(this.value)
		} else {
			if (this.left) {
				this.left.leftTraverse(fn);
			}

			rs = fn(this.value)

			if (this.right) {
				this.right.leftTraverse(fn);
			}
		}

		return rs;
	}

	rightTraverse(fn) {
		let rs;
		if (this.isLeaf()) {
			rs = fn(this.value)
		} else {

			if (this.right) {
				this.right.rightTraverse(fn);
			}

			rs = fn(this.value)

			if (this.left) {
				this.left.rightTraverse(fn);
			}
		}

		return rs;
	}
}

module.exports = Node;