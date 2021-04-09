import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor( public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  
  LogOut()
  {
    this.auth.signOut();
  }
}
