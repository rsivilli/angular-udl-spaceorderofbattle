import { AntennaDetails } from './antennadetails';

export class Antenna{
    id: string;
    name: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    source: string;
    dataMode: string;
    antennaDetails: AntennaDetails[];
  }