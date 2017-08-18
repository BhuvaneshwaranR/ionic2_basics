import { Component,ViewChild,ViewChildren,QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { exportJsonService } from '../service';

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
  providers: [exportJsonService]
})
export class SlidePage {

  @ViewChild(Slides) slides: Slides;
  @ViewChildren(Slides) slideCollection: QueryList<Slides>;

  public imageindex;
  public arraylength;
  image_array:Array<any>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private exportJson: exportJsonService) {
     //call service for get json data
     this.exportJson.getData().subscribe((data) => {
       this.image_array = data;
       this.arraylength=data.length;
      });
  }

   

  // goToSlide() {
  //   this.slides.slideTo(2, 500);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage',this.navParams.get('index'));
    this.imageindex=this.navParams.get('index');  
    // this.slides.slideTo(this.imageindex, 5); 
  }

ionViewDidEnter() {
  // ionViewWillEnter(){
  console.log("this.imageindex",this.imageindex)
   this.slides.slideTo(this.imageindex, this.arraylength);
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  goToHome(){
    this.navCtrl.pop();
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
   console.log("is start", this.slides.isBeginning())
   console.log("is last", this.slides.isEnd())
  }

}
