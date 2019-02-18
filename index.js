const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const enforce = require('express-sslify');

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(enforce.HTTPS({ trustXForwardedHostHeader: true }))
app.use(enforce.HTTPS());

let port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

let index = path.resolve(__dirname + '/index.html');

app.get('/', (req, res) => {
  res.render(index);
})
app.listen(port, () => {
  console.log("listening. . .");
});