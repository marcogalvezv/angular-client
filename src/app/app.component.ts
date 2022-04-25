import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
 
  readonly ROOT_URL='https://nodetest-umss.herokuapp.com/people'
 
  users:any;
 
  constructor(private http: HttpClient){}
 
  getUsers(){

    this.users = this.http.get(this.ROOT_URL)

  }
 
}
