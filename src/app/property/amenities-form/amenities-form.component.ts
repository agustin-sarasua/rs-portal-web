import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-amenities-form',
  templateUrl: './amenities-form.component.html',
  styleUrls: ['./amenities-form.component.css']
})
export class AmenitiesFormComponent implements OnInit {

  amenities: any;
  selectedAmenities: Array<string>;

  constructor(private catalogService: CatalogService) { 
    this.amenities = {};
    this.amenities.Items = [];
    this.selectedAmenities = [];

    this.catalogService.loadAmenitites("UY")
    .then(c => {
      this.amenities = c;
      //this.refreshNeighbourhoods(this.cityCode, false);
    });
  }

  ngOnInit() {

  }

  change(event){
    if (event.target.checked) {
      //Add
      this.selectedAmenities.push(event.target.value);
    } else{
      //Remove
      var index = this.selectedAmenities.indexOf(event.target.value, 0);
      if (index > -1) {
        this.amenities.splice(index, 1);
      }
    }
    
  }

  isSelected(amentity){
    return this.selectedAmenities.indexOf(amentity, 0) != -1;
  }

}
