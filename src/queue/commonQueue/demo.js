const Queue = require('./queue');

const queue = new Queue(5);

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);

queue.remove()
queue.remove()
queue.remove()
queue.remove()
queue.remove()

console.log(queue.isEmpty());

queue.print();