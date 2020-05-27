const express = require ('express');
const morgan = require ('morgan');
const cors   = require ('cors');
const path   = require ('path');
const {format} = require('timeago.js')


const app = express();
require('dotenv').config();
require('./models/db')


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Rutas
app.use(require('./routes/comments'))
app.use(require('./routes/clients'))
app.use(require('./routes/review'))


//global variables
app.use((req,res,next) =>{
  app.locals.format = format;
  next();
})


// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('listening on port '+ app.get('puerto'));
});
