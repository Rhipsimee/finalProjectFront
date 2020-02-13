import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  ajoutPatient(obj:Patient):Observable<any>{

    return this.http.post('http://localhost:8080/PatientREST/ajout',obj);


  }
 
  supprPatient(obj:Patient):Observable<any>{
 
    return this.http.post('http://localhost:8080/PatientREST/suppression' ,obj);
 
  }
 
  getAllPatient():Observable<any>{
 
   
   return this.http.get('http://localhost:8080/PatientREST/affichage');
   
 
 
  }


}
