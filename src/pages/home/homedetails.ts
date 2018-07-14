import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { Favoris } from '../about/fav.service';


@Component({
  templateUrl: 'home-details.html',
  providers: [Favoris]
})
export class NavigationDetailsPage {

  item;
  favoris: Favoris;

  constructor(params: NavParams, favoris: Favoris) {
    this.item = params.data.item;
    this.favoris = favoris;
  }

  private switchButtonModel:string = '0';

  buttonIcon: string = "heart-outline";
			
	toggleIcon(getIcon: string) {
        
      if (this.buttonIcon === 'heart') {
        this.buttonIcon = "heart-outline";
        this.favoris.removeFav(this.item.title);
      }
      else if (this.buttonIcon === 'heart-outline') {
        this.buttonIcon = "heart";
        this.favoris.addFav(this.item);
      }
    }

  onModelChange($event){
  	this.item.notes.push($event);
  }

  getAvg(grades) {
      var cpt=0;
      var n=grades.length;
      for(var i=0; i<n; i++){
          cpt += grades[i];
      }
      return Math.round(cpt/n*10)/10;
  }
}