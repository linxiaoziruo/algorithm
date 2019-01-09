class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.tree = null;
		this.balanceFactor = 0;
	}

	setTree(tree) {
		this.tree = tree;
	}

	acqTree() {
		return this.tree;
	}

	acqValue() {
		return this.value
	}

	setValue(value) {
		this.value = value;
	}

	acqLeft() {
		return this.left
	}

	setLeft(node) {
		this.left = node;
	}

	acqRight() {
		return this.right
	}

	setRight(node) {
		this.right = node;
	}

	isLeaf() {
		return this.left == null && this.right == null
	}

	insert(node) {
		if (node.acqValue() < this.value) {
			if (this.left == null) {
				this.left = node
				this.left.setParent(this);
			} else {
				this.left.insert(node)
			}
		} else if (node.acqValue() > this.value) {
			if (this.right == null) {
				this.right = node
				this.right.setParent(this);
			} else {
				this.right.insert(node)
			}
		}
	}

	findMinNode() {
		if (this.left != null) {
			return this.left.findMin();
		} else {
			return this;
		}
	}

	find(value) {
		if (value == this.value) return this;

		if (value < this.value) return this.left ? this.left.find(value) : undefined

		if (value > this.value) return this.right ? this.right.find(value) : undefined
	}

	toString() {
		const parent = this.parent ? this.parent.acqValue() : undefined;
		const left = this.left ? this.left.acqValue() : undefined;
		const right = this.right ? this.right.acqValue() : undefined;

		return `this: ${this.value}; parent: ${parent}; left: ${left}; right: ${right};`
	}

	middleTraverse(fn) {
		let rs;
		if (this.isLeaf()) {
			rs = fn(this)
		} else {
			rs = fn(this)

			if (this.left) {
				this.left.leftTraverse(fn);
			}

			if (this.right) {
				this.right.leftTraverse(fn);
			}
		}

		return rs;
	}

	leftTraverse(fn) {
		let rs;
		if (this.isLeaf()) {
			rs = fn(this)
		} else {
			rs = fn(this)

			if (this.left) {
				this.left.leftTraverse(fn);
			}

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

	isBalance() {
		return Math.abs(this.balanceFactor) <= 1
	}

	acqHeight() {
		let height = 1,
			leftHeight = 0,
			rightHeight = 0;

		if (this.left != null) {
			// console.log('left: ', this.left.acqValue());
			leftHeight = this.left.acqHeight();
		}

		if (this.right != null) {
			// console.log('right: ', this.right.acqValue());
			rightHeight = this.right.acqHeight();
		}

		return height + (leftHeight >= rightHeight ? leftHeight : rightHeight);;
	}

	calFactor() {
		let leftHeight = 0,
			rightHeight = 0;

		if (this.left != null) {
			leftHeight = this.left.acqHeight();
			this.left.calFactor();
		}

		if (this.right != null) {
			rightHeight = this.right.acqHeight();
			this.right.calFactor();
		}

		this.balanceFactor = leftHeight - rightHeight;
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

	acqParent() {
		return this.parent;
	}

	acqBalanceFactor() {
		return this.balanceFactor;
	}

	setParent(parent) {
		this.parent = parent;
	}

	isRoot() {
		return this.parent == null;
	}

	acqTree() {
		if (this.isLeaf()) {
			return this.value;
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