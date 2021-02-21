import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPersonModel } from 'src/app/Models/IPersonModel';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  constructor(
    public _personService: PersonService,
    public dialogRef: MatDialogRef<PersonEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) 
  {
    console.log(data)
    this.Name = data.person.name;
    this.Surname = data.person.surname;
  }

  Name:string;
  Surname:string;

  



  ngOnInit(): void {
  }

  onEditClick()
  {       

    let personModel: IPersonModel
    =
    {
      id : this.data.person.id,
      name : this.Name,
      surname : this.Surname
    }
    this._personService.updatePerson(personModel);
    this.dialogRef.close()
  }

  onCloseClick()
  {
    this.dialogRef.close()
  }

}
