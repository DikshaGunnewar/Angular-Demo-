import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthenticationService} from '../../core/services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent  implements OnInit{
model: any = {};
public loading:boolean = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder
        )
         { 
              this.logincheck = this.formBuilder.group({
             Username: ['', [Validators.required]],
             Password: ['', [Validators.required]],
        });
        }
 public logincheck: FormGroup;
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    Login() {
      debugger;
      this.loading = true;
        this.authenticationService.login(this.logincheck.value)
            .subscribe(result => {
                
                debugger;
                if (result === true) {
                    // login successful
                    this.loading = true;
                    this.router.navigate(['app/dashboard']);
                    
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            },
             err => console.log(err));
    }
}
