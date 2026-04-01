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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
