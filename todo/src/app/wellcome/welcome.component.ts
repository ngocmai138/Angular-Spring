import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  name = '';
  responseMessage?:String;
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanServiceWithPathParameter(this.name).subscribe(
      response => this.handleSuccessResponse(response)
    );
    console.log('Last line of getWelcomeMessage')
  }

  handleSuccessResponse(response:any){
    this.responseMessage=response.message
  }
}
