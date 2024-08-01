// const https = require('https');

// export default function handler(req, res) {
//   const options = {
//     hostname: 'https://live.devnimble.com',
//     port: 443,
//     path: req.url,
//     method: req.method,
//     headers: req.headers
//   };

//   const proxy = https.request(options, (proxyRes) => {
//     res.writeHead(proxyRes.statusCode, proxyRes.headers);
//     proxyRes.pipe(res, { end: true });
//   });

//   req.pipe(proxy, { end: true });
// }

const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: 'https://live.devnimble.com',
  changeOrigin: true,
  pathRewrite: {
    '': ''
  },
  path: req.url,
  method: req.method,
  headers: req.headers,
  onProxyRes(proxyRes) {
    proxyRes.headers['x-added'] = 'foobar';
    delete proxyRes.headers['x-removed'];
  }
});

export default function (req, res) {
  return apiProxy(req, res);
}
