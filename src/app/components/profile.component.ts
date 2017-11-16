import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  providers: [GithubService]
})
export class ProfileComponent {
  user:any;
  repos:any[];
  username: string;


  constructor(private _githubservice: GithubService){
      this.user = false;
  }

  searchUser(){

      this._githubservice.updateUser(this.username);

      this._githubservice.getUser().subscribe(
        user => {
          this.user = user;
          console.log(user);
        }
      )

       this._githubservice.getRepos().subscribe(
        repos => {
          this.repos = repos;
          console.log(repos);
        }
      )

  }

}
