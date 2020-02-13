import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../model/Facture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http:HttpClient) { }

  ajoutFacture(obj:Facture):Observable<any>{

    return this.http.post('http://localhost:8080/FactureREST/ajout',obj);


  }
 
  supprFacture(obj:Facture):Observable<any>{
 
    return this.http.post('http://localhost:8080/FactureREST/suppression' ,obj);
 
  }
 
  getAllFacture():Observable<any>{
 
   
   return this.http.get('http://localhost:8080/FactureREST/affichage');
   
 
 
  }

  updateFacture(obj:Facture):Observable<any>{

    console.log("coucou")

    return this.http.post('http://localhost:8080/FactureREST/update',obj);


  }

 
}
