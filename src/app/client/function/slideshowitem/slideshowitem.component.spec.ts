import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowitemComponent } from './slideshowitem.component';

describe('SlideshowitemComponent', () => {
  let component: SlideshowitemComponent;
  let fixture: ComponentFixture<SlideshowitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
