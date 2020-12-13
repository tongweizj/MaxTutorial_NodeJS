import { createServer } from 'http';
import { parse } from 'querystring';
import util from 'util';

const postHTML =
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    body = parse(body);
    res.writeHead(200, { 'Content-Tyoe': 'text/html; charset=utf8' });

    if (body.name && body.url) {
      res.write(`web site: ${body.name}`);
      res.write('<br>');
      res.write(`web URL：${body.url}`);
    } else {
      res.write(postHTML);
    }
    res.end();
    // res.end(util.inspect(post))
  });
}).listen(3000);
