import { RouterReducerState } from "@ngrx/router-store";
import { initialPersonState, IPersonState } from "../Components/Person/Store/person.state";
import { IPersonModel } from "../Models/IPersonModel";



export interface IAppState{
    persons: IPersonState   
}

export const initialAppState: IAppState = {
    persons: initialPersonState
}

export function getInitialState(): IAppState{
    return initialAppState;
}