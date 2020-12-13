'use strict';

const Crawler = require('crawler');
const TaskQueue = require('./task-queue');
const logger = require('../utils/log');

// Scheduler 调度器
// 安排整体工作的各个任务安排
// 每一次抓取,要做的工作
class Scheduler {
  constructor() {
    this.tryTimes = 0;
    var self = this;
    this.taskQueue = [];
    this.crawler = new Crawler({
      rateLimit: 1000, // between two tasks, minimum time gap is 1000 (ms)
      maxConnections: 1,
    });
  }

  addTaskQueue(taskQueue) {
    this.taskQueue = taskQueue;
  }
  /// 开始单次任务的调度
  schedule(task) {
    logger.log('info', 'log3 schedule 开始执行 %s', 'my string');
    this.crawler.queue({ uri: task.uri, callback: task.callback });
  }

  // 入口
  // 整理出任务清单,并把任务传递给调度
  start() {
    // 整理任务清单
    this.taskQueue.forEach((task) => {
      this.schedule(task);
    });
  }
}
// 开始
exports.start = function start() {
  /// 页面抓取后的回调
  let callback = function (error, res, done) {
    if (error) {
      // 默认情况下,当一个uri在 crawler 中运行 3 次都失败后,才会报error
      logger.log('error', 'log2 task error %s', 'my string');
      logger.log('error', 'Important error: ', new Error('Error passed as meta'));
    } else {
      var $ = res.$;
      console.log($('title').text());
    }
    done();
  };
  let uriList = ['http://11111www.google.com', 'http://www.yahoo.com'];
  let taskQueue = TaskQueue.from(uriList, callback);
  logger.log('info', 'log1.', { label: 'indeed' });
  logger.log('error', 'Important error: ', new Error('Error passed as meta'));
  const scheduler = new Scheduler();

  scheduler.addTaskQueue(taskQueue);
  scheduler.start();
};
