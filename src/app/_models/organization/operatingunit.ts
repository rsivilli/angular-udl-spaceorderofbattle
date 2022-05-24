import { Organization } from './organization';
import { Contact } from '../contact';

export class OperatingUnit{
    
        idOperatingUnit: string;
        classificationMarking: string;
        name: string;
        description: string;
        idLocation: string;
        idContact: string;
        idOrganization: string;
        createdAt: string;
        createdBy: string;
        updatedAt: string;
        updatedBy: string;
        source: string;
        dataMode: string;
        organization: Organization;
        contact: Contact;
        location: Location;
      
};