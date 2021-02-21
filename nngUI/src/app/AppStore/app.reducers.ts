import { ActionReducerMap } from "@ngrx/store";
import { personReducer } from "../Components/Person/Store/person.reducer";
import { IAppState } from "./app.state";

export const appReducers: ActionReducerMap<IAppState, any> = {
    persons: personReducer
}