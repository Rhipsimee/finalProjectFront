import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../service/prescription.service';
import { ConsultationService } from '../../service/consultation.service';
import { Prescription } from '../../model/Prescription';
import { Consultation } from '../../model/Consultation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Facture } from '../../model/Facture';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  constructor(private presservice:PrescriptionService,private consservice:ConsultationService) { }


pres:Prescription = new Prescription();
  cons:Consultation;
  lstCons:Consultation[];
  lstPres:Prescription[];
  fac:Facture;
  
  
  
  
  
  myForm = new FormGroup({
    idPrescription: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    validee: new FormControl(''),
    lecons: new FormControl('')
    
  
  });
  
    ngOnInit() { this.affiche();
      this.afficheCons();
      
      
      
    }
  
    ajout(){
      
      console.log(this.cons);
      this.afficheFacparCons();
      
      
         this.pres.consultation = this.cons;
         this.pres.validee = this.fac.payee;
        
     this.presservice.ajoutPrescription(this.pres).subscribe
         (
           data => {
             console.log( "dept ajouté avec succès !!" );
           });
  
           
  
     }
     
     suppression(){
     
       this.presservice.supprPrescription(this.pres).subscribe
         (
           data => {
             console.log( "dept supprimé avec succès !!" );
           });
       
       }
     
     
     
     affiche():void{
       this.presservice.getAllPrescription().subscribe(data => { this.lstPres = data;},
         error => {console.log(error);});
      
       return;
       
       }

       afficheCons():void{

        
        this.consservice.getAllConsultation().subscribe(data => { this.lstCons = data;},
          error => {console.log(error);});
          
          
          
       
        return;
        
        }

        afficheFacparCons():void{

          

          this.presservice.getAllFactureParCons(this.cons).subscribe(data => { this.fac = data;},
            error => {console.log(error);});
    
            console.log(this.fac);
         
          return;
          



        }

}
