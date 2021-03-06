import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-amenities-form',
  templateUrl: './amenities-form.component.html',
  styleUrls: ['./amenities-form.component.css']
})
export class AmenitiesFormComponent implements OnInit {

  amenities: any;
  @Input() selectedAmenities: Array<string>;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private catalogService: CatalogService) { 
    this.amenities = {};
    this.amenities.Items = [];

    this.catalogService.loadAmenitites("UY")
    .then(c => {
      this.amenities = c;
    });
  }

  ngOnInit() {
  }

  submit(event) {
    this.formSubmit.emit(event);
  }

  change(event){
    if (event.target.checked) {
      //Add
      this.selectedAmenities.push(event.target.value);
    } else{
      //Remove
      var index = this.selectedAmenities.indexOf(event.target.value, 0);
      if (index > -1) {
        this.selectedAmenities.splice(index, 1);
      }
    }
  }

  isSelected(amentity){
    return this.selectedAmenities.indexOf(amentity, 0) != -1;
  }

}
