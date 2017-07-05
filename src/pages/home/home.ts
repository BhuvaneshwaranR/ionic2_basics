import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SlidePage} from '../slide/slide';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: {
    "image": string;  
  }[];

  constructor(public navCtrl: NavController) {
     this.navCtrl = navCtrl;
     this.results = this.getResults();
  }
onLoadNewPage(imagedata,index)
{
  let data={
    image:imagedata.image,
    index:index
  }
  this.navCtrl.push(SlidePage,data)
}

getResults() {
      return [
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},        
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"},
        {"image": "http://placehold.it/50x50"}
      ];
  }
}
