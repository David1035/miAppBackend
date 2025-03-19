const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./api/middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
const whiteList = ['http://localhost:8080', 'https://miAppBackend.com']
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin){
      callback(null, true)
    } else {
      callback (new Error('No permitido'))
    }
  }
}
app.use(cors(options)) // primero valida antes de aceptar


routerApi(app)

//Este es el orden en que se van a ejecutar los middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port '+ port)
});

