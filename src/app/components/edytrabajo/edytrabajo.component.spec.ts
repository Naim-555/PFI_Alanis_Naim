import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytrabajoComponent } from './edytrabajo.component';

describe('EdytrabajoComponent', () => {
  let component: EdytrabajoComponent;
  let fixture: ComponentFixture<EdytrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdytrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdytrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
