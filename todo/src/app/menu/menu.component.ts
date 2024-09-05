import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {HardcodeAuthenticationService} from "../service/hardcode-authentication.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  protected readonly NgIf = NgIf;
  constructor(public hardcodeAuthenticationService:HardcodeAuthenticationService) {
  }
}
