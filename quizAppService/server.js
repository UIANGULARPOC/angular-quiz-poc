const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri,{ useMongoClient: true } , (err)=>{

	if(err){
		console.log("Error connecting to database : "+err);
	}else{
		console.log("Connected to database :"+config.db);
	}
})

app.use(express.static(path.join(__dirname+'/../quizAppUI/dist/')));


app.get('*',(req , res ) => {
    res.sendFile(path.join(__dirname+'/../quizAppUI/dist/index.html'));

})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})