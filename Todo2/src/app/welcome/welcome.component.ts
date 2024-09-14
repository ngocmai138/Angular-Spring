import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HelloWorldServiceService} from "../service/data/hello-world-service.service";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  constructor(public activatedRoute:ActivatedRoute,
              public service:HelloWorldServiceService) {
  }
  username=''
  message?:String
  ngOnInit(): void {
  this.username=this.activatedRoute.snapshot.params['name']
  }

  getHelloWorldMessage() {
    this.service.getHelloWorldResponse().subscribe(
      response => this.handleSuccessResponse(response)
    );
  }
  getHelloWorldMessageWithParam() {
    this.service.getHelloWorldResponseWithParam(this.username).subscribe(
      response => this.handleSuccessResponse(response)
    );
  }
  handleSuccessResponse(response:any){
    this.message = response.message
  }
}
