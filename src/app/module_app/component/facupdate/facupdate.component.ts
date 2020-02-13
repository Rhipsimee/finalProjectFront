import { Component, OnInit } from '@angular/core';
import { FactureService } from '../../service/facture.service';
import { Facture } from '../../model/Facture';
import { Consultation } from '../../model/Consultation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsultationService } from '../../service/consultation.service';

@Component({
  selector: 'app-facupdate',
  templateUrl: './facupdate.component.html',
  styleUrls: ['./facupdate.component.css']
})
export class FacupdateComponent implements OnInit {

  constructor(private facservice:FactureService,private consservice:ConsultationService) { }


  newfac:Facture = new Facture();
  oldfac:Facture;
    cons:Consultation;
    lstCons:Consultation[];
    lstFac:Facture[];
    
    
    
    
    
    myForm = new FormGroup({
      
      leoldfac: new FormControl('',Validators.required)
      
    
    });
    
      ngOnInit() { this.affiche();
        this.afficheCons();
        
        
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

          update():void {

            console.log(this.oldfac);

            this.newfac = this.oldfac;

            this.newfac.payee = true;

            this.facservice.updateFacture(this.newfac).subscribe(data => { this.newfac = data;},
              error => {console.log(error);});;



          }

          selec():void {


            this.oldfac;
          }

}
