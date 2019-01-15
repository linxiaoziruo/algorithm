const PTree = require('../common/tree');

class Tree extends PTree {
	insert(node) {
		if (this.root == null) {
			this.root = node;
		} else {
			this.root.insert(node);
		}

		this._recal();
		this._balance(node);
		this._recal();
	}

	delete(node) {
		const rootNode = node.right;
		const minNode = rootNode.findMinNode();
		this.root.setValue(minNode.acqValue());
		minNode.parent.setLeft(null);
	}

	_recal() {
		this.root.calFactor();
	}

	_balance(x) {
		let b = null;

		this.root.middleTraverse(function(node) {
			if (!node.isBalance()) {
				b = node;
			}
		});

		if (b != null) {
			const isLeft = b.acqBalanceFactor() > 0;

			let isSubLeft;
			if (isLeft) {
				isSubLeft = b.acqLeft().acqBalanceFactor() > 0
			} else {
				isSubLeft = b.acqRight().acqBalanceFactor() > 0
			}

			if (isLeft && isSubLeft) {
				let bp = b.acqParent();
				let bl = b.acqLeft();
				let blr = br.acqRight();

				let bTree = {
					parent: b.acqParent(),
					left: b.acqLeft(),
					right: b.acqRight()
				}

				let blTree = {
					parent: bl.acqParent(),
					left: bl.acqLeft(),
					right: bl.acqRight()
				}

				if (b.isRoot()) this.root = bl;

				bl.setLeft(b);
				bl.setParent(bTree.parent);

				b.setRight(blr);
				b.setParent(bl);

				if (blr != null) {
					blr.setParent(b);
				}

				if (bp != null) {
					let bpTree = {
						parent: bp.acqParent(),
						left: bp.acqLeft(),
						right: bp.acqRight()
					}

					if (bp.acqLeft() != null && bp.acqLeft().acqValue() == b.acqValue()) bp.setLeft(bl)
					if (bp.acqRight() != null && bp.acqRight().acqValue() == b.acqValue()) bp.setRight(bl)
				}
			}

			if (isLeft && !isSubLeft) {
				let bp = b.acqParent();
				let bl = b.acqLeft();
				let blr = bl.acqRight();

				let bTree = {
					parent: b.acqParent(),
					left: b.acqLeft(),
					right: b.acqRight()
				}

				let blTree = {
					parent: bl.acqParent(),
					left: bl.acqLeft(),
					right: bl.acqRight()
				}

				let blrTree = {
					parent: blr.acqParent(),
					left: blr.acqLeft(),
					right: blr.acqRight()
				}

				if (b.isRoot()) this.root = blr;

				blr.setLeft(bl);
				blr.setRight(b);
				blr.setParent(bTree.parent);

				bl.setRight(blrTree.left || blrTree.right);
				bl.setParent(blr);

				b.setParent(blr);
				b.setLeft(null);

				if (bp != null) {
					let bpTree = {
						parent: bp.acqParent(),
						left: bp.acqLeft(),
						right: bp.acqRight()
					}

					if (bp.acqLeft() != null && bp.acqLeft().acqValue() == b.acqValue()) bp.setLeft(blr)
					if (bp.acqRight() != null && bp.acqRight().acqValue() == b.acqValue()) bp.setRight(blr)
				}
			}

			if (!isLeft && isSubLeft) {
				let bp = b.acqParent();
				let br = b.acqRight();
				let brl = br.acqLeft();

				let bTree = {
					parent: b.acqParent(),
					left: b.acqLeft(),
					right: b.acqRight()
				}

				let brTree = {
					parent: br.acqParent(),
					left: br.acqLeft(),
					right: br.acqRight()
				}

				let brlTree = {
					parent: brl.acqParent(),
					left: brl.acqLeft(),
					right: brl.acqRight()
				}

				if (b.isRoot()) this.root = brl;

				brl.setLeft(b);
				brl.setRight(br);
				brl.setParent(bTree.parent);

				br.setLeft(brlTree.left || brlTree.right);
				br.setParent(brl);

				b.setParent(brl);
				b.setRight(null);

				if (bp != null) {
					let bpTree = {
						parent: bp.acqParent(),
						left: bp.acqLeft(),
						right: bp.acqRight()
					}

					if (bp.acqLeft() != null && bp.acqLeft().acqValue() == b.acqValue()) bp.setLeft(brl)
					if (bp.acqRight() != null && bp.acqRight().acqValue() == b.acqValue()) bp.setRight(brl)
				}
			}

			if (!isLeft && !isSubLeft) {
				let bp = b.acqParent();
				let br = b.acqRight();
				let brl = br.acqLeft();

				let bTree = {
					parent: b.acqParent(),
					left: b.acqLeft(),
					right: b.acqRight()
				}

				let brTree = {
					parent: br.acqParent(),
					left: br.acqLeft(),
					right: br.acqRight()
				}

				if (b.isRoot()) this.root = br;

				br.setLeft(b);
				br.setParent(bTree.parent);

				b.setRight(brl);
				b.setParent(br);

				if (brl != null) {
					brl.setParent(b);
				}

				if (bp != null) {
					let bpTree = {
						parent: bp.acqParent(),
						left: bp.acqLeft(),
						right: bp.acqRight()
					}

					if (bp.acqLeft() != null && bp.acqLeft().acqValue() == b.acqValue()) bp.setLeft(br)
					if (bp.acqRight() != null && bp.acqRight().acqValue() == b.acqValue()) bp.setRight(br)
				}
			}
		}
	}
}

module.exports = Tree;