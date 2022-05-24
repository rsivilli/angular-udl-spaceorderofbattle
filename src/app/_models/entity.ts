
import { Location } from './location';
import { OperatingUnit } from './organization/operatingunit';
import { RFBand } from './rfband';
import { Status } from './status';

export class Entity{
          idEntity: string;
          name: string;
          classificationMarking: string;
          terrestrialId: string;
          type: string
          idLocation: string;
          countryCode: string;
          ownerType: string;
          taskable: true;
          urls: string[];
          createdAt: string;
          createdBy: string;
          updatedAt: string;
          updatedBy: string;
          source: string;
          dataMode: string;
          location: Location;
          idOnOrbit: string;
          operatingUnit: OperatingUnit;
          idOperatingUnit: string;
          statusCollection: Status[];
          rfBands:RFBand[];
          
        };