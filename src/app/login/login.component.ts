import {NgModule, Component,Pipe, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators, FormBuilder, NgForm, FormGroup, FormControl } from '@angular/forms';
// import {
//     ReactiveFormsModule,
//     FormsModule,
//     FormGroup,
//     FormControl,
//     Validators,
//     FormBuilder,
//     NgForm
// } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from "../shared/guard/auth.service";
import { DataserviceService } from "../services/dataservice.service";


//changes
// import { log_in } from "./login";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router,private fb: FormBuilder, private authservice: AuthService,private service:DataserviceService) {}

    //form field validators by abhishek
    myform = new FormGroup({
        //email validator
        email: new FormControl('', [Validators.required, 
        Validators.pattern("[a-zA-Z]+[a-zA-Z0-9]*[^ @]*@[^ @]*[a-zA-Z]*[\.][a-zA-Z]+[a-zA-Z]+")
        ]),
        //password validator
        password: new FormControl('', [Validators.required, Validators.minLength(8), 
        Validators.pattern("[a-zA-z0-9]+[\ !\ *\?]+[a-zA-z0-9]+")
        ])
    });

get email(){
return this.myform.get("email");

}
get password(){
return this.myform.get("password");

}

///////////////////////////////////////////login///////////////////
 public loading:boolean = false;
 error = '';

ngOnInit(){
//  this.authservice.logout();

}

//main method
    login() {
      debugger;
      //this.loading = true;
        this.authservice.login(this.myform.value)
            .subscribe(result => {              
                debugger;
                if (result === true) {
                    // login successful
                    this.loading = true;
                    console.log(result);
                    //this.router.navigate(['app/layout/dashboard']);
                     this.router.navigate(['./dashboard']);
                    
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
              
            },
             
            err => console.log(err)
             
            );
          
    }

}