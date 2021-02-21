import { createSelector, State } from "@ngrx/store";

import { IAppState } from "../../../AppStore/app.state";
import { IPersonState } from "./person.state";


const selectPers = (state : IAppState) => state.persons;



export const selectPersons = createSelector(
    selectPers,
    (state: IPersonState)=> state.persons
);

