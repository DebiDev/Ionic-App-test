import {Injectable} from '@angular/core'



@Injectable()
export class Favoris{

	favoris = [];

	addFav(items){
		this.favoris.push(items);
	}

	removeFav(name){
		for(var i=0; i<this.favoris.length; i++){
			if(this.favoris[i].title == name){
				this.favoris.splice(i, 1);
			}
		}
	}

	getFavoris(){
		if(this.favoris != undefined){
			return this.favoris;
		}
		else{
			var noFav = [{'title' : 'Pas de favoris'}];
			return noFav;
		}
	}
}