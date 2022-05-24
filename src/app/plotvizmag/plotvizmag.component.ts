import { Component, OnInit, Input } from '@angular/core';
import { OnorbitentityService } from '../_services/onorbitentity.service';
import { OnOrbitEntity } from '../_models/onorbitentity';

import { DataPoint } from '../_models/datapoint';
import {Chart} from 'chart.js';
import { LogService } from '../_services/log.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plotvizmag',
  templateUrl: './plotvizmag.component.html',
  styleUrls: ['./plotvizmag.component.css']
})
export class PlotvizmagComponent implements OnInit {
@Input() entity:OnOrbitEntity;
data:DataPoint[];
chartVizMag:[];



  constructor(
    private entityService:OnorbitentityService,
    private logger:LogService,    
    private route:ActivatedRoute

  ) { }

  ngOnInit() {
    this.getData();

  }
  getData(){
    const id = this.route.snapshot.paramMap.get('id');
    this.entityService.getOnOrbitEntity(id)
      .subscribe(entity => this.entity = entity);
    this.logger.log(JSON.stringify(this.entity));
    this.data = new Array<DataPoint>()

    this.entityService.getObs("obTime=now-90%20days..now&satNo="+id).subscribe(obs=>{
      for(let i =0, len =obs.length;i<len;i++){
        this.data.push({x:new Date(obs[i].obTime),y:obs[i].mag});
        
      }
      this.chartVizMag= new Chart('canvas',{
        type: 'scatter',
          data: {
            labels: "",
            datasets: [
              { 
                data: this.data,
                borderColor: "#3cba9f",
                fill: false
              }

            ]
          },
          options: {
            title:{
              display:true,
              text:"Viz Mag"

            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
                type: 'time',
                time: {
                    unit: 'day'
                }
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      })
    }

    


  

}
