import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTopTransitionBottom } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTopTransitionBottom()],
  host: {'[@routerTransition]': ''}
})
export class AppComponent implements OnInit {
  x = true;
  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['app-home']);
      this.x = false;
    }, 3000);
  }
}
