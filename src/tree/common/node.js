class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.parent = null;
		this.isLeft = null;
	}

	acqValue() {
		return this.value;
	}

	setValue(value) {
		this.value = value;
	}

	acqLeft() {
		return this.left;
	}

	setLeft(left) {
		if (left != null) {
			left.setIsLeft(1);
			left.setParent(this);
		}

		this.left = left;
	}

	acqRight() {
		return this.right
	}

	setRight(right) {
		if (right != null) {
			right.setIsLeft(0);
			right.setParent(this);
		}

		this.right = right;
	}

	acqIsLeft() {
		return this.isLeft;
	}

	setIsLeft(isLeft) {
		this.isLeft = isLeft;
	}

	acqParent() {
		return this.parent;
	}

	setParent(parent) {
		this.parent = parent;
	}

	insert(node) {
		if (node.acqValue() < this.value) {
			if (this.left == null) {
				this.setLeft(node);
			} else {
				this.left.insert(node)
			}
		} else if (node.acqValue() > this.value) {
			if (this.right == null) {
				this.setRight(node);
			} else {
				this.right.insert(node)
			}
		}
	}

	middleTraverse(fn) {
		let rs;
		if (this.isLeaf()) {
			rs = fn(this)
		} else {
			rs = fn(this)

			if (this.left) {
				this.left.middleTraverse(fn);
			}

			if (this.right) {
				this.right.middleTraverse(fn);
			}
		}

		return rs;
	}

	leftTraverse(fn) {
		let rs;
		if (this.isLeaf()) {
			rs = fn(this)
		} else {
			if (this.left) {
				this.left.leftTraverse(fn);
			}

			rs = fn(this)

			if (this.right) {
				this.right.leftTraverse(fn);
			}
		}

		return rs;
	}

	rightTraverse(fn) {
		let rs;
		if (this.isLeaf()) {
			rs = fn(this)
		} else {

			if (this.right) {
				this.right.rightTraverse(fn);
			}

			rs = fn(this)

			if (this.left) {
				this.left.rightTraverse(fn);
			}
		}

		return rs;
	}

	find(value) {
		if (value == this.value) return this;

		if (value < this.value) return this.left ? this.left.find(value) : undefined

		if (value > this.value) return this.right ? this.right.find(value) : undefined
	}

	isLeaf() {
		return this.left == null && this.right == null
	}

	acqLeaf() {
		const leafs = [];

		if (this.isLeaf()) {
			leafs.push(this);
		} else {
			if (this.left != null) leafs.push(this.left.acqLeaf())
			if (this.right != null) leafs.push(this.right.acqLeaf())
		}

		return leafs;
	}

	isRoot() {
		return this.parent == null;
	}

	acqTree() {
		if (this.isLeaf()) {
			return {
				value: this.value
			}
		} else {
			return {
				value: this.value,
				left: this.left ? this.left.acqTree() : undefined,
				right: this.right ? this.right.acqTree() : undefined
			}
		}
	}
}

module.exports = Node;