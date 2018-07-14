import {Injectable} from '@angular/core'


@Injectable()
export class Recipe{

	items = [];

	initializeItems(){
	    this.items = [
	    {
	        'title': 'Adieu cafe ! ',
	        'icon': "/assets/img/Adieu_cafe.jpg",
	        'ingredients': [ 
	        	{
	        		'nom' : 'Carotte',
	        		'qt' : '245g'
	        	},
	        	{
	        		'nom' : 'Thé vert',
	        		'qt' : '240g'
	        	},
	        	{
	        		'nom' : 'Pomme',
	        		'qt' : '180g'
	        	},
	        	{
	        		'nom' : 'Orange',
	        		'qt' : '130g'
	        	},
	        	{
	        		'nom' : 'Citron',
	        		'qt' : '15g'
	        	},
	        	{
	        		'nom' : 'Miel',
	        		'qt' : '7g'
	        	}
	        ],
	        'recipes': [
	            {
	                'method' : 'Faire une tasse de thé vert'
	            },
	            {
	                'method' : 'Ajouter le miel'
	            },
	            {
	                'method' : 'Mettre tous les autres ingredients dans un presse-agrumes'
	            },
	            {
	                'method' : 'Verser le thé dans les jus, mélanger et servir'
	            }
	        ],
	        'notes' :[0,5]
	    },
	    {
	        'title': 'Arthritis Soother',
	        'icon': "/assets/img/Arthritis_Soother.jpg",
	        'ingredients': [ 
	        	{
	        		'nom' : 'Carotte',
	        		'qt' : '215g'
	        	},
	        	{
	        		'nom' : 'Celeri',
	        		'qt' : '190g'
	        	},
	        	{
	        		'nom' : 'Pomme',
	        		'qt' : '180g'
	        	},
	        	{
	        		'nom' : 'Broccoli',
	        		'qt' : '150g'
	        	},
	        	{
	        		'nom' : 'Asperge',
	        		'qt' : '65g'
	        	},
	        	{
	        		'nom' : 'Persil',
	        		'qt' : '40g'
	        	},
	        	{
	        		'nom' : 'Huile d\'olive',
	        		'qt' : '13g'
	        	}
	        ],
	        'recipes': [
	            {
	                'method' : 'Assurez-vous de ne pas mettre de l\'huile d\'olive dans votre presse-agrumes. Placez l\'huile d\'olive dans un verre, puis versez le jus sur celui-ci et remuez pour bien mélanger.'
	            }
	        ],
	        'notes' :[]
	    }, 
	    {
	        'title': 'Dragon Blood',
	        'icon': "/assets/img/Dragon_blood.jpg",
	        'ingredients': [ 
	            {
	                'nom' : 'Poire',
	                'qt' : '355g'
	            },
	            {
	                'nom' : 'Chou rouge',
	                'qt' : '90g'
	            },
	            {
	                'nom' : 'Citron (avec de l\'écorce)',
	                'qt' : '30g'
	            }
	        ],
	        'recipes': [
	            {
	                'method' : 'Mettre tous les ingrédients dans un presse-agrumes, agiter ou remuer et servir.'
	            }
	        ],
	        'notes' :[]
	    },
	    ]
	}

	getRecipe(){
		return this.items;
	}


}	