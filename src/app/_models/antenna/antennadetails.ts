import { Organization } from '../organization/organization';

export class AntennaDetails{
    id: string;
    idAntenna: string;
    classificationMarking: string;
    type: string;
    position: string;
    mode: string;
    steerable: true;
    beamForming: true;
    manufacturerOrgId: string;
    diameter: number;
    size: number[];
    startFrequency: number;
    endFrequency: number;
    beamwidth: number;
    gain: number;
    gainTolerance: number;
    polarization: number;
    description: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    source: string;
    dataMode: string;
    tags: string[];
    manufacturerOrg: Organization;
  }