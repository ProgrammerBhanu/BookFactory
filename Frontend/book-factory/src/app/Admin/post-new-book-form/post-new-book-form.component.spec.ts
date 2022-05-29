import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewBookFormComponent } from './post-new-book-form.component';

describe('PostNewBookFormComponent', () => {
  let component: PostNewBookFormComponent;
  let fixture: ComponentFixture<PostNewBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostNewBookFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
