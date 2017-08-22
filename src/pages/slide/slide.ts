import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  @ViewChild(Slides) slides: Slides;
  selectId: number
  public imageindex;
  public arraylength;
  image_array:Array<any>=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
     this.image_array = this.navParams.get('img_arr');
     this.arraylength=this.navParams.get('img_arr').length;
     this.selectId = this.navParams.get('index');
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
   console.log("is start", this.slides.isBeginning())
   console.log("is last", this.slides.isEnd())
  }

}
