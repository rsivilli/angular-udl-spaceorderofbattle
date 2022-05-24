import { Contact } from '../contact';
import { OrganizationDetails } from './organizationdetails';

export class Organization{
        id: string;
        classificationMarking: string;
        name: string;
        type: string;
        category: string;
        externalId: string;
        description: string;
        countryCode: string;
        active: true;
        source: string;
        dataMode: string;
        createdAt: string;
        createdBy: string;
        updatedAt: string;
        updatedBy: string;
        contacts: Contact[];
        organizationDetails: OrganizationDetails[];
};
