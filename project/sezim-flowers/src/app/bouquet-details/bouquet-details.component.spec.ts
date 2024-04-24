import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetDetailsComponent } from './bouquet-details.component';

describe('BouquetDetailsComponent', () => {
  let component: BouquetDetailsComponent;
  let fixture: ComponentFixture<BouquetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouquetDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BouquetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
