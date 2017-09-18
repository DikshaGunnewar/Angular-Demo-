import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from "@angular/router";
import { DataserviceService } from "../../services/dataservice.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor( private router:Router, private service:DataserviceService) {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }
// ngOnInit(){

// }

//get twitter data  by diksha
posts:any[];
    ngOnInit() {
        return this.service.getSocialMediaData().subscribe((posts) => {
            console.log(posts);
            this.posts = posts;
        });
    }

// search:any[]
//     searchUser(){
//         return this.service.searchUser().subscribe((search)=>{
//             console.log(search);
//             this.search=search;
//         })
//     }


//method to close alert messages
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

//to navigate button to next module by diksha
     btnClick(){
       this.router.navigate(['./settings']);
     }

    //////////////////////////////////////////////////////////////////////
    // dataservice code for getting datafrom webApi can be added on any page


    // posts:any[];
    // constructor(private service:DataserviceService)
    // {
    // }

// ngOnInit(){
//     //GET from api Employee
//     return this.service.getPosts().subscribe((posts) => {
//       console.log(posts);
//       this.posts = posts;
//     });    
 
// }


//twitter call
// makecall(){
//     this.service.makecall()
//     .subscribe(posts=>{
//        console.log(posts);
//        this.posts = posts;
//     });
// }
  
//working code
// createPost(input:HTMLInputElement)
// {
//     let post={name:input.value};
//     this.posts.splice(0,0,post);
//     input.value="";
   
//     //service method called
// return this.service.create(post)
//     .subscribe(
//         newPost=>{
//             post['id']=newPost.id;           
//             // this.posts.splice(0,0,post);  //permistic approach i.e late updadting list
//           });        
//  }

// //not working
//  updatePost(post){
//    this.service.update(post)
//      .subscribe(
//          updatedPost =>{
//           console.log(updatedPost);
//      });  
// }

}
