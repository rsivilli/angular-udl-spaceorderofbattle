import { SolarArrayDetails } from './solararrydetails';

export class SolarArray{
    id: string;
    name: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    source: string;
    dataMode: string;
    solarArrayDetails: SolarArrayDetails[];
  }