import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { CatalogService } from '../../services/catalog.service';
import { AllValidationErrors, getFormValidationErrors, getErrors } from './../../util/validation-util'

declare var $ :any;

@Component({
  selector: 'app-property-info-form',
  templateUrl: './property-info-form.component.html',
  styleUrls: ['./property-info-form.component.css']
})
export class PropertyInfoFormComponent implements OnInit {

  @Input() property: FormGroup;

  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  propertyTypes: any;

  countryConfig: any;

  constructor(private catalogService: CatalogService) { 
    this.countryConfig = {States:[]}
    this.propertyTypes = {};
    this.propertyTypes.Items = [];
    this.countryConfig = catalogService.countryConfiguration;
    this.catalogService.loadPropertyTypes("UY")
    .then(c => {
      this.propertyTypes = c;
    });
  }

  ngOnInit() {
    this.property.controls["bedrooms"].setValue(1);
    this.property.controls["bathrooms"].setValue(1);
    this.property.controls["garages"].setValue(0);
    this.property.controls["floors"].setValue(1);
  }

  setBedrooms(val) {
    this.property.controls["bedrooms"].setValue(val);
  }

  setBathrooms(val) {
    this.property.controls["bathrooms"].setValue(val);
  }

  setGarages(val) {
    this.property.controls["garages"].setValue(val);
  }

  setFloors(val) {
    this.property.controls["floors"].setValue(val);
  }

  submit(tab) {
    let errorStrings: Array<string> = [];
    if (this.property.invalid) {
      const errors: AllValidationErrors[] = getFormValidationErrors(this.property.controls);
      errorStrings = getErrors(errors)
      alert(errorStrings);
      return;
    }
    this.formSubmit.emit(tab);
  }


}
