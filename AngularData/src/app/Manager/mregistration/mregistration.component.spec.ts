import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MregistrationComponent } from './mregistration.component';

describe('MregistrationComponent', () => {
  let component: MregistrationComponent;
  let fixture: ComponentFixture<MregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
