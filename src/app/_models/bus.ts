import { Entity } from './entity';

export class Bus{
    
        id: string;
        name: string;
        classificationMarking: string;
        type: string;
        maxLaunchMassLower: 0;
        maxLaunchMassUpper: 0;
        maxBOLStationMass: 0;
        maxBOLPowerLower: 0;
        maxBOLPowerUpper: 0;
        maxEOLPowerLower: 0;
        maxEOLPowerUpper: 0;
        bodyDimensionX: 0;
        bodyDimensionY: 0;
        bodyDimensionZ: 0;
        launchEnvelopeDimensionX: 0;
        launchEnvelopeDimensionY: 0;
        launchEnvelopeDimensionZ: 0;
        maxPayloadMass: 0;
        maxPayloadPower: 0;
        telemetryTrackingManufacturerOrgId: string;
        mainComputerManufacturerOrgId: string;
        manufacturerOrgId: string;
        busKitDesignerOrgId: string;
        massCategory: string;
        powerCategory: string;
        generic: true;
        description: string;
        aocsNotes: string;
        source: string;
        dataMode: string;
        createdAt: string;
        createdBy: string;
        updatedAt: string;
        updatedBy: string;
        entity: Entity
      
}