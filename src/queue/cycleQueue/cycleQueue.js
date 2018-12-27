class CycleQueue {
	constructor(size) {
		this.size = size;
		this.queue = new Array(size);
		this.front = 0;
		this.tail = 0;
	}

	add(member) {
		if (this.tail > this.front) {
			if ((this.tail + 1) == this.size) {
				this.queue[this.size - 1] = member;
				this.tail = 0;
			} else {
				this.queue[this.tail] = member;
				this.tail = this.tail + 1;
			}
		} else if (this.tail == this.front) {
			if (this.isEmpty()) {
				if ((this.tail + 1) == this.size) {
					this.queue[this.size - 1] = member;
					this.tail = 0;
				} else {
					this.queue[this.tail] = member;
					this.tail = this.tail + 1;
				}
			}
		} else {
			this.queue[this.tail] = member;
			this.tail = this.tail + 1;
		}
	}

	remove() {
		if (this.tail > this.front) {
			this.queue[this.front] = null;
			this.front = this.front + 1;
		} else if (this.tail == this.front) {
			if (!this.isEmpty()) {
				if ((this.front + 1) == this.size) {
					this.queue[size - 1] = null;
					this.front = 0;
				} else {
					this.queue[this.front] = null;
					this.front = this.front + 1
				}
			}
		} else {
			if ((this.front + 1) == this.size) {
				this.queue[size - 1] = null;
				this.front = 0;
			} else {
				this.queue[this.front] = null;
				this.front = this.front + 1
			}
		}
	}

	acqHead() {
		return this.queue[this.front];
	}

	acqTail() {
		if (this.isEmpty()) {
			return null
		} else {
			if (tail == 0) {
				return this.queue[size - 1];
			} else {
				return this.queue[this.tail - 1];
			}
		}
	}

	isEmpty() {
		return this.front == this.tail && this.queue[this.front] == null;
	}

	print() {
		for (let i = 0; i < this.size; i++) {
			const member = this.queue[i];
			if (member) console.log(member);
		}
	}
}

module.exports = CycleQueue;