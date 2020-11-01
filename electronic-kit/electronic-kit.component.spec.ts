import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicKitComponent } from './electronic-kit.component';

describe('ElectronicKitComponent', () => {
  let component: ElectronicKitComponent;
  let fixture: ComponentFixture<ElectronicKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
