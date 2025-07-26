import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsaComponent } from './productsa.component';

describe('ProductsaComponent', () => {
  let component: ProductsaComponent;
  let fixture: ComponentFixture<ProductsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
