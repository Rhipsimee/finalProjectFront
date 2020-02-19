import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from '../model/Medecin';
import { Departement } from '../model/Departement';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http:HttpClient) { }

  ajoutMedecin(obj:Medecin):Observable<any>{

    return this.http.post('http://localhost:8080/MedecinREST/ajout',obj);


  }
 
  supprMedecin(obj:Medecin):Observable<any>{
 
    return this.http.post('http://localhost:8080/MedecinREST/suppression' ,obj);
 
  }
 
  getAllMedecin():Observable<any>{
 
   
   return this.http.get('http://localhost:8080/MedecinREST/affichage');
   
 
 
  }

  getAllMedecinParDept(obj:Departement):Observable<any>{
 
   
    return this.http.post('http://localhost:8080/MedecinREST/recherchefk',obj);
    
  
  
   }
}
