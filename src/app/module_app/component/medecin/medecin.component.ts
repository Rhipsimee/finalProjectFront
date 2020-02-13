import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../../service/medecin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Medecin } from '../../model/Medecin';
import { Departement } from '../../model/Departement';
import { DepartementService } from '../../service/departement.service';
import { Creneau } from '../../model/Creneau';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  constructor(private medservice:MedecinService, private deptservice:DepartementService) { }
  med:Medecin = new Medecin();
  lstMed:Medecin[];
  lstDept:Departement[];
  dept:Departement;
  
  myForm = new FormGroup({
    idMedecin: new FormControl('',Validators.required),
    nomMedecin: new FormControl('', Validators.required),
    ledept: new FormControl('')
    
  
  });
  
    ngOnInit() { this.affiche();
      this.afficheDept();
      console.log("coucou");
    }
  
    ajout(){
      
      console.log(this.med);
      
      
         this.med.departement = this.dept;
        
     this.medservice.ajoutMedecin(this.med).subscribe
         (
           data => {
             console.log( "dept ajouté avec succès !!" );
           });
  
           
  
     }
     
     suppression(){
     
       this.medservice.supprMedecin(this.med).subscribe
         (
           data => {
             console.log( "dept supprimé avec succès !!" );
           });
       
       }
     
     
     
     affiche():void{
       this.medservice.getAllMedecin().subscribe(data => { this.lstMed = data;},
         error => {console.log(error);});
      
       return;
       
       }

       afficheDept():void{
        this.deptservice.getAllDepartement().subscribe(data => { this.lstDept = data;},
          error => {console.log(error);});

          
       
        return;
        
        }
  
       

}
