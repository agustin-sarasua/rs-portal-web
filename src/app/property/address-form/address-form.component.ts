import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Address} from './../../model/address'
import { CatalogService } from '../../services/catalog.service';
import { MouseEvent } from '@agm/core';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit, AfterViewInit {

  address: Address;
  configuration: any;
  cityCode: string;
  selectedCity: any;
  
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 12;
  
  constructor(private catalogService: CatalogService, private wrapper: GoogleMapsAPIWrapper, private _loader: MapsAPILoader) { 
    this.address = new Address();
    this.address.Country = "UY";
    this.address.City = "MVD";
    this.configuration = { Cities:[]};
    this.selectedCity = { Neighbourhoods: [{Code:"POCITOS", Name:"Pocitos"}]};
    this.cityCode = "MVD";
    this.catalogService.loadConfiguration(this.address.Country)
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
  };

  setLatLng(lat:number, lng:number) {
    this.lat = lat;
    this.lng = lng;
}

}
