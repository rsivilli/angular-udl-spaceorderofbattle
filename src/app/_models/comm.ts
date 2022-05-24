import { Entity } from './entity';
import { Transponder } from './transponder';

export class Comm{
    id: string;
    name: string;
    classificationMarking:string;
    description: string;
    source: string;
    dataMode: string;
    createAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    entity: Entity;
    transponders:Transponder[];
}