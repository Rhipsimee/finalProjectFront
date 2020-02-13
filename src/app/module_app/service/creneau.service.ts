import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Creneau } from '../model/Creneau';
import { Medecin } from '../model/Medecin';

@Injectable({
  providedIn: 'root'
})
export class CreneauService {

  constructor(private http:HttpClient) { }

  ajoutCreneau(obj:Creneau):Observable<any>{

    return this.http.post('http://localhost:8080/CreneauREST/ajout',obj);


  }
 
  supprCreneau(obj:Creneau):Observable<any>{
 
    return this.http.post('http://localhost:8080/CreneauREST/suppression' ,obj);
 
  }
 
  getAllCreneau():Observable<any>{
 
   
   return this.http.get('http://localhost:8080/CreneauREST/affichage');
   
 
 
  }

  updateCreneau(obj:Creneau):Observable<any>{

    console.log("coucoucreneau")

    return this.http.post('http://localhost:8080/CreneauREST/update',obj);


  }

  getAllCreneauParMed(obj:Medecin):Observable<any>{
 
   
    return this.http.post('http://localhost:8080/CreneauREST/recherchefk',obj);
    
  
  
   }
}
