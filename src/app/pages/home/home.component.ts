import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransitionTop } from '../../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransitionTop()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  x = false;
  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['app-home']);
      this.x = true;
    }, 3000);
  }

}
