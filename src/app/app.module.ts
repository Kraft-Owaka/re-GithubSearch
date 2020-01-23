import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubaboutComponent } from './githubabout/githubabout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { SearchComponent } from './search/search.component';
import { DateDisplayPipe } from './date-display.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GithubaboutComponent,
    NavbarComponent,
    NotfoundcomponentComponent,
    DateDisplayPipe,
    SearchComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
