import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByGameFranchisePageComponent } from './by-game-franchise-page.component';

describe('ByGameFranchisePageComponent', () => {
  let component: ByGameFranchisePageComponent;
  let fixture: ComponentFixture<ByGameFranchisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByGameFranchisePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByGameFranchisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
