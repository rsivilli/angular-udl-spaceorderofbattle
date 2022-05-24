import { Channel } from './channel';

export class Transponder{
    id: string;
    idComm: string;
    name: string;
    classificationMarking: string;
    nid: string;
    tid: string;
    ttf: number;
    symbolRate: number;
    fec: number;
    modulation: string;
    format: string;
    system: string;
    source: string;
    dataMode: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    channels:Channel[];
}