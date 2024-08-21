const express = require('express')
const app = express();

app.use(function(req,res,next){
    console.log("This is middleWare and Working...")
    next();
});

app.set("view engine", "ejs");
app.use(express.static("./public"))




app.get('/', function (req, res,next) {
  res.render('index',{age:12});
})

app.get('/error', function (req, res,next) {
    throw Error ("Something Went Wrong...")

  })
app.get('/profile', function (req, res) {
    res.send('Hello from profile page ');
  })
app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username} profile page `);
  })

app.get('/about', function (req, res) {
    res.send('Hello from About Us page ')
})

app.get('/Contact_Us', function (req, res) {
    res.render('contact')
  })



//   Below is ERROR HANDLER

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3001)