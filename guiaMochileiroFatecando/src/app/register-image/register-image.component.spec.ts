import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterImageComponent } from './register-image.component';

describe('RegisterImageComponent', () => {
  let component: RegisterImageComponent;
  let fixture: ComponentFixture<RegisterImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
