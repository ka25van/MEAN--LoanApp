//copy the users.js code into every other file here

var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();




/* GET users listing. */
router.get('/list', function(req, res, next) {
  customerModel.find(function(err,customerListResponse){
      if(err){
        res.send({status:500, message: 'Unable to show customer'})
      }
      else{
        const recordCount = customerListResponse.length;
        res.send({status:200, recordCount:recordCount, results: customerListResponse})
      }


  });

  
});

//Create new customer
router.post('/add', function(req, res, next) {

  new customerObj=new customerModel({
    fn:String,
    ln:String,
    phoneNumber:Number,
    emailaddress:String,
    dob:String,
});
  res.send('respond with a resource');
});

//Update customer
router.put('/update', function(req, res, next) {
  res.send('respond with a resource');
});

//Delete  customer
router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});

//Search customer
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;

//Next in app.js import these routes