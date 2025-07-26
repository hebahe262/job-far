import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectdetailsComponent } from './prodectdetails.component';

describe('ProdectdetailsComponent', () => {
  let component: ProdectdetailsComponent;
  let fixture: ComponentFixture<ProdectdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdectdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
