const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

let index = path.resolve(__dirname + '/index.html');

app.get('/', (req, res) => {
  res.render(index);
})
app.listen(8080, () => {
  console.log("listening. . .");
});