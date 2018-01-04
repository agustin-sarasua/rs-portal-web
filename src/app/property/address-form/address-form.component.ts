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

  constructor(private catalogService: CatalogService) { 
    this.address = new Address();
    this.configuration = { Neighbourhoods:[]}
    this.catalogService.loadConfiguration().then(c => this.configuration = c);
  }

  ngOnInit() {
  }

}
