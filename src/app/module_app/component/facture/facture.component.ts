import { Component, OnInit } from '@angular/core';
import { FactureService } from '../../service/facture.service';
import { ConsultationService } from '../../service/consultation.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Consultation } from '../../model/Consultation';
import { Facture } from '../../model/Facture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  constructor(private facservice:FactureService,private consservice:ConsultationService) { }


fac:Facture = new Facture();
  cons:Consultation;
  lstCons:Consultation[];
  lstFac:Facture[];
  
  
  
  
  
  myForm = new FormGroup({
    idFacture: new FormControl('',Validators.required),
    dateEdition: new FormControl('', Validators.required),
    payee: new FormControl(''),
    lecons: new FormControl('')
    
  
  });
  
    ngOnInit() { this.affiche();
      this.afficheCons();
      
      
    }
  
    ajout(){
      
      console.log(this.cons);
      
      
         this.fac.consultation = this.cons;
         this.fac.payee = false;
        
     this.facservice.ajoutFacture(this.fac).subscribe
         (
           data => {
             console.log( "dept ajouté avec succès !!" );
           });
  
           
  
     }
     
     suppression(){
     
       this.facservice.supprFacture(this.fac).subscribe
         (
           data => {
             console.log( "dept supprimé avec succès !!" );
           });
       
       }
     
     
     
     affiche():void{
       this.facservice.getAllFacture().subscribe(data => { this.lstFac = data;},
         error => {console.log(error);});
      
       return;
       
       }

       afficheCons():void{

        
        this.consservice.getAllConsultation().subscribe(data => { this.lstCons = data;},
          error => {console.log(error);});
          
          
          
       
        return;
        
        }

}
