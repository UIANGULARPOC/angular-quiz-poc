const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');

const candidates = require('./routes/candidates')(router);

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,{ useMongoClient: true } , (err)=>{

	if(err){
		console.log("Error connecting to database : "+err);
	}else{
		console.log("Connected to database :"+config.db);
	}
})

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname+'/../quizAppUI/dist/')));




//require('./routes/passport')(app,passport);


app.use('/api', candidates);


app.get('*',(req , res ) => {
    res.sendFile(path.join(__dirname+'/../quizAppUI/dist/index.html'));

})

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})