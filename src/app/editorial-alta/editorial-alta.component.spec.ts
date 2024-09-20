import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialAltaComponent } from './editorial-alta.component';

describe('EditorialAltaComponent', () => {
  let component: EditorialAltaComponent;
  let fixture: ComponentFixture<EditorialAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorialAltaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorialAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
