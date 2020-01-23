import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';
import {Repository} from '../repository';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  username: string;
  user: User;
  repo: Repository;
  clientid = 'ae3c6e832a76f19a4b4a';
  clientsecret = '05eed1fbeb8178e172bcd0f405902c13286538de';
  // 68f90b83b86e75da2a1a5034c025c084d787951a 
  constructor(private http: HttpClient) {
    this.user = new User("","","","","", 0, 0, new Date());
    this.repo = new Repository("", "", "")
    this.username = 'Kraft-Owaka';
   }
   userRequest() {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      url: string;
      bio: string;
      location: string;
      followers: number;
      following: number;
      creation: Date;
    }
  
  let promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>(environment.APIURL + this.username + environment.APIKEY).toPromise().then(response => {
      this.user.avatar_url = response.avatar_url
      this.user.name = response.name
      this.user.url = response.url
      this.user.bio = response.bio
      this.user.location = response.location
      this.user.followers = response.followers
      this.user.following = response.following
      this.user.creation = response.creation

      resolve()
    },
      error => {
        this.user.name = "User name could not be retrieved. Try again."
        reject(error)
      }
    )
  })
  return promise
}

getUserDetails() {
  interface ApiResponse {
    login: string;
  }
  return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
}

getUserRepos() {
  return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
}

updateProfile(username: string) {
  this.username = username;
}

} 

