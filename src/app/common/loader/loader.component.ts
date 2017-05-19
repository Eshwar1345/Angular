import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransitionTop } from '../../router.animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [routerTransitionTop()],
  host: {'[@routerTransition]': ''}
})
export class LoaderComponent implements OnInit {

  y = false;
  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['loader']);
      this.y = true;
    }, 30000);
  }

}
