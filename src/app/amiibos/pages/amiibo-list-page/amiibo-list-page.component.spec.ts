import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiiboListPageComponent } from './amiibo-list-page.component';

describe('AmiiboListPageComponent', () => {
  let component: AmiiboListPageComponent;
  let fixture: ComponentFixture<AmiiboListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmiiboListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmiiboListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
