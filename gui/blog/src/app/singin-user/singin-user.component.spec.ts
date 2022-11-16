import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginUserComponent } from './singin-user.component';

describe('SingiUserComponent', () => {
  let component: SinginUserComponent;
  let fixture: ComponentFixture<SinginUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinginUserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
