import { BatteryDetail } from './batterydetail';

export class Battery{
    id: string;
    name: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    source: string;
    dataMode: string;
    batteryDetails: BatteryDetail[];
  }