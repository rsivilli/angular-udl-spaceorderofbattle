import { Component, OnInit, Input } from '@angular/core';
import { Entity } from '../_models/entity';
import { ActivatedRoute, Router } from '@angular/router';
import { OnorbitentityService } from '../_services/onorbitentity.service';
import {Location} from '@angular/common';
import { LogService } from '../_services/log.service';


@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
@Input() entity:Entity;
  constructor(
    private route:ActivatedRoute,
    private entityService:OnorbitentityService,
    private location: Location,
    private router:Router,
    private logger:LogService
  ) { }

  ngOnInit() {
    this.getEntity();
  }
  getEntity(){
   const id = this.route.snapshot.paramMap.get('id');
   this.entityService.getEntity(id)
      .subscribe(entity => this.entity = entity);


  }
  goBack():void{
    this.location.back();
  }
  whoCanInterfere():void{
    let out = [];
    for(let i =0, len = this.entity.rfBands.length;i<len;i++){
      out.push(this.entity.rfBands[i].band);
    }
    this.entityService.getEntityQuery("bandMode=TX&band="+out.toString()).subscribe(
      entities =>{
        let out = [];
        for(let i = 0, len = entities.length; i<len;i++){
          if(entities[i].idOnOrbit)out.push(entities[i].idOnOrbit);
        }
        this.router.navigate(["/SOB/list/idOnOrbit="+out.toString()]);

      }
    )

  }
  whoCanIInterfere():void{
    let out = [];
    for(let i =0, len = this.entity.rfBands.length;i<len;i++){
      if(this.entity.rfBands[i].mode==="TX")out.push(this.entity.rfBands[i].band);
    }
    this.entityService.getEntityQuery("band="+out.toString()).subscribe(
      entities =>{
        let out = [];
        for(let i = 0, len = entities.length; i<len;i++){
          if(entities[i].idOnOrbit)out.push(entities[i].idOnOrbit);
        }
        this.router.navigate(["/SOB/list/idOnOrbit="+out.toString()]);

      }
    )

  }
  whatCanThisInterfereWith(centerfreq:number):void{
    this.logger.log("clicked");
    
    this.entityService.getEntityQuery("freqMax=>"+centerfreq+"&freqMin=<"+centerfreq+"&idEntity=~"+this.entity.idEntity).subscribe(
      entities =>{
        let out = [];
        for(let i = 0, len = entities.length; i<len;i++){
          if(entities[i].idOnOrbit)out.push(entities[i].idOnOrbit);
        }
        this.router.navigate(["/SOB/list/idOnOrbit="+out.toString()]);
      }
    )

  }

}
