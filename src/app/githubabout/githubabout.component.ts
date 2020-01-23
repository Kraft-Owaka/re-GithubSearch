import { Component, OnInit } from '@angular/core';
import {GithubService} from '../service/github.service'

@Component({
  selector: 'app-githubabout',
  templateUrl: './githubabout.component.html',
  styleUrls: ['./githubabout.component.css']
})
export class GithubaboutComponent implements OnInit {
  GithubService: any;
  profileService: any;
  profile: any;
  repos: any;
  myusername = "Kraft-Owaka";

  constructor(private httpService:GithubService) { }

  ngOnInit() {
    this.GithubService.updateProfile(this.username);
     this.GithubService.getProfileInfo().subscribe(profile =>
      // console.log(profile);
      this.profile = profile
      // console.log(this.profile)
    );
    this.GithubService.getProfileRepos().subscribe(repos => 
      // console.log(repos);
      this.repos = repos
    );
  }
  username(username: any) {
    throw new Error("Method not implemented.");
  }

}
