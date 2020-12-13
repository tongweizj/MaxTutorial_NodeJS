const Task = require('../crawler/task');
/**
 * TaskQueue 任务队列
 *
 * @class TaskQueue
 */
class TaskQueue {
  constructor() {
    this.tasks = [];
  }

  static from(uriList, callback) {
    // 建一个空列表
    var taskQueue = new TaskQueue();
    // [] 分割出来
    uriList.forEach((item) => {
      // console.log(item.uri);
      taskQueue.addTask(new Task({ uri: item, callback: callback }));
    });

    return taskQueue.tasks;
  }

  list() {
    return this.tasks;
  }
  // 在Queue 的最后添加Task
  addTask(task) {
    this.tasks.push(task);
  }
  // 从 TaskQueue 中 取出最后一个任务
  popTask() {
    return this.tasks.pop();
  }

  // 判断Queue是否完成
  hasNext() {
    return this.tasks.length > 0;
  }
}
module.exports = TaskQueue;
