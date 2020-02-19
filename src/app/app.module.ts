import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

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


@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    DepartementComponent,
    FactureComponent,
    MedecinComponent,
    PatientComponent,
    PrescriptionComponent,
    RdvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [ConsultationService,DepartementService,FactureService,MedecinService,PatientService,PrescriptionService,RdvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
