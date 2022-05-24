import { Organization } from '../organization/organization';

export class BatteryDetail{
    id: string;
    idBattery: string;
    classificationMarking: string;
    technology: string;
    capacity: number;
    dischargeDepth: number;
    model: string;
    description: string;
    manufacturerOrgId: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    source: string;
    dataMode: string;
    tags: string[];
    manufacturerOrg: Organization;
  }