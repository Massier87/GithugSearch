import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = 'CLIENT_ID';
  private client_secret = 'CLIENT_SECRET';


  constructor(private _http:Http){
    console.log('Github service ready');
    this.username = 'USER_NAME';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_sec'+this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_sec'+this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string){
    this.username = username;
  }
}
