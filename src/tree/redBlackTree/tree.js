const PTree = require('../common/tree');
const Node = require('./node');

class Tree extends PTree {
	constructor() {
		super();
		this.balcane_num = 0;
	}

	insert(node) {
		if (this.root == null) {
			this.root = node;
		} else {
			node.setColor('red');
			this.root.insert(node);
		}

		this._balance();
	}

	_balance(x) {
		//----------------封装x-------------------

		x = this._acqX(x);
		if (x == null) return;

		this.balcane_num += 1;

		//----------------关键节点-----------------

		let parent = x.acqParent();
		let brother = null;
		let uncle = null;
		let grandFather = null;

		if (parent != null) {
			if (x.acqIsLeft() == 1) {
				brother = parent.acqRight();
			} else {
				brother = parent.acqLeft();
			}

			grandFather = parent.acqParent();

			if (grandFather != null) {
				if (parent.acqIsLeft() == 1) {
					uncle = grandFather.acqRight();
				} else {
					uncle = grandFather.acqLeft();
				}
			}
		}

		//----------------遍历各种旋转情况-----------

		if (x.isRoot()) {
			x.setColor('black');
		} else if (uncle != null && uncle.acqColor() == 'red' && parent.acqColor() == 'red') {
			parent.setColor('black');
			uncle.setColor('black');
			grandFather.setColor('red');

			this._balance(grandFather);
		} else if (parent.acqColor() == 'red' && (uncle == null || (uncle != null && uncle.acqColor() == 'black'))) {
			let isLeft = x.acqParent().acqIsLeft() == 1;
			let isSubLeft = x.acqIsLeft() == 1;

			if (isLeft && isSubLeft) {
				let p = x.acqParent();
				let pr = p.acqRight()
				let g = p.acqParent();
				let gp = g.acqParent();

				if (g.acqIsLeft() == 1) {
					gp.setLeft(p);
				} else if (g.acqIsLeft() == 0) {
					gp.setRight(p);
				} else if (g.acqIsLeft() == null) {
					this.setRoot(p);
				}

				p.setParent(gp);
				p.setRight(g);
				p.setColor('black');

				g.setLeft(pr);
				g.setColor('red');
			}

			if (isLeft && !isSubLeft) {
				let xl = x.acqLeft();
				let p = x.acqParent();
				let g = p.acqParent();

				g.setLeft(x);

				x.setLeft(p);

				p.setRight(xl);

				this._balance(p);
			}

			if (!isLeft && isSubLeft) {
				let xr = x.acqRight();
				let p = x.acqParent();
				let g = p.acqParent();

				g.setRight(x);

				x.setRight(p);

				p.setLeft(xr);

				this._balance(p);
			}

			if (!isLeft && !isSubLeft) {
				let p = x.acqParent();
				let pl = p.acqLeft()
				let g = p.acqParent();
				let gp = g.acqParent();

				if (g.acqIsLeft() == 1) {
					gp.setLeft(p);
				} else if (g.acqIsLeft() == 0) {
					gp.setRight(p);
				} else if (g.acqIsLeft() == null) {
					this.setRoot(p);
				}

				p.setParent(gp);
				p.setLeft(g);
				p.setColor('black');

				g.setRight(pl);
				g.setColor('red');
			}
		}
	}

	_acqX(x) {
		if (x == null) {
			this.root.middleTraverse(function(node) {
				let parent = node.acqParent();
				if (parent != null) {
					if (node.acqColor() == 'red' && parent.acqColor() == 'red') {
						x = node;
					}
				}
			});
		}

		return x;
	}

	acqBalanceNum() {
		return this.balcane_num;
	}
}

module.exports = Tree;