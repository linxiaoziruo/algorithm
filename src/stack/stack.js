class Stack {
	constructor(size) {
		this.size = size;
		this.stack = new Array(size);
		this.top = 0;
		this.bottom = 0;
	}

	push(member) {
		if ((this.top + 1) <= this.size) {
			this.stack[this.top] = member;
			this.top = this.top + 1;
		}
	}

	pop() {
		if (this.top > 0) {
			this.stack[this.top - 1] = null
			this.top = this.top - 1;
		}
	}

	print() {
		this.stack.forEach(o => {
			if (o) console.log(o);
		});
	}
}

module.exports = Stack;