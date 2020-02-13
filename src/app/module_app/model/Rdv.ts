import { Medecin } from './Medecin';
import { PatientComponent } from '../component/patient/patient.component';
import { Patient } from './Patient';
import { Creneau } from './Creneau';

export class Rdv {

    idRdv:number;
    creneau:Creneau;
    motif:string;
    medecin:Medecin;
    patient:Patient;
    
    
    
    }