const Scheduler = require('../crawler/scheduler');
const TaskQueue = require('../crawler/task');
const logger = require('../utils/log');
const mongdb = require('../lib/mongodb');
// function Work() {
//   this.start = function () {
//     /// 页面抓取后的回调
//     let callback = function (error, res, done) {
//       if (error) {
//         // 默认情况下,当一个uri在 crawler 中运行 3 次都失败后,才会报error
//         logger.log('error', 'log2 task error %s', 'my string');
//         logger.log('error', 'Important error: ', new Error('Error passed as meta'));
//       } else {
//         // mongdb.insertOne;
//         var $ = res.$;
//         console.log($('title').text());
//       }
//       done();
//     };
//     // let uriList = ['http://www.google.com', 'http://www.yahoo.com'];
//     // let taskQueue = TaskQueue.from(uriList, callback);
//     // logger.log('info', 'log1.', { label: 'indeed' });
//     // logger.log('error', 'Important error: ', new Error('Error passed as meta'));
//     // const scheduler = new Scheduler();

//     // scheduler.addTaskQueue(taskQueue);
//     Scheduler.start(callback);
//   };
// }
exports.start = function start() {
  let callback = function (error, res, done) {
    if (error) {
      // 默认情况下,当一个uri在 crawler 中运行 3 次都失败后,才会报error
      logger.log('error', 'log2 task error %s', 'my string');
      logger.log('error', 'Important error: ', new Error('Error passed as meta'));
    } else {
      // mongdb.insertOne;
      var $ = res.$;
      console.log($('title').text());
    }
    done();
  };
  Scheduler.start();
};
