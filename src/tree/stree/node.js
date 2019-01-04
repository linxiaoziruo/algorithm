class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
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
				this.left.parent = this;
			} else {
				this.left.insert(node)
			}
		} else if (node.acqValue() > this.value) {
			if (this.right == null) {
				this.right = node
				this.right.parent = this;
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
}

module.exports = Node;