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
import { DataserviceService } from "../services/dataservice.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
//  myform=new FormGroup({
//     //  name:new FormControl('',[Validators.required,Validators.minLength(5)]),
//      email:new FormControl('',[Validators.required,Validators.minLength(5)]),
//      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
//      confirmpassword: new FormControl('',[Validators.required,Validators.minLength(8)])

// });



 myform = this.fb.group({
      
        //Email valildation
        email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+[a-zA-Z0-9]*[^ @]*@[^ @]*[a-zA-Z]*[\.][a-zA-Z]+[a-zA-Z]+")]),
        //password valildation     
        password: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern("^(?=.*[0-9])(?=.*[A-Z])(?=.*[@?#$%^&+*=!])(?=\\S+$).{4,}$")
        ]),
        //Password Confirmation         
        confirmpassword: new FormControl('', [Validators.required,Validators.minLength(8)])

    }, 
    //validating password and confirm password field
    { validator: this.checkIfMatchingPasswords('password', 'confirmpassword') }

    );


    //validation function for password and confirm password field
    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value || passwordConfirmationInput.invalid) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
            }

            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
    }




    constructor(public router: Router,private fb: FormBuilder,private service: DataserviceService) {
    }

    ngOnInit() {  

   }

   element:any[];
 //post data using angular form
    onRegister(myform: NgForm) {
        this.element = myform.value;
         console.log(this.element);
          this.service.onRegister(this.element)
            .subscribe(
            newPost => {
                console.log(newPost);
                this.element = newPost;
                // this.router.navigateByUrl("/dashboard");

            });
    }






    // onLoggedin(logintada: any):void {

  
    //  localStorage.setItem('isLoggedin', "true");
    // }
//functions used to get values from form to properties in controller
// get name(){
// return this.myform.get("name");
// }

get email(){
return this.myform.get("email");

}
get password(){
return this.myform.get("password");

}
get confirmpassword(){
return this.myform.get("confirmpassword");
}
}
