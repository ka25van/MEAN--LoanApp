//whichever filename is created here must have the same filename in routes

const mongoose = require('mongoose')
//need to get the mongoose db and then create the cutomerschema/format

const customerSchema = mongoose.Schema({
        fn:String,
        ln:String,
        phoneNumber:Number,
        emailaddress:String,
        dob:String,
});

//after this we need to export it; so 
                        //what model it is and which Schema it is
const customerModel = mongoose.model('Customers', customerSchema);

//Next is to export it
module.exports=customerModel;

//the modules exported must be imported there in routes folder.