import { Component, OnInit } from '@angular/core';
import {Address} from './../../model/address'


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  address: Address;

  constructor() { 
    this.address = new Address();
  }

  ngOnInit() {
  }

}
