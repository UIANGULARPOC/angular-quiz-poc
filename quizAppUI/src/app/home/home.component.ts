import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { AuthService} from '../services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	
	form : FormGroup;
	messageClass:String;
	message:String;
	iconClass:String;
	//data.success:String;
	//data.message:String;

	constructor(
  		private formBuilder : FormBuilder,
  		private authService : AuthService
  		
  	) { 	
  		this.createForm();
  	}

	createForm(){
		this.form = this.formBuilder.group({
			name : '',
			email: '',
			technology:'',
			exp: ''
		})
	}

	onRegister(){

		const user ={

			name : this.form.get('name').value,
			email :this.form.get('email').value,
			technology : this.form.get('technology').value,
			exp : this.form.get('exp').value
		};
			console.log(user);
			if(user.name == "" || user.email=="" ||user.technology == "" || user.exp == ""){
						this.messageClass = "alert alert-danger";
						this.message = "Please ensure all fields are entered.";
						this.iconClass = "glyphicon glyphicon-remove";
						
			}else{

			this.authService.registerCandidate(user).subscribe((data) =>{
			console.log(data);
				//if(!data.success){
				//		this.messageClass = "alert alert-danger",
				//		this.message = data.message,
				//		this.iconClass = "glyphicon glyphicon-remove"
				//}else{
				//		this.messageClass = "alert alert-success",
				//		this.message = data.message +". Loading questions...",
				//		this.iconClass = "glyphicon glyphicon-ok"
				//}
		});
	}
}
 

  ngOnInit() {
  }

}
