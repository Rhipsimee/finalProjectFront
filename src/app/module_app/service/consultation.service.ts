import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultation } from '../model/Consultation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http:HttpClient) { }

  ajoutConsultation(obj:Consultation):Observable<any>{

    return this.http.post('http://localhost:8080/ConsultationREST/ajout',obj);


  }
 
  supprConsultation(obj:Consultation):Observable<any>{
 
    return this.http.post('http://localhost:8080/ConsultationREST/suppression' ,obj);
 
  }
 
  getAllConsultation():Observable<any>{
 
   
   return this.http.get('http://localhost:8080/ConsultationREST/affichage');
   
 
 
  }

 

}
