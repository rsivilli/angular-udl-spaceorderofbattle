import { Component, OnInit, Input } from '@angular/core';
import { Comm } from '../_models/comm';
import { ActivatedRoute } from '@angular/router';
import { OnorbitentityService } from '../_services/onorbitentity.service';
import { Location } from '@angular/common';
import { Channel } from '../_models/channel';
import { LogService } from '../_services/log.service';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.css']
})
export class CommComponent implements OnInit {
  @Input() entity:Comm;

  constructor(
    private route:ActivatedRoute,
    private entityService:OnorbitentityService,
    private location:Location,
    private logger:LogService
  ) { }

  ngOnInit() {
    this.getEntity();
  }
  getEntity(){
    const id = this.route.snapshot.paramMap.get('id');
    this.entityService.getComm(id)
      .subscribe(entity => this.entity = entity);

  }
  goBack():void{
    this.location.back();
  }
  getChannels():Channel[]{
    let out = [];
    

    return out;
  }


}
