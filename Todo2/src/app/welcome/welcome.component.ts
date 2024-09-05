import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

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
  constructor(public activatedRoute:ActivatedRoute) {
  }
  username=''
  ngOnInit(): void {
  this.username=this.activatedRoute.snapshot.params['name']
  }
}
