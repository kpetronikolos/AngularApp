import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Test Description', 
    'https://vignette.wikia.nocookie.net/injusticegodsamongus/images/7/74/Kirby_%28Air_Ride%29.jpg/revision/latest?cb=20130703215944'),
    new Recipe('My Recipe', 'My Description', 'https://vignette.wikia.nocookie.net/injusticegodsamongus/images/7/74/Kirby_%28Air_Ride%29.jpg/revision/latest?cb=20130703215944')
  ];

  constructor() { }

  ngOnInit() {
  }

}
