const mongoose = require('mongoose')
//need to get the mongoose db and then create the cutomerschema/format

const loanSchema = mongoose.Schema({
        loanName:String,
        loanType:String,
        loanAmount:Number,
        loanStatus:String,
        loanIssue:Date,
});

//after cthis we need to export it; so 
                        //what model it is and which Schema it is
const loanModel = mongoose.model('Loans', loanSchema);

//Next is to export it
module.exports=loanModel;