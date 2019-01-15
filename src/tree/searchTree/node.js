const PNode = require('../common/node');

class Node extends PNode {
	constructor(value) {
		super();
		this.value = value;
		this.left = null;
		this.right = null;
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
}

module.exports = Node;