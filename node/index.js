// nodejs中顶层对象是global
// console.dir(global);

// 一个文件是一个模块, 每个模块有自己的作用域
// let a = 1;
// console.log(global.a); //undefined

// console.log(__dirname);
// console.log(__filename);

// console.log(process);
// console.log(process.env)
// console.log(process.pid)

// setInterval(() => {
//   console.log(Date());
// }, 1000);

// setTimeout(() => {
//   process.exit()
// }, 5000);

// process.stdout.write('hello');

// let a, b;
// process.stdout.write('请输入a的值：');

// process.stdin.on('data', chunk => {
//   if (!a) {
//     a = Number(chunk)
//     process.stdout.write('请输入b的值：');
//   } else {
//     b = Number(chunk)
//     console.log('a + b = ' + (a + b));
//   }
// })

// Buffer类
let bf = Buffer.alloc(5)
console.log(bf);


// require 加载模块 顺序(文件名 -> .js -> .json -> .node)
// let m = require('./module.js')
// console.log(m);
// console.log(g);
// console.log(module);

// let s1 = require('./sum.js')
// let s2 = require('./sum.js')
// console.log(s1.counter());
// console.log(s2.counter());
// console.log(s1.counter());
// console.log(s2.counter());


// const fs = require('fs')
// let fileName = './data.json'
// fs.readFile(fileName, 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// http

// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   // res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html;charset=utf8')
//   res.write('你好世界' + Date())
//   res.end('\n换行<br>Hello node')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`);
// })

// const url = require('url')

// const express = require('express')
// const superagent = require('superagent')
// const cheerio = require('cheerio')
// const eventproxy = require('eventproxy')

// const hostname = '127.0.0.1'
// const port = 3000
// let app = express()

// let cnodeUrl = 'https://cnodejs.org/'

/* app.get('/', (req, res, next) => {
  superagent.get('https://cnodejs.org/')
    .end((err, sres) => {
      if (err) return next(err)

      let $ = cheerio.load(sres.text)
      let items = []
      $('#topic_list .topic_title').each((i, el) => {
        let $el = $(el)
        items.push({
          title: $el.attr('title'),
          href: $el.attr('href')
        })
      })

      res.send(items)
    })
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
}) */

/* superagent.get(cnodeUrl)
  .end((err, res) => {
    if (err) return console.error(err);

    let topicUrls = []
    let $ = cheerio.load(res.text)
    $('#topic_list .topic_title').each((i, el) => {
      let $el = $(el)
      topicUrls.push(url.resolve(cnodeUrl, $el.attr('href')))
    })

    let ep = new eventproxy()
    ep.after('topic_html', topicUrls.length, topics => {
      topics = topics.map(topicPair => {
        let topicUrl = topicPair[0]
        let topicHtml = topicPair[1]
        let $ = cheerio.load(topicHtml)
        return {
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment1: $('.reply_content').eq(0).text().trim()
        }
      })
      console.log(topics);

    })

    topicUrls.forEach(topicUrl => {
      superagent.get(topicUrl)
        .end((err, res) => {
          console.log(topicUrl + ' --ok');
          ep.emit('topic_html', [topicUrl, res.text])
        })
    })
  }) */

