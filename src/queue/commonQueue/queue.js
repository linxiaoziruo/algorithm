class Queue {
	constructor(size) {
		this.size = size;
		this.queue = new Array(size);
		this.front = 0;
		this.tail = 0;
	}

	add(member) {
		if (this.tail < this.size) {
			this.queue[this.tail] = member;
			this.tail = this.tail + 1;
		}
	}

	remove() {
		if (this.front < this.tail) {
			this.queue[this.front] = null;
			this.front = this.front + 1;
		}
	}

	acqHead() {
		return this.queue[this.front]
	}

	acqTail() {
		return this.queue[this.tail - 1]
	}

	isEmpty() {
		return this.front == this.tail
	}

	print() {
		for (let i = this.front; i < this.tail; i++) {
			console.log(this.queue[i]);
		}
	}
}

module.exports = Queue;