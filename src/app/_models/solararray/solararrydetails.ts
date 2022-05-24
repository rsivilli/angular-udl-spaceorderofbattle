import { Organization } from '../organization/organization';

export class SolarArrayDetails{
    id: string;
    idSolarArray: string;
    classificationMarking: string;
    type: string;
    technology: string;
    junctionTechnology: string;
    manufacturerOrgId: string;
    span: number;
    area: number;
    description: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    source: string;
    dataMode: string;
    tags: string[];
    manufacturerOrg: Organization
  }