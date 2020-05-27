const mongoose = require ('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
// Conexión a DB
//mongoose.set('useFindAndModify', false);
mongoose.connect(MONGODB_URI,
{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err))
