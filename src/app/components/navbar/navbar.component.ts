import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeControllerComponent } from "../theme-controller/theme-controller.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ThemeControllerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // routes = routes.map((route) => ({
  //   title: route.title ?? '',
  //   path: route.path ?? '',
  // }));
}
