const CycleQueue = require('./cycleQueue');

const cycleQueue = new CycleQueue(3);

cycleQueue.add(1);
cycleQueue.add(2);
cycleQueue.add(3);
cycleQueue.remove();
cycleQueue.add(4);
cycleQueue.remove();
cycleQueue.add(5);

cycleQueue.print();