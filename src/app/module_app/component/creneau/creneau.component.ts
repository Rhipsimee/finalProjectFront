import { Component, OnInit } from '@angular/core';
import { CreneauService } from '../../service/creneau.service';
import { MedecinService } from '../../service/medecin.service';
import { Creneau } from '../../model/Creneau';
import { Medecin } from '../../model/Medecin';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-creneau',
  templateUrl: './creneau.component.html',
  styleUrls: ['./creneau.component.css']
})
export class CreneauComponent implements OnInit {

  constructor(private creservice:CreneauService,private medservice:MedecinService) { }


  cren:Creneau = new Creneau();
    med:Medecin;
    lstCren:Creneau[];
    lstMed:Medecin[];
    
    
    
    
    
    myForm = new FormGroup({
      id: new FormControl('',Validators.required),
      horaire: new FormControl('', Validators.required),
      medecin: new FormControl(''),
      lemed: new FormControl('')
      
    
    });
    
      ngOnInit() { this.affiche();
        this.afficheMed();
        
        
      }
    
      ajout(){
        
        
        
        this.cren.medecin = this.med;
           
          
       this.creservice.ajoutCreneau(this.cren).subscribe
           (
             data => {
               console.log( "dept ajouté avec succès !!" );
             });
    
             
    
       }
       
       suppression(){
       
         this.creservice.supprCreneau(this.cren).subscribe
           (
             data => {
               console.log( "dept supprimé avec succès !!" );
             });
         
         }
       
       
       
       affiche():void{
         this.creservice.getAllCreneau().subscribe(data => { this.lstCren = data;},
           error => {console.log(error);});
        
         return;
         
         }
  
         afficheMed():void{
  
          
          this.medservice.getAllMedecin().subscribe(data => { this.lstMed = data;},
            error => {console.log(error);});
            
            
            
         
          return;
          
          }
}
