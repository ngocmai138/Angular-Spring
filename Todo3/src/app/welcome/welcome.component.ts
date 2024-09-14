import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {HelloBean, WelcomeService} from "../service/data/welcome.service";


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
  username=''
  message?:any
  constructor(public activatedRouter:ActivatedRoute,
              public welcomeService:WelcomeService) {
  }

  ngOnInit(): void {
        this.username=this.activatedRouter.snapshot.params['name']
    }

  GetMessage() {
    this.welcomeService.getHelloMessageService(this.username).subscribe(
      {next: value => this.handleMessage(value),
      error: err => console.error(err)
      }
    )
  }

  handleMessage(response:HelloBean){
    this.message = response.message;
  }
}
