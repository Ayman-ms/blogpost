import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogpost } from './create-blogpost.component';

describe('PostComponent', () => {
  let component: CreateBlogpost;
  let fixture: ComponentFixture<CreateBlogpost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBlogpost]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlogpost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
