
const candidatemodel = require('../models/candidateModel');
const moment = require('moment');




/* POST candidate details. */
module.exports = (router) =>{
router.post('/register' ,(req,res) => {
		let date = moment();
		let newCandidate = new candidatemodel({
			name :req.body.name,
			email :req.body.email,
			technology:req.body.technology,
			relExp : req.body.exp,
			regDate : date,
			

		});


	//candidatemodel.create(newCandidate,function(err,user){	
			newCandidate.save((err)=>{
			if(err){
				res.send({success:false,message:"db error"});
			}else{
				res.send({success:true, message:"New candidate added successfully."});
					
			}		
	});
});
	
	return router;

}

