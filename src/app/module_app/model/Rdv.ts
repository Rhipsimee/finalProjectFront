import { Medecin } from './Medecin';
import { PatientComponent } from '../component/patient/patient.component';
import { Patient } from './Patient';

export class Rdv {

    idRdv:number;
    date:Date;
    motif:string;
    medecin:Medecin;
    patient:Patient;
    
    
    
    }