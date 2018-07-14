import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Favoris } from './fav.service'
import { OnInit } from '@angular/core';

@Component({
  selector: 'all_favoris',
  templateUrl: 'about.html',
  providers: [Favoris]

})
export class AboutPage implements OnInit {

	favoris: Favoris;

	fav = [];

  constructor(public navCtrl: NavController, favoris: Favoris) {
  	this.favoris = favoris;
  }

  getFav(){
  	this.fav = this.favoris.getFavoris();
  }

  ngOnInit(){
  	this.getFav();
    
    
  }
}
