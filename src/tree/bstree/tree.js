class Tree {
	constructor() {
		this.root = null;
	}

	acqRoot() {
		return this.root
	}

	insert(node) {
		node.setTree(this);

		if (this.root == null) {
			this.root = node;
		} else {
			this.root.insert(node);
		}

		this.balance();
	}

	delete(node) {
		const rootNode = node.right;
		const minNode = rootNode.findMinNode();
		this.root.setValue(minNode.acqValue());
		minNode.parent.setLeft(null);
	}

	find(value) {
		return this.root.find(value)
	}

	balance() {
		let toBalacne = null;

		this.root.middleTraverse(function(node) {
			if (!node.isBalance()) {
				toBalacne = node;
			}
		});

		if (左左) {
			//右旋转
		}
		if (左右) {
			//坐旋转 右旋转
		}
		if (右左) {
			// 右旋转 坐旋转
		}
		if (右右) {
			// 坐旋转
		}
	}

}

module.exports = Tree;