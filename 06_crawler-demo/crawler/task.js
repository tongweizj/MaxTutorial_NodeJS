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
module.exports = Task;
