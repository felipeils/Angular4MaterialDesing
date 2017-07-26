import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapApiDirectionComponent } from './google-map-api-direction.component';

describe('GoogleMapApiDirectionComponent', () => {
  let component: GoogleMapApiDirectionComponent;
  let fixture: ComponentFixture<GoogleMapApiDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapApiDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapApiDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
