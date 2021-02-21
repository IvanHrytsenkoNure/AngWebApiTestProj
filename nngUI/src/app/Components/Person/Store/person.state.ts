import { IPersonModel } from "src/app/Models/IPersonModel";
export interface IPersonState
{    
    persons: IPersonModel[]

}
export const initialPersonState: IPersonState = {    
    persons: []
};