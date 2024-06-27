import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BySeriesPageComponent } from './by-series-page.component';

describe('BySeriesPageComponent', () => {
  let component: BySeriesPageComponent;
  let fixture: ComponentFixture<BySeriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BySeriesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BySeriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
