import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiiboPageComponent } from './amiibo-page.component';

describe('AmiiboPageComponent', () => {
  let component: AmiiboPageComponent;
  let fixture: ComponentFixture<AmiiboPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmiiboPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmiiboPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
