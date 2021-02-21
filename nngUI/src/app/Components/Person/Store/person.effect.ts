import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators"
import { of } from "rxjs";
import { PersonService } from "src/app/Services/person.service";
import { getPersonsAction, getPersonsErrorAction, getPersonsSuccessAction } from "./person.action";


@Injectable()
export class PersonEffects {
    constructor(
        private _actions$: Actions,
        private _personService: PersonService,
        
    ) {

    }

    getPersons$ = createEffect(() => this._actions$
        .pipe(
            ofType(getPersonsAction),
            mergeMap(() => this._personService.getAllPersons().pipe(
                map(personList => getPersonsSuccessAction({
                    personsList: personList
                })       
                ),
                
                catchError((err) => {
                    console.log(err.error);
                    return of(getPersonsErrorAction({ error: err.error }));
                }
                )))
        )
    );


}








