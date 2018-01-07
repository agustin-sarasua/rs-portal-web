import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Address} from './../../model/address'
import { CatalogService } from '../../services/catalog.service';


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
  
  constructor(private catalogService: CatalogService) { 
    this.address = new Address();
    this.address.Country = "UY";
    this.address.City = "MVD";
    this.configuration = { Cities:[]};
    this.selectedCity = { Neighbourhoods: [{Code:"POCITOS", Name:"Pocitos"}]};
    this.cityCode = "MVD";
    this.catalogService.loadConfiguration(this.address.Country).then(c => this.configuration = c);
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.select2').on(
        'change',
        (e) => this.refreshNeighbourhoods($(e.target).val())
    );
  };

  refreshNeighbourhoods(cityCode){
    for(let c of this.configuration.Cities){
      if(cityCode.indexOf(c.Code) !== -1){
        this.selectedCity = c;
        this.selectedCity.Neighbourhoods = c.Neigbourhoods;
        let n = 0;
        for (let cc of c.Neigbourhoods){
          cc.id = n;
          cc.text = cc.Name;
          n = n +1;
        }
        $('.neighbourhood-selector').empty();
        $(".neighbourhood-selector").select2({
          data: c.Neigbourhoods,
          width: '100%' 
        })
      }
    }
  }
}
