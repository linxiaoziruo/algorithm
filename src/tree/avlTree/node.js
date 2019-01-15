const PNode = require('../common/node');

class Node extends PNode {
	constructor(value) {
		super();
		this.value = value;
		this.left = null;
		this.right = null;
		this.tree = null;
		this.balanceFactor = 0;
	}

	findMinNode() {
		if (this.left != null) {
			return this.left.findMinNode();
		} else {
			return this;
		}
	}

	toString() {
		const parent = this.parent ? this.parent.acqValue() : undefined;
		const left = this.left ? this.left.acqValue() : undefined;
		const right = this.right ? this.right.acqValue() : undefined;

		return `this: ${this.value}; parent: ${parent}; left: ${left}; right: ${right};`
	}

	isBalance() {
		return Math.abs(this.balanceFactor) <= 1
	}

	acqHeight() {
		let height = 1,
			leftHeight = 0,
			rightHeight = 0;

		if (this.left != null) {
			leftHeight = this.left.acqHeight();
		}

		if (this.right != null) {
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

	acqBalanceFactor() {
		return this.balanceFactor;
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