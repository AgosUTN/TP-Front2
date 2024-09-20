import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEditorialComponent } from './listado-editorial.component';

describe('ListadoEditorialComponent', () => {
  let component: ListadoEditorialComponent;
  let fixture: ComponentFixture<ListadoEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoEditorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
