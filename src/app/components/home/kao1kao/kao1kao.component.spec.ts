import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kao1kaoComponent } from './kao1kao.component';

describe('Kao1kaoComponent', () => {
  let component: Kao1kaoComponent;
  let fixture: ComponentFixture<Kao1kaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kao1kaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kao1kaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
