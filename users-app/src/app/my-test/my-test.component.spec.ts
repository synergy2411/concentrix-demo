import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestComponent } from './my-test.component';

describe('MyTestComponent', () => {
  let component: MyTestComponent;
  let fixture: ComponentFixture<MyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have user.name 'Foo'", ()=>{
    let username = component.user.name;
    expect(username).toEqual("Foo");
  });

  it("should contain the variable 'greet' as 'Hello", ()=>{
    expect(component.greet).toContain("Hello");
  })

});
