import { Component, OnInit, Input } from '@angular/core';
import {OnOrbitEntity} from '../_models/onorbitentity';

import {OnorbitentityService} from '../_services/onorbitentity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LogService } from '../_services/log.service';

@Component({
  selector: 'app-onorbitentities',
  templateUrl: './onorbitentities.component.html',
  styleUrls: ['./onorbitentities.component.css']
})
export class OnorbitentitiesComponent implements OnInit {
  entities: OnOrbitEntity[];

  constructor(
    private entityService:OnorbitentityService,
    private route:ActivatedRoute,
    private router:Router,
    private location:Location,
    private logger:LogService
    ) { }

  ngOnInit() {
    this.getEntities();
  }
  getEntities():void{
    const query = this.route.snapshot.paramMap.get('query');
    this.logger.log(query);
    this.entityService.getOnOrbitEntities(query).subscribe(entities => this.entities = entities);

  }


}
