import { Component, OnInit, Input } from '@angular/core';
import { OnorbitentityService } from '../_services/onorbitentity.service';
import { OnOrbitEntity } from '../_models/onorbitentity';
import { DataPoint } from '../_models/datapoint';
import { LogService } from '../_services/log.service';
import { ActivatedRoute } from '@angular/router';
import {Chart} from 'chart.js';



@Component({
  selector: 'app-tlevisualizer',
  templateUrl: './tlevisualizer.component.html',
  styleUrls: ['./tlevisualizer.component.css']
})
export class TlevisualizerComponent implements OnInit {
  @Input() entity:OnOrbitEntity;
  data:DataPoint[];
  chart:[];
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

    this.entityService.getTLEs("maxResults=300&epoch=now-90%20days..now&satNo="+id).subscribe(tles=>{
      
      for(let i =0, len =tles.length;i<len;i++){
        try{
          
          
        this.data.push({x:new Date(tles[i].epoch),y:tles[i].meanMotion});
        //console.log(this.data[i]);
        this.chart= new Chart('meanmotion',{
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
                text:"Drift Rate"
  
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
        }catch (err){
          console.log(JSON.stringify(err));
        }
        
      }
      
      })
    }
    

  }


