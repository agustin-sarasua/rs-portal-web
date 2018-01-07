import { Component, OnInit } from '@angular/core';
import {Address} from './../../model/address'
import { CatalogService } from '../../services/catalog.service';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  address: Address;
  configuration: any;
  cityCode: string;

  selectedDevice = 'two';
  deviceObjects = [{name: 1}, {name: 2}, {name: 3}];
  selectedDeviceObj = this.deviceObjects[1];
  
  constructor(private catalogService: CatalogService) { 
    this.address = new Address();
    this.address.Country = "UY";
    this.address.City = "MVD";
    this.configuration = { Cities:[]}
    this.cityCode = "MVD";
    this.catalogService.loadConfiguration(this.address.Country).then(c => this.configuration = c);
  }

  ngOnInit() {
  }

  onChange(newValue) {
    console.log(newValue);
    this.selectedDevice = newValue;
    // ... do other stuff here ...
  }

  onChangeObj(newObj) {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
    // ... do other stuff here ...
  }

}
