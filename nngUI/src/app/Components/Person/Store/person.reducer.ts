import { ActionReducerMap, createReducer, on } from "@ngrx/store";

import * as personActions from './person.action'
import { initialPersonState } from "./person.state";

export const personReducer = createReducer(
    initialPersonState,

    on(personActions.getPersonsAction,(state,action)=> ({
        ...state
    })),
    on(personActions.getPersonsSuccessAction, (state,action)=> ({
        ...state,
        persons: action.personsList
    })),
    on(personActions.getPersonsErrorAction,(state, action)=> ({
        ...state
    })),    
  

)

