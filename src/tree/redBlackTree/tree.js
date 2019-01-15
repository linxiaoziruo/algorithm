class Tree {
	constructor() {
		this.root = null;
	}

	insert(node) {
		if (this.root == null) {
			this.root = node;
		} else {
			node.setColor('red');
			this.root.insert(node);
		}

		this.balance();
	}

	balance() {
		let x = null;
		this.root.middleTraverse(function(node) {
			let parent = node.acqParent();
			if (parent != null) {
				if (node.acqColor() == 'red' && parent.acqColor() == 'red') {
					x = node;
				}
			}
		});

		if (x == null) return;

		let parent = x.acqParent();

		let brother = null;
		if (x.acqIsLeft() == 1) {
			brother = parent.acqRight();
		} else {
			brother = parent.acqLeft();
		}

		let grandFather = parent.acqParent();

		let uncle = null;
		if (parent.acqIsLeft() == 1) {
			uncle = grandFather.acqRight();
		} else {
			uncle = grandFather.acqLeft();
		}

		if (uncle != null && uncle.acqColor() == 'red' && parent.acqColor() == 'red') {
			parent.setColor('black');
			uncle.setColor('black');
			grandFather.setColor('red');
		} else if (parent.acqColor() == 'red' && x.acqIsLeft() == 0) {
			if (uncle == null || (uncle != null && uncle.acqColor() == 'black')) {
				let xl = x.acqLeft();
				let xp = x.acqParent();
				let xpp = xp.acqParent();

				if (xp.acqIsLeft() == 1) {
					xpp.setLeft(x);
				} else if (xp.acqIsLeft() == 0) {
					xpp.setRight(x);
				}

				x.setParent(xpp);
				x.setLeft(xp);

				xp.setParent(x);
				xp.setRight(xl);

				if (xl != null) {
					xl.setParent(xp);
				}
			}
		} else if (parent.acqColor() == 'red' && x.acqIsLeft() == 1) {

			if (uncle == null || (uncle != null && uncle.acqColor() == 'black')) {
				let xp = x.acqParent();
				let xpr = xp.acqRight()
				let xpp = xp.acqParent();
				let xppp = xpp.acqParent();

				if (xpp.acqIsLeft() == 1) {
					xppp.setLeft(xp);
				} else if (xpp.acqIsLeft() == 0) {
					xppp.setRight(xp);
				} else if (xpp.acqIsLeft() == null) {
					this.root = xp;
				}

				xp.setParent(xppp);
				xp.setRight(xpp);
				xp.setColor('black');

				xpp.setParent(xp);
				xpp.setLeft(xpr);
				xpp.setColor('red');

				if (xpr != null) {
					xpr.setParent(xpp);
				}
			}
		}

		this.balance();
	}

	acqTree() {
		return this.root.acqTree();
	}
}

module.exports = Tree;