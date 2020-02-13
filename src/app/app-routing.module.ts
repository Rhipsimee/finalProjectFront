import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedecinComponent } from './module_app/component/medecin/medecin.component';
import { PatientComponent } from './module_app/component/patient/patient.component';
import { IndexComponent } from './module_app/component/index/index.component';
import { IndexpatientComponent } from './module_app/component/indexpatient/indexpatient.component';
import { DepartementComponent } from './module_app/component/departement/departement.component';
import { PortailsupermedComponent } from './module_app/component/portailsupermed/portailsupermed.component';
import { PortailcollabComponent } from './module_app/component/portailcollab/portailcollab.component';
import { RdvComponent } from './module_app/component/rdv/rdv.component';
import { PrescriptionComponent } from './module_app/component/prescription/prescription.component';
import { ConsultationComponent } from './module_app/component/consultation/consultation.component';
import { FactureComponent } from './module_app/component/facture/facture.component';
import { FacupdateComponent } from './module_app/component/facupdate/facupdate.component';
import { CreneauComponent } from './module_app/component/creneau/creneau.component';


const routes: Routes = [

  {path:'medecin', component:MedecinComponent},
  {path:'departement', component:DepartementComponent},
  {path:'patient', component:PatientComponent},
  {path:'portail_medecin', component:IndexComponent},
  {path:'portail_patient', component:IndexpatientComponent},
  {path:'portail_supermedecin', component:PortailsupermedComponent},
  {path:'portail_collaborateur', component:PortailcollabComponent},
  {path:'rdv', component:RdvComponent},
  {path:'inscription', component:PatientComponent},
  {path:'prescription', component:PrescriptionComponent},
  {path:'facture', component:FactureComponent},
  {path:'consultation', component:ConsultationComponent},
  {path:'acqu_facture', component:FacupdateComponent},
  {path:'creneau', component:CreneauComponent}
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
