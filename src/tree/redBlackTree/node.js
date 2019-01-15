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
}

module.exports = Node;