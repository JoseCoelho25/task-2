import { Component } from '@angular/core';
import * as jsonData from '../app/data/sidebar_default (1).json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Store data from json file
  data: any = jsonData;

// Create an empty Record to store subcategories.
  subcategoriesMap: Record<number, any> = {};

  ngOnInit() {
    console.log('Data', this.data);

    // Iterate through each category and its subcategories.
    this.data.categories.forEach((category: any) => {
      category.subcategories.forEach((subcategory: any) => {
        // Use the subcategory ID as the key and store the subcategory object in the Record.
        this.subcategoriesMap[subcategory.id] = subcategory;

      });
    });

    console.log('Subcategories Map', this.subcategoriesMap);

  }
}
