const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('*', (req, res) => {
  res.sendFile('index.html', { root: './public/' });
});

const PORT = 3005;
app.listen(PORT, console.log(`listening on port ${PORT}`));
