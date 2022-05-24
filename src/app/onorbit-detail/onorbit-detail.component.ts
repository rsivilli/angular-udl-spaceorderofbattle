import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { OnorbitentityService } from '../_services/onorbitentity.service';
import { OnOrbitEntityExtended } from '../_models/onorbitentityextended';

@Component({
  selector: 'app-onorbit-detail',
  templateUrl: './onorbit-detail.component.html',
  styleUrls: ['./onorbit-detail.component.css']
})
export class OnorbitDetailComponent implements OnInit {
  @Input() entity: OnOrbitEntityExtended;

  constructor(
    private route:ActivatedRoute,
    private entityService:OnorbitentityService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEntity();
  }
  
  getEntity(){
    const id = this.route.snapshot.paramMap.get('id');
    this.entityService.getOnOrbitEntity(id)
      .subscribe(entity => this.entity = entity);

  }
  goBack(): void{
    this.location.back();
  }
  toPrint():Object{
    if(!this.entity) return [];
    let out = {};
    Object.keys(this.entity).forEach((val)=>{
      if(!(val==='entityCollection'||val==='batteries'||val==='solarArrays'||val==='thrusters'||val==='antennas'
      ||val==='onorbitDetails'||this.entity[val]===''||this.entity[val]===null))out[val]=this.entity[val];
    })
    return out;
    

  }


}
