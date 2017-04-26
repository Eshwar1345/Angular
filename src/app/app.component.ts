import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})/*
export class AppComponent {
  title = 'Eshwar work';
}*/
export class AppComponent implements OnInit {
  x = true;
  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['loader']);
      this.x = false;
    }, 500);
  }
}
