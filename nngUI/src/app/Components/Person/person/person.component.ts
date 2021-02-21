import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/AppStore/app.state';
import { IPersonModel } from 'src/app/Models/IPersonModel';
import { PersonService } from 'src/app/Services/person.service';
import { PersonAddComponent } from '../person-add/person-add/person-add.component';
import { PersonEditComponent } from '../person-edit/person-edit/person-edit.component';
import { getPersonsAction } from '../Store/person.action';
import { selectPersons } from '../Store/person.selector';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor
    (
      private store: Store<IAppState>,
      public _personService: PersonService,
      public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.store.dispatch(getPersonsAction());
  }

  personsAsync$ = this.store.pipe(select(selectPersons));

  onDeleteClick(person: IPersonModel) {
    this._personService.deletePerson(person);

    this.refreshPersons();
  }

  onEditClick(person: IPersonModel) {

    const dialogRef = this.dialog.open(PersonEditComponent, {
      width: '250px',
      data: { person: person },
      hasBackdrop: false, // HERE
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The person is edited');
      this.refreshPersons()

    });
  }
  
  onAddClick() {
    const dialogRef = this.dialog.open(PersonAddComponent, {
      width: '250px',
      hasBackdrop: false, // HERE
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The person is added');
      
      this.refreshPersons()

    });
  }

  private refreshPersons() {
    this.store.dispatch(getPersonsAction());
  }

}

