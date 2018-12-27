class Node {
	constructor(opt) {
		this.value = opt.value;
		this.left = opt.left;
		this.right = opt.right;
	}

	isTree() {
		return !(this.left == null && this.right == null)
	}

	getValue() {
		return this.value;
	}

	getTree() {
		if (this.isTree()) {
			return {
				value: this.value,
				left: this.left.getTree(),
				right: this.right.getTree()
			}
		} else {
			return this.value;
		}
	}

	leftTraverse(fn) {
		let rs;
		if (this.isTree()) {
			if (this.left) {
				this.left.leftTraverse(fn);
			}

			rs = fn(this.value)

			if (this.right) {
				this.right.leftTraverse(fn);
			}
		} else {
			rs = fn(this.value)
		}

		return rs;
	}

	rightTraverse(fn) {
		let rs;
		if (this.isTree()) {
			if (this.right) {
				this.right.rightTraverse(fn);
			}

			rs = fn(this.value)

			if (this.left) {
				this.left.rightTraverse(fn);
			}
		} else {
			rs = fn(this.value)
		}

		return rs;
	}
}

module.exports = Node;