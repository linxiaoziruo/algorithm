class Node {
	constructor(value) {
		this.value = value;
		this.color = 'black';
		this.left = null;
		this.right = null;
		this.parent = null;
		this.isLeft = null;
	}

	setColor(color) {
		this.color = color;
	}

	acqColor() {
		return this.color;
	}

	acqValue() {
		return this.value;
	}

	setIsLeft(isLeft) {
		this.isLeft = isLeft;
	}

	acqIsLeft() {
		return this.isLeft;
	}

	acqParent() {
		return this.parent;
	}

	setParent(parent) {
		this.parent = parent;
	}

	acqLeft() {
		return this.left
	}

	setLeft(left) {
		this.left = left
		if (left != null) this.left.setIsLeft(1);
	}

	acqRight() {
		return this.right
	}

	setRight(right) {
		this.right = right;
		if (right != null) this.right.setIsLeft(0);
	}

	insert(node) {
		if (node.acqValue() < this.value) {
			if (this.left == null) {
				this.setLeft(node);
				this.left.setParent(this);
			} else {
				this.left.insert(node)
			}
		} else if (node.acqValue() > this.value) {
			if (this.right == null) {
				this.setRight(node);
				this.right.setParent(this);
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

	isLeaf() {
		return this.left == null && this.right == null
	}

	acqTree() {
		if (this.isLeaf()) {
			return {
				value: this.value,
				color: this.color
			}
		} else {
			return {
				value: this.value,
				color: this.color,
				left: this.left ? this.left.acqTree() : undefined,
				right: this.right ? this.right.acqTree() : undefined
			}
		}
	}
}

module.exports = Node;