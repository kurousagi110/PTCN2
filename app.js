var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors  = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');



var indexRouter = require('./routes/index');
var abc = require('./routes/users');
var usersRouter = require('./routes/api/user');
var productRouter = require('./routes/api/product');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//khai báo thong tin session, cookie
app.use(session({
  secret: 'iloveyou',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

//khai báo cors
app.use(cors({ 
  origin: ['http://localhost:3000', 'http://localhost:3001',],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

//conect to mongodb
mongoose.connect('mongodb+srv://hoatrinh14020:a123456@cluster0.lqnicyx.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));



app.use('/', indexRouter);
app.use('/abc', abc);
//http://localhost:3000/api/user
app.use('/api/user', usersRouter);
//http://localhost:3000/api/product
app.use('/api/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
