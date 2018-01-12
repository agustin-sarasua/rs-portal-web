import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-amenities-form',
  templateUrl: './amenities-form.component.html',
  styleUrls: ['./amenities-form.component.css']
})
export class AmenitiesFormComponent implements OnInit {

  amenitites: any;
  selectedAmenities: Array<string>;

  constructor(private catalogService: CatalogService) { 
    this.catalogService.loadAmenitites("UY")
    .then(c => {
      this.amenitites = c;
      //this.refreshNeighbourhoods(this.cityCode, false);
    });
  }

  ngOnInit() {
  }

  change(event){
    if (event.target.checked) {
      //Add
      this.amenitites.push(event.target.name);
    } else{
      //Remove
      var index = this.amenitites.indexOf(event.target.name, 0);
      if (index > -1) {
        this.amenitites.splice(index, 1);
      }
    }
    
  }

  isSelected(amentity){
    return this.amenitites.indexOf(amentity, 0) != -1;
  }

}
