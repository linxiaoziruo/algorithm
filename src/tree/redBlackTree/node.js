const PNode = require('../common/node');

class Node extends PNode {
	constructor(value) {
		super();
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