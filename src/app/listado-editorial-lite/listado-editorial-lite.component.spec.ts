import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEditorialLiteComponent } from './listado-editorial-lite.component';

describe('ListadoEditorialLiteComponent', () => {
  let component: ListadoEditorialLiteComponent;
  let fixture: ComponentFixture<ListadoEditorialLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoEditorialLiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoEditorialLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
