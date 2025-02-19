import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListComponent } from './curso-list.component';

describe('CursoListComponent', () => {
  let component: CursoListComponent;
  let fixture: ComponentFixture<CursoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
