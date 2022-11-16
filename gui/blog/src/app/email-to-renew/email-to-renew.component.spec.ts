import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailToRenewComponent } from './email-to-renew.component';

describe('EmailToRenewComponent', () => {
  let component: EmailToRenewComponent;
  let fixture: ComponentFixture<EmailToRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailToRenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailToRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
