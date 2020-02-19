import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../service/departement.service';
import { MedecinService } from '../../service/medecin.service';
import { Rdv } from '../../model/Rdv';
import { Medecin } from '../../model/Medecin';
import { Departement } from '../../model/Departement';
import { RdvService } from '../../service/rdv.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
rdv:Rdv = new Rdv();
med:Medecin;
dept:Departement;

lstRdv:Rdv[];
lstMed:Medecin[];
lstDept:Departement[];

myForm = new FormGroup({
  idRdv: new FormControl('',Validators.required),
  motif: new FormControl('', Validators.required),
  ledept: new FormControl(''),
  lemed: new FormControl(''),
  date: new FormControl('')
  

});
  constructor(private deptservice:DepartementService,private medservice:MedecinService,private rdvservice:RdvService) { }

  ngOnInit() {this.affiche();
    this.afficheDept();
    
    
  }

  ajout(){
      
    console.log(this.rdv);
    
    
       this.rdv.medecin = this.med;
      
   this.rdvservice.ajoutRdv(this.rdv).subscribe
       (
         data => {
           console.log( "dept ajouté avec succès !!" );
         });

         

   }
   
   suppression(){
   
     this.rdvservice.supprRdv(this.rdv).subscribe
       (
         data => {
           console.log( "dept supprimé avec succès !!" );
         });
     
     }
   
   
   
   affiche():void{
     this.rdvservice.getAllRdv().subscribe(data => { this.lstRdv = data;},
       error => {console.log(error);});
    
     return;
     
     }

     afficheDept():void{
      this.deptservice.getAllDepartement().subscribe(data => { this.lstDept = data;},
        error => {console.log(error);});

        
     
      return;
      
      }
      afficheMed():void{
        this.medservice.getAllMedecin().subscribe(data => { this.lstMed = data;},
          error => {console.log(error);});
  
          
       
        return;
        
        }

        afficheMedparDept():void{

          console.log(this.dept);

          this.medservice.getAllMedecinParDept(this.dept).subscribe(data => { this.lstMed = data;},
            error => {console.log(error);});
    
            
         
          return;
          



        }

        oui(){
          console.log(this.lstDept);


        }


}
