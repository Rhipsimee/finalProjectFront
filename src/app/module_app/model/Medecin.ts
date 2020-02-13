import { Departement } from './Departement';
import { Rdv } from './Rdv';
import { Creneau } from './Creneau';

export class Medecin {

    idMedecin:number;
    nomMedecin:string;
    departement:Departement;
    lstrdv:Rdv[];
    lstdemain:Creneau[];
    
    
    
    }