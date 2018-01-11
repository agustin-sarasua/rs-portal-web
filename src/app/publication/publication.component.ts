import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import {Address} from './../model/address'

declare var $ :any;

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit, AfterViewInit {

  myForm: FormGroup;
  // address: Address;

  constructor(private fb: FormBuilder) { 
    // this.address = new Address();
  }

  ngOnInit() {
  //     name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
    this.myForm = this.fb.group({
      name: [''],
      address: this.fb.group({
        street: ['', <any>Validators.required],
        number: ['', <any>Validators.required],
        apartmentNumber: [''],
        neighbourhood: ['', <any>Validators.required],
        city: ['', <any>Validators.required],
        country: ['', <any>Validators.required],
        postalCode: [''],
        location: this.fb.group({
          latitude: ['', <any>Validators.required],
          longitude: ['', <any>Validators.required]
        })
      }),
      property: this.fb.group({
        bedrooms: ['', <any>Validators.required]
      })
    })
  }

  ngAfterViewInit(){
    $('.submit-property__button').on('shown.bs.tab', function (e) {
      var currentTab = $(e.target).attr('href');
  
      $('.submit-property__steps > li').removeClass('active');
      $('.submit-property__steps > li > a[href="'+currentTab+'"]').parent().addClass('active');
    });
  };


  

}
