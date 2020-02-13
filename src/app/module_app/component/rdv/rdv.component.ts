import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../service/departement.service';
import { MedecinService } from '../../service/medecin.service';
import { Rdv } from '../../model/Rdv';
import { Medecin } from '../../model/Medecin';
import { Departement } from '../../model/Departement';
import { RdvService } from '../../service/rdv.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Patient } from '../../model/Patient';
import { PatientService } from '../../service/patient.service';
import { Creneau } from '../../model/Creneau';
import { CreneauService } from '../../service/creneau.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
rdv:Rdv = new Rdv();
med:Medecin;
dept:Departement;
pat:Patient;
cren:Creneau;

lstRdv:Rdv[];
lstMed:Medecin[];
lstDept:Departement[];
lstPat:Patient[];
lstCren:Creneau[];

myForm = new FormGroup({
  idRdv: new FormControl('',Validators.required),
  motif: new FormControl('', Validators.required),
  ledept: new FormControl(''),
  lemed: new FormControl(''),
  date: new FormControl(''),
  lepatient : new FormControl(''),
  lecren : new FormControl('')
  
  

});
  constructor(private deptservice:DepartementService,private medservice:MedecinService,private rdvservice:RdvService, private patservice:PatientService, private crenservice:CreneauService) { }

  ngOnInit() {this.affiche();
    this.afficheDept();
    this.affichePat();
    
    
  }

  ajout(){
      
    console.log(this.rdv);
    
    
       this.rdv.medecin = this.med;
       this.rdv.patient = this.pat;
       this.rdv.creneau = this.cren;


      
   this.rdvservice.ajoutRdv(this.rdv).subscribe
       (
         data => {
           console.log( "dept ajouté avec succès !!" );
         });


         this.updateCren();

         

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
        afficheCrenparMed():void{

          console.log(this.med);

          

          this.crenservice.getAllCreneauParMed(this.med).subscribe(data => { this.lstCren = data;},
            error => {console.log(error);});
    
            
         
          return;
          



        }

        affichePat():void{
          this.patservice.getAllPatient().subscribe(data => { this.lstPat = data;},
            error => {console.log(error);});
    
            
         
          return;
          
          }

          updateCren(){

            this.cren.reserve = true;

         this.crenservice.updateCreneau(this.cren).subscribe(
          error => {console.log(error);});

         console.log(this.cren);



          }

        oui(){
          console.log(this.lstDept);


        }


}
