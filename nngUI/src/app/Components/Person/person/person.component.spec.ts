import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IPersonModel } from 'src/app/Models/IPersonModel';
import { PersonService } from 'src/app/Services/person.service';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;
  let personService: PersonService;
  let spy: jasmine.Spy;
  let mockPersonModel: IPersonModel;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonComponent ],
      providers:[PersonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    personService = fixture.debugElement.injector.get(PersonService);
    mockPersonModel = {id: 1, name: "somensme", surname:"somesurname"}
    spy= spyOn(personService, 'deletePerson')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService', () => {
    component.onDeleteClick(mockPersonModel);
    expect(spy.calls.any()).toBeFalsy()
  });

  
});
