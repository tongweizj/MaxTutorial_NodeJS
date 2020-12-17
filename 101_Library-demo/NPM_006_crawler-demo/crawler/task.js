const logger = require('../utils/log');
const randomUseragent = require('random-useragent');
/**
 * Task
 * TAsk = 采集某一个网站, 甚至特定页面的具体任务
 * 整理出每一次爬虫任务的各个细节
 * 如: 将 keyword 转化成标准可访问的 url
 * callback
 * success 任务状态,默认 false
 *
 * @class Task
 */
class Task {
  constructor(item) {
    this.uri = item.uri;
    this.jQuery = false;
    this.tryTimes = 0;
    this.callback = item.callback;
    this.success = false;
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
// module.exports = Task;
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
