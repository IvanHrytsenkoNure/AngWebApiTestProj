import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIurl } from '../Constants/APIurl';
import { IPersonModel } from '../Models/IPersonModel';
import { catchError } from 'rxjs/operators';
import { getPersonsErrorAction } from '../Components/Person/Store/person.action';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPerson(personModel: IPersonModel) {
    return this.http.post<IPersonModel>(APIurl + "/getPerson", personModel)
  }

  deletePerson(personModel: IPersonModel) {
    
    return this.http.post(APIurl + "/deletePerson", personModel).subscribe(
      ()=> console.log("Service deleting person"), 
      catchError( (err)=> of(console.log(err)) )
      );
  }

  updatePerson(personModel: IPersonModel) {
    
    return this.http.post(APIurl + "/editPerson", personModel).subscribe(
      ()=> console.log("Service editing person"), 
      catchError( (err)=> of(console.log(err)) )
      );
  }
  
  createPerson(personModel: IPersonModel) {
    console.log(personModel);


    return this.http.post(APIurl + "/createPerson", personModel).subscribe(
      ()=> console.log("Service creating person"), 
      catchError( (err)=> of(console.log(err)) )
      );

  }

  getAllPersons() {
    
    return this.http.post<IPersonModel[]>(APIurl + "/getAllPersons", {})
  }


}
