import { Component } from '@angular/core';
import { Time } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isim:string = "EMRE"
  public isim2:string = "FATİH"
  public Time2:number= Date.now()


  
  public timelineChartData:any =  {
    chartType: 'Timeline',
    dataTable:
    [

      ['Name', 'From', 'BeginTo','Endto'],
      [ this.isim,"Intermediate JavaScript",        new Date(0,0,0,12,0,0),  new Date(0,0,0,13,30,0) ],
      [ this.isim, 'Intermediate JavaScript',    new Date(0,0,0,14,0,0),  new Date(0,0,0,15,30,0) ],
      [ this.isim, 'Advanced JavaScript',        new Date(0,0,0,16,0,0),  new Date(0,0,0,17,30,0) ],
      [ this.isim2,   'Beginning Google Charts',    new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
      [ this.isim2,   'Intermediate Google Charts', new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
      [ this.isim2,   'Advanced Google Charts',     new Date(0,0,0,16,30,0), new Date(0,0,0,18,0,0) ]

    ],
    options: {
      timeline: { singleColor: '#566',fontName:'Helvetica'},
      backgroundColor: '#F1E9E8'
    }

    
 }

}
