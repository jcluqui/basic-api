const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const helmet = require('helmet');
//const path = require('path');
//const https = require('https');
//const errorController = require('./controllers/error');
//const mongoConnect = require('./util/database').mongoConnect;

// const options = {
//   key: fs.readFileSync('./tls/selfsigned.key'),
//   cert: fs.readFileSync('./tls/selfsigned.crt')
// };
//
// const HOST = process.env.HOST || '127.0.0.1';
// const PORT = process.env.PORT || 4000;
// console.log(`worker pid=${process.pid}`);

const app = express();
app.use(helmet.hidePoweredBy());

app.get('/artist/:id', async (req, res) => {
  console.log(`worker request pid=${process.pid}`);
  const id = Number(req.params.id);
  if (id < 1) {
      res.statusCode = 404;
      return {error: 'not_found'};
    }
    fs.readFile('./data/artist11.json', 'utf8', (error, data) => {
     if(error){
        console.log(error);
        return;
     }
     res.json(JSON.parse(data));
    });
});

//mongoConnect(() => {
  app.listen(4000);
//});
