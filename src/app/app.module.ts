import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultationComponent } from './module_app/component/consultation/consultation.component';
import { DepartementComponent } from './module_app/component/departement/departement.component';
import { FactureComponent } from './module_app/component/facture/facture.component';
import { MedecinComponent } from './module_app/component/medecin/medecin.component';
import { PatientComponent } from './module_app/component/patient/patient.component';
import { PrescriptionComponent } from './module_app/component/prescription/prescription.component';
import { RdvComponent } from './module_app/component/rdv/rdv.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ConsultationService } from './module_app/service/consultation.service';
import { DepartementService } from './module_app/service/departement.service';
import { FactureService } from './module_app/service/facture.service';
import { MedecinService } from './module_app/service/medecin.service';
import { PatientService } from './module_app/service/patient.service';
import { PrescriptionService } from './module_app/service/prescription.service';
import { RdvService } from './module_app/service/rdv.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './module_app/component/index/index.component';
import { IndexpatientComponent } from './module_app/component/indexpatient/indexpatient.component';
import { PortailsupermedComponent } from './module_app/component/portailsupermed/portailsupermed.component';
import { PortailcollabComponent } from './module_app/component/portailcollab/portailcollab.component';
import { FacupdateComponent } from './module_app/component/facupdate/facupdate.component';
import { CreneauComponent } from './module_app/component/creneau/creneau.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    DepartementComponent,
    FactureComponent,
    MedecinComponent,
    PatientComponent,
    PrescriptionComponent,
    RdvComponent,
    IndexComponent,
    IndexpatientComponent,
    PortailsupermedComponent,
    PortailcollabComponent,
    FacupdateComponent,
    CreneauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [ConsultationService,DepartementService,FactureService,MedecinService,PatientService,PrescriptionService,RdvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
