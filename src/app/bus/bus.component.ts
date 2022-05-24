import { Component, OnInit, Input } from '@angular/core';
import { Bus } from '../_models/bus';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OnorbitentityService } from '../_services/onorbitentity.service';
import { Location } from '@angular/common';
import { OnOrbitEntity } from '../_models/onorbitentity';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  @Input() entity:Bus;


  constructor(
    private route:ActivatedRoute,
    private entityService:OnorbitentityService,
    private location:Location,
    private router:Router
  ) { }

  ngOnInit() {
    this.getEntity();
  }
  getEntity(){
    const id = this.route.snapshot.paramMap.get('id');
    this.entityService.getBus(id)
      .subscribe(entity => this.entity = entity);

  }
  goBack():void{
    this.location.back();
  }
  goToSatellites():void{
    this.entityService.getBuses("?type="+this.entity.type).subscribe(buses=>
      {
        let out = [];
        for(let i =0,len=buses.length; i<len;i++){
          if(buses[i].entity.idOnOrbit)out.push(buses[i].entity.idOnOrbit);

        }
        this.router.navigate(["/SOB/list/idOnOrbit="+out.toString()]);
      });
    //this.location.go("/")
  }
  

}
