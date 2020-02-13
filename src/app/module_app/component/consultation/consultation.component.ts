import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../service/consultation.service';
import { RdvService } from '../../service/rdv.service';
import { Consultation } from '../../model/Consultation';
import { Rdv } from '../../model/Rdv';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../../model/Patient';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  constructor(private consservice:ConsultationService, private rdvservice:RdvService) { }
  cons:Consultation = new Consultation();
  lstCons:Consultation[];
  lstRdv:Rdv[];
  
  
  rdv:Rdv;
  
  myForm = new FormGroup({
    idConsultation: new FormControl('',Validators.required),
    bilanPrescription: new FormControl('', Validators.required),
    lerdv: new FormControl('')
    
  
  });
  
    ngOnInit() { this.affiche();
      this.afficheRdv();
      
      
    }
  
    ajout(){
      
      console.log(this.cons);
      
      
         this.cons.rdv = this.rdv;
        
     this.consservice.ajoutConsultation(this.cons).subscribe
         (
           data => {
             console.log( "dept ajouté avec succès !!" );
           });
  
           
  
     }
     
     suppression(){
     
       this.consservice.supprConsultation(this.cons).subscribe
         (
           data => {
             console.log( "dept supprimé avec succès !!" );
           });
       
       }
     
     
     
     affiche():void{
       this.consservice.getAllConsultation().subscribe(data => { this.lstCons = data;},
         error => {console.log(error);});
      
       return;
       
       }

       afficheRdv():void{

        
        this.rdvservice.getAllRdv().subscribe(data => { this.lstRdv = data;},
          error => {console.log(error);});
          
          
          
       
        return;
        
        }

        // oui(){

        //   let nb: number = 0;

        
          

        //   for (let setri of this.lstRdv){

        //     let set = setri.patient.nomPatient;

        //     // let se = set.nomPatient as String;

        //     // this.lstNomPat[nb] = se;

        //     // nb++;


        //   }



        }
  


