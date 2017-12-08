const mongoose = require('mongoose');
const moment = require('moment');
mongoose.Promise = global.Promise;
const candidateSchema = mongoose.Schema({
	name: {type:String,required:true},
    email: {type:String,required:true},
    technology :{type:String ,required:true},
    relExp :{type:String,required:true},
    regDate : {type:Date},
    testTaken :{type:Boolean,default:false}


});

//db connection ends 

const collectionName = 'candidate';
const candidatemodel = mongoose.model('candidate', candidateSchema,collectionName);
module.exports = candidatemodel;


