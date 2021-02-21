import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/AppStore/app.state';
import { IPersonModel } from 'src/app/Models/IPersonModel';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss']
})
export class PersonAddComponent implements OnInit {

  constructor(
    private store: Store<IAppState>,
    public _personService: PersonService,
    public dialogRef: MatDialogRef<PersonAddComponent>
      
  ) { }

  Name:string  = ""
  Surname:string =""

  ngOnInit(): void {
  }

  onAddClick()
  {
    
    let personModel: IPersonModel = {
      name: this.Name,
      surname: this.Surname,
      id :0//no matter what id
    };
    this._personService.createPerson(personModel);

    this.dialogRef.close()
  }

  onCloseClick()
  {
    this.dialogRef.close()
  }

}
