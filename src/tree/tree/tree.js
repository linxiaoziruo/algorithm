const PTree = require('../common/tree');

class Tree extends PTree {
	insertLeft(p, left) {
		p.setLeft(left)
	}

	insertRight(p, right) {
		p.setRight(right)
	}
}

module.exports = Tree;