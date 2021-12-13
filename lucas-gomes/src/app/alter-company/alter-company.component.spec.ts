import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterCompanyComponent } from './alter-company.component';

describe('AlterCompanyComponent', () => {
  let component: AlterCompanyComponent;
  let fixture: ComponentFixture<AlterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
