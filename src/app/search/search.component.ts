import { Component, OnInit } from '@angular/core';
import {GithubService} from '../service/github.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

      profile: any = {
        avatar_url: ''
      };
      repos: any = [];
      username: string;
      user: any;
      myusername = "Kraft-Owaka";
  constructor(private githubService:GithubService) { 
    this.githubService.getUserDetails().subscribe(user => {
      this.user = user;
      this.username = "";
    });
    this.githubService.getUserDetails().subscribe(profile => {
      this.profile = profile
    })
    this.githubService.getUserRepos().subscribe(repos => {
      this.repos = repos;
    });

  }
  userDetails() {
    this.githubService.updateProfile(this.username);
    this.githubService.userRequest()
    this.githubService.updateProfile(this.username);
    this.githubService.getUserDetails().subscribe(profile => {
      this.githubService.userRequest()
      this.user = this.githubService.user
      this.profile = profile
    });
    this.githubService.getUserRepos().subscribe(repos => {
      this.repos = repos;
    });
  }


  ngOnInit() {
    this.githubService.getUserDetails().subscribe(profile =>
      // console.log(profile);
      this.profile = profile
      // console.log(this.profile)
    );
    this.githubService.getUserDetails().subscribe(repos => 
      // console.log(repos);
      this.repos = repos
    );
  }
}


