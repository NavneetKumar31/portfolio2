import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGAlleryComponent } from './img-gallery.component';

describe('ImgGAlleryComponent', () => {
  let component: ImgGAlleryComponent;
  let fixture: ComponentFixture<ImgGAlleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgGAlleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGAlleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
