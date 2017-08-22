import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SlidePage} from '../slide/slide';
import { exportJsonService } from '../service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [exportJsonService]
})
export class HomePage {
  myjsondata: any;
  results: {
    "image": string;  
  }[];

  constructor(public navCtrl: NavController,private exportJson: exportJsonService) {
     this.navCtrl = navCtrl;
     //call service for get json data
     this.exportJson.getData().subscribe((data) => {
       this.results = data;
      });
  }
onLoadNewPage(imagedata,index)
{
  let data={   
    img_arr:this.results,
    index:index
  }
  console.log("index",index);
  this.navCtrl.push(SlidePage,data)
}


}
