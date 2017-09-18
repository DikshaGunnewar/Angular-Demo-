import { Injectable } from '@angular/core';
import { Http ,Headers} from "@angular/http";

@Injectable()
export class DataserviceService {

 constructor(private http:Http) { }

//get method for socail Media Data details
getSocialMediaData() { 
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get("http://localhost:12952/api/Users/GetData",{headers:headers})
      .map(res => res.json());
   }



// Register User by diksha
onRegister(resource){
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:12952/api/Account/Register",JSON.stringify(resource),{ headers: headers })
       .map(response=>response.json());  
  }

//login not working
onLoggedin(resource){
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:12952/token",JSON.stringify(resource),{ headers: headers })
       .map(response=>response.json());  
  }


// working code for twitter for main Achitecture by diksha
 makeTwittercall(){
   var headers = new Headers();
   headers.append('Content-Type', 'application/X-www-form-urlencoded');
       return this.http.get('http://localhost:12952/api/Twitter',{headers:headers})
       .map(res => res.json());
}


 makeInstagramcall(){
   var headers = new Headers();
   headers.append('Content-Type', 'application/X-www-form-urlencoded');
       return this.http.get('http://localhost:12952/api/Instagram',{headers:headers})
      .map(res => res.json());
}


// onLoggedin(){
//    var headers = new Headers();
//    headers.append('Content-Type', 'application/json');
//    return this.http.get("http://localhost:12952/token")
//       .map(res => res.json());
// }



//function to call angular page from button
// makecall(){
//    var headers = new Headers();
//    headers.append('Content-Type', 'application/X-www-form-urlencoded');
//        return this.http.get('http://localhost:63174/api/Twitter',{headers:headers})
//       .map(res => res.json());
// }

}
