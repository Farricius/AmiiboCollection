import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByNamePageComponent } from './by-name-page.component';

describe('ByNamePageComponent', () => {
  let component: ByNamePageComponent;
  let fixture: ComponentFixture<ByNamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByNamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
