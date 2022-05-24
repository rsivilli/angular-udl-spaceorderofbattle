import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnorbitentityService } from '../_services/onorbitentity.service';
import { Location } from '@angular/common';
import { Engine } from '../_models/engine';
@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  @Input() entity:Engine;

  constructor(
    private route:ActivatedRoute,
    private entityService:OnorbitentityService,
    private location:Location
  ) { }

  ngOnInit() {
    this.getEntity();
  }
  getEntity(){
    const id = this.route.snapshot.paramMap.get('id');
    this.entityService.getEngine(id)
      .subscribe(entity => this.entity = entity);

  }
  goBack():void{
    this.location.back();
  }

}
