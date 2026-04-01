const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://www.crazygames.com',
  changeOrigin: true,
  onProxyRes: (proxyRes) => {
    // This strips the headers that prevent framing
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
  },
  pathRewrite: { '^/': '' }
}));

app.listen(3000, () => console.log('Proxy is live, baby. Time to game.'));
