const PNode = require('../common/node');

class Node extends PNode {
	constructor(value) {
		super();
		this.value = value;
	}
}

module.exports = Node;