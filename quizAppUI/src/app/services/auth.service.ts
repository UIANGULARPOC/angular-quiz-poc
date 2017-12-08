import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

	domain = 'http://localhost:3000';


  constructor(
  		private http : HttpClient
  ) {}

 registerCandidate(user){
	console.log(user.name+"from node")
  		return this.http.post(this.domain+'/api/register',user);
  }

}
