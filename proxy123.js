const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://www.crazygames.com',
  changeOrigin: true,
  secure: false,
  onProxyRes: (proxyRes) => {
    // Remove headers that block cross-origin loading
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
  },
  selfHandleResponse: false,
  pathRewrite: { '^/': '' }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
