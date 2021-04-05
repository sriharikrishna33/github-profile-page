import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProfilePageComponent } from './git-profile-page.component';

describe('GitProfilePageComponent', () => {
  let component: GitProfilePageComponent;
  let fixture: ComponentFixture<GitProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
