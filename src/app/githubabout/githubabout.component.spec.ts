import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubaboutComponent } from './githubabout.component';

describe('GithubaboutComponent', () => {
  let component: GithubaboutComponent;
  let fixture: ComponentFixture<GithubaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
