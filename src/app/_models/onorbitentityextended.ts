import { Entity } from './entity';
import { Antennas } from './antenna/antennas';
import { Batteries } from './battery/batteries';
import { SolarArraries } from './solararray/solararraies';
import { Thrusters } from './thruster/thrusters';
import { OnOrbitDetails } from './onorbitdetails';

export class OnOrbitEntityExtended{
  idOnOrbit: string;
  classificationMarking: string;
  satNo: number;
  commonName: string;
  intlDes: string;
  launchDate: string;
  objectType: string;
  missionNumber: string;
  category: string;
  lifetimeYears: number;
  altName: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  source: string;
  dataMode:  string;
  entityCollection: Entity[];
  antennas: Antennas[];
  batteries: Batteries[];
  solarArrays: SolarArraries[];
  thrusters: Thrusters[];
  onorbitDetails: OnOrbitDetails[];
}