import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescription } from '../model/Prescription';
import { Consultation } from '../model/Consultation';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {


  constructor(private http:HttpClient) { }

  ajoutPrescription(obj:Prescription):Observable<any>{

    return this.http.post('http://localhost:8080/PrescriptionREST/ajout',obj);


  }
 
  supprPrescription(obj:Prescription):Observable<any>{
 
    return this.http.post('http://localhost:8080/PrescriptionREST/suppression' ,obj);
 
  }
 
  getAllPrescription():Observable<any>{
 
   
   return this.http.get('http://localhost:8080/PrescriptionREST/affichage');
   
 
 
  }

  getAllFactureParCons(obj:Consultation):Observable<any>{
 
   
    return this.http.post('http://localhost:8080/FactureREST/recherchefk',obj);
    
  
  
   }
}
