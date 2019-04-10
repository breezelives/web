const http = require('http');
const url = require('url')
const fs = require('fs')

const utility = require('utility')

// const data = require('./data.json')
// console.log(data)
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // let url = req.url
  // let query = req.query
  let { pathname, query } = url.parse(req.url, true)

  let q = query.q || ''
  let md5 = utility.md5(q)
  res.end(md5)

  // if(url == '/favicon.ico') {
  //   return res.end('404')
  // }
  // if(url == '/') {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/html;charset=utf-8');
  //   // res.end(JSON.stringify(data));
  //   fs.readFile('./index.html', (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       res.end(err.toString())
  //     } else {
  //       res.end(data)
  //     }
  //   })
  // } else if(url == '/main.css') {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/css;charset=utf-8');
  //   fs.readFile('./main.css', (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       res.end(err.toString())
  //     } else {
  //       res.end(data)
  //     }
  //   })
  // } else {
  //   res.end('404')
  // }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
