import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../service/departement.service';
import { Departement } from '../../model/Departement';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  constructor(private deptservice:DepartementService) { }
dept:Departement = new Departement();
lstDept:Departement[];

myForm = new FormGroup({
  idDepartement: new FormControl('',Validators.required),
  nomDepartement: new FormControl('', Validators.required)
  

});

  ngOnInit() { this.affiche();
  }

  ajout(){
    
    console.log(this.dept);
    
    
       
      
   this.deptservice.ajoutDepartement(this.dept).subscribe
       (
         data => {
           console.log( "dept ajouté avec succès !!" );
         });

         

   }
   
   suppression(){
   
     this.deptservice.supprDepartement(this.dept).subscribe
       (
         data => {
           console.log( "dept supprimé avec succès !!" );
         });
     
     }
   
   
   
   affiche():void{
     this.deptservice.getAllDepartement().subscribe(data => { this.lstDept = data;},
       error => {console.log(error);});
    
     return;
     
     }

     

}
