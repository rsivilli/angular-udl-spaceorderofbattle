import { ThrusterDetails } from './thrusterdetails';

export class Thruster{
    id: string;
    name: string;
    classificationMarking: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    source: string;
    dataMode: string;
    engineDetails: ThrusterDetails
  }