import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rdv } from '../model/Rdv';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http:HttpClient) { }

  ajoutRdv(obj:Rdv):Observable<any>{

    return this.http.post('http://localhost:8080/RdvREST/ajout',obj);


  }
 
  supprRdv(obj:Rdv):Observable<any>{
 
    return this.http.post('http://localhost:8080/RdvREST/suppression' ,obj);
 
  }
 
  getAllRdv():Observable<any>{
 
   
   return this.http.get('http://localhost:8080/RdvREST/affichage');
   
 
 
  }
}
