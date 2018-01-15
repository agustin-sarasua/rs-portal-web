import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { CatalogService } from '../../services/catalog.service';
declare var $ :any;

@Component({
  selector: 'app-property-info-form',
  templateUrl: './property-info-form.component.html',
  styleUrls: ['./property-info-form.component.css']
})
export class PropertyInfoFormComponent implements OnInit {

  @Input() property: FormGroup;

  propertyTypes: any;

  constructor(private catalogService: CatalogService) { 
    this.propertyTypes = {};
    this.propertyTypes.Items = [];

    this.catalogService.loadPropertyTypes("UY")
    .then(c => {
      this.propertyTypes = c;
    });
  }

  ngOnInit() {
  }

}
