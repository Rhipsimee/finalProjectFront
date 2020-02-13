import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../../model/Patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private patservice:PatientService) { }

  myForm = new FormGroup({
    idPatient: new FormControl('',Validators.required),
    nomPatient: new FormControl('', Validators.required),
    prenomPatient: new FormControl('', Validators.required),
    sexe: new FormControl(''),
    dateNaissance: new FormControl(''),
    numSecu: new FormControl(''),
    mailPatient: new FormControl('')

  });

  pat:Patient = new Patient();
  lstPat:Patient[];

  ngOnInit() { this.affiche
  }
  ajout(){
    
    console.log(this.pat);
    
    
       
      
   this.patservice.ajoutPatient(this.pat).subscribe
       (
         data => {
           console.log( "dept ajouté avec succès !!" );
         });

         

   }
   
   suppression(){
   
     this.patservice.supprPatient(this.pat).subscribe
       (
         data => {
           console.log( "dept supprimé avec succès !!" );
         });
     
     }
   
   
   
   affiche():void{
     this.patservice.getAllPatient().subscribe(data => { this.lstPat = data;},
       error => {console.log(error);});
    
     return;
     
     }

     

}
