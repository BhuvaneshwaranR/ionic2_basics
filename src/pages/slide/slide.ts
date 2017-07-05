import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Slides } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  @ViewChild(Slides) slides: Slides;

  public imageindex;
  image_array:Array<any>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     for(let i=0;i<10;i++){
    this.image_array.push({'image': "http://placehold.it/50x50"});
    }
  }

   

  // goToSlide() {
  //   this.slides.slideTo(2, 500);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage',this.navParams.get('index'));
    this.imageindex=this.navParams.get('index');
   
  }

ionViewWillEnter() {
  // console.log("this.imagedata",this.imageindex)
   this.slides.slideTo(this.imageindex, 10);
 }
  goToHome(){
    this.navCtrl.pop();
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
  }

}
