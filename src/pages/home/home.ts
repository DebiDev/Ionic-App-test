import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { NavigationDetailsPage }from './homedetails';
import { Recipe } from './home.service';
import { OnInit } from '@angular/core';





@Component({
  templateUrl: 'home.html',
  providers: [Recipe]
})

export class HomePage implements OnInit {

    recipe: Recipe;
    
  items = [];

  constructor(public nav: NavController, recipe: Recipe) {
    this.recipe = recipe;
    
  	
  	
  }

  
  

  getItems(ev: any) {
  	// Reset items back to all of the items
    this.items = this.recipe.getRecipe();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim()) {
        this.items = this.items.filter((item) => {
            for(var i=0; i<item.ingredients.length; i++){
                if(item.ingredients[i].nom.toLowerCase().indexOf(val.toLowerCase()) > -1){
                    return ( item.ingredients[i].nom.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 );
                }else if(i == (item.ingredients.length-1)){
                    return ( item.ingredients[i].nom.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 );
                }
            }
       })
      
    }
  }
  

  openNavDetailsPage(item) {
    this.nav.push(NavigationDetailsPage, { item: item });
  }

  

  ngOnInit(){

    this.recipe.initializeItems();
    this.items = this.recipe.getRecipe();
  }

}
