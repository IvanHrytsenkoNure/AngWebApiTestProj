import { createAction, props } from '@ngrx/store';
import { IPersonModel } from 'src/app/Models/IPersonModel';


export enum PersonsActions {
    GetPersons = "[PERSONS] GetPersin",
    GetPersonsSuccess = "[PERSONS] GetPersonSuccess",
    GetPersonsError = "[PERSONS] GetPersonError",

    
   
}

export const getPersonsAction = createAction(
    PersonsActions.GetPersons
)
export const getPersonsSuccessAction = createAction(
    PersonsActions.GetPersonsSuccess,
    props<{ personsList: IPersonModel[]}>()
)
export const getPersonsErrorAction = createAction(
    PersonsActions.GetPersonsError,
    props<{ error: string }>()
    )


