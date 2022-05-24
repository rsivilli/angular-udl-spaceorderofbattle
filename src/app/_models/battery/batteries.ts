import { Battery } from './battery';

export class Batteries{
    id: string;
    idOnOrbit: string;
    idBattery: string;
    classificationMarking: string;
    quantity: number;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    source: string;
    dataMode: string;
    battery:Battery; 
  }