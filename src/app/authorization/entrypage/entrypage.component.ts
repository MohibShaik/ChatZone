import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.scss'],
})
export class EntrypageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public redirectToSignup() {
    this.router.navigate(['signUp']);
  }

  public redirectToSignin() {
    this.router.navigate(['signIn']);
  }
}
