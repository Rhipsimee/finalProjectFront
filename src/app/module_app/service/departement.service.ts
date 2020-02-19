import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../model/Departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }

  ajoutDepartement(obj:Departement):Observable<any>{

    return this.http.post('http://localhost:8080/DepartementREST/ajout',obj);


  }
 
  supprDepartement(obj:Departement):Observable<any>{
 
    return this.http.post('http://localhost:8080/DepartementREST/suppression' ,obj);
 
  }
 
  getAllDepartement():Observable<any>{
 
   
   return this.http.get('http://localhost:8080/DepartementREST/affichage');
   
 
 
  }
}
