import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import {Address} from './../../model/address'
import { CatalogService } from '../../services/catalog.service';
import { MouseEvent } from '@agm/core';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
declare var $ :any;


declare var google: any;

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit, AfterViewInit {

  @Input() address: FormGroup;
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  mAddress: Address;
  configuration: any;
  cityCode: string;
  selectedCity: any;
  
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 12;
  
  constructor(private catalogService: CatalogService, private wrapper: GoogleMapsAPIWrapper, private _loader: MapsAPILoader) { 
    this.mAddress = new Address();
    this.mAddress.Country = "UY";
    this.mAddress.City = "MVD";
    this.configuration = { Cities:[]};
    this.selectedCity = { Neighbourhoods: [{Code:"POCITOS", Name:"Pocitos"}]};
    this.cityCode = "MVD";
    this.catalogService.loadConfiguration(this.mAddress.Country)
    .then(c => {
      this.configuration = c;
      this.refreshNeighbourhoods(this.cityCode, false);
    });
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((location) => {
          this.setLatLng(location.coords.latitude, location.coords.longitude);
      });
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.select2').on(
        'change',
        (e) => this.refreshNeighbourhoods($(e.target).val(), true)
    );
  };

  refreshNeighbourhoods(cityCode, recenter){
    for(let c of this.configuration.Cities){
      if(cityCode.indexOf(c.Code) !== -1){
        this.selectedCity = c;

        if(recenter){
          this.lat = c.Lat;
          this.lng = c.Lng;
          this.wrapper.getNativeMap().then(gm => gm.setCenter({lat: this.lat, lng: this.lng}))
        }
        
        this.selectedCity.Neighbourhoods = c.Neighbourhoods;
        let n = 0;
        for (let cc of c.Neighbourhoods){
          cc.id = n;
          cc.text = cc.Name;
          n = n +1;
        }
        $('.neighbourhood-selector').empty();
        $(".neighbourhood-selector").select2({
          data: c.Neighbourhoods,
          width: '100%' 
        })
      }
    }
  };

  mapClicked($event: MouseEvent) {
      this.lat= $event.coords.lat;
      this.lng= $event.coords.lng;
      this.address.controls['location'].setValue({
        latitude: this.lat,
        longitude: this.lng
      });
  };

  setLatLng(lat:number, lng:number) {
    this.lat = lat;
    this.lng = lng;
    this.address.controls['location'].setValue({
      latitude: this.lat,
      longitude: this.lng
    });
  }

  submit(tab) {
    let errorStrings: Array<string> = [];
    if (this.address.invalid) {
      const errors: AllValidationErrors[] = getFormValidationErrors(this.address.controls);
      for(let error of errors){
        if (error) {
          let text;
          switch (error.error_name) {
            case 'required': text = `${error.control_name} is required!`; break;
            case 'pattern': text = `${error.control_name} has wrong pattern!`; break;
            case 'email': text = `${error.control_name} has wrong email format!`; break;
            case 'minlength': text = `${error.control_name} has wrong length! Required length: ${error.error_value.requiredLength}`; break;
            case 'areEqual': text = `${error.control_name} must be equal!`; break;
            default: text = `${error.control_name}: ${error.error_name}: ${error.error_value}`;
          }
          errorStrings.push(text);
        }
      }
      alert(errorStrings);
      return;
    }
    //this.formSubmit.emit(tab);
  }

}

export interface AllValidationErrors {
  control_name: string;
  error_name: string;
  error_value: any;
}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}

export function getFormValidationErrors(controls: FormGroupControls): AllValidationErrors[] {
  let errors: AllValidationErrors[] = [];
  Object.keys(controls).forEach(key => {
    const control = controls[ key ];
    if (control instanceof FormGroup) {
      errors = errors.concat(getFormValidationErrors(control.controls));
    }
    const controlErrors: ValidationErrors = controls[ key ].errors;
    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach(keyError => {
        errors.push({
          control_name: key,
          error_name: keyError,
          error_value: controlErrors[ keyError ]
        });
      });
    }
  });
  return errors;
}