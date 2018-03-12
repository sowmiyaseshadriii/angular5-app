import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { DatalistService } from '../datalist.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
goals:any;
  constructor(private route:ActivatedRoute, private router:Router,private data:DatalistService) {
    this.route.params.subscribe(res=>console.log(res.id))
   }

  ngOnInit() {
    this.data.goal.subscribe(res=>this.goals=res);
  }
  
  sendData(){
    this.router.navigate(['']);
  }

}
