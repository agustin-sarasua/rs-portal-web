import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Address } from './../model/address'
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PropertyService } from '../services/property.service';
import { Property } from '../model/property';
import { LatLng } from '../model/address';
import { Publication, ContactInformation } from '../model/publication';

declare var $ :any;

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit, AfterViewInit {

  myForm: FormGroup;
  selectedGuarantees: Array<string>;
  selectedAmenities: Array<string>;

  constructor(private fb: FormBuilder, public router: Router, public location: Location, public propertyService: PropertyService) { 
    this.selectedGuarantees = [];
    this.selectedAmenities = [];
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [''],
      address: this.fb.group({
        street: ['', <any>Validators.required],
        number: ['', <any>Validators.required],
        apartmentNumber: [''],
        neighbourhood: [''],
        city: ['', <any>Validators.required],
        country: ['', <any>Validators.required],
        postalCode: [''],
        location: this.fb.group({
          latitude: ['', <any>Validators.required],
          longitude: ['', <any>Validators.required]
        })
      }),
      property: this.fb.group({
        description: [''],
        title: ['', <any>Validators.required],
        type: ['', <any>Validators.required],
        orientation: [''],
        squareFeet: ['', [<any>Validators.required,Validators.min(0), Validators.max(10000)]],
        lotSize: ['', [<any>Validators.required,Validators.min(0), Validators.max(10000)]],
        terraceSize: ['', [<any>Validators.required,Validators.min(0), Validators.max(10000)]],
        bedrooms: ['', [<any>Validators.required,Validators.min(0), Validators.max(5)]],
        state: ['', [<any>Validators.required,Validators.min(0), Validators.max(10)]],
        disposition: [''],
        bathrooms: ['', [<any>Validators.required,Validators.min(0), Validators.max(5)]],
        floors: ['', [<any>Validators.required,Validators.min(0), Validators.max(5)]],
        garages: ['', [<any>Validators.required,Validators.min(0), Validators.max(4)]],
        constructionYear: ['', [Validators.min(1800), Validators.max(2045)]]
      }),
      saleInfo: this.fb.group({
        price: ['', [<any>Validators.required,Validators.min(0), Validators.max(10000000)]],
        expenses: ['', [<any>Validators.required,Validators.min(0), Validators.max(100000000)]],
        currency: ['', <any>Validators.required],
        operation: ['', <any>Validators.required]
      }),
      contactInfo: this.fb.group({
        name: ['', <any>Validators.required],
        phone: ['', <any>Validators.required],
        email: ['', <any>Validators.required]
      })
    })
  }

  formSubmitAll(e){
    console.log("Submitting Publication!");
    var currentTab = $(e.currentTarget).attr('href');

    var pub: Publication = new Publication();
    pub.Title = this.myForm.controls.property.get("title").value;
    pub.Operation = this.myForm.controls.saleInfo.get("operation").value;
    pub.Price = this.myForm.controls.saleInfo.get("price").value;
    pub.Guarantees = this.selectedGuarantees.join(); 
    
    var prop: Property = new Property();
    prop.Type = this.myForm.controls.property.get("type").value;
    prop.Description = this.myForm.controls.property.get("description").value;
    prop.Bathrooms = this.myForm.controls.property.get("bathrooms").value;
    prop.Bedrooms = this.myForm.controls.property.get("bedrooms").value;
    prop.ConstructionSize = this.myForm.controls.property.get("lotSize").value;
    prop.ConstructionYear = this.myForm.controls.property.get("constructionYear").value;
    prop.Floors = this.myForm.controls.property.get("floors").value;
    prop.Garages = this.myForm.controls.property.get("garages").value;
    prop.Orientation = this.myForm.controls.property.get("orientation").value;
    prop.Disposition = this.myForm.controls.property.get("disposition").value;
    prop.Size = this.myForm.controls.property.get("squareFeet").value;
    prop.TerraceSize = this.myForm.controls.property.get("terraceSize").value;
    prop.Expenses = this.myForm.controls.saleInfo.get("expenses").value;
    prop.Amenities = this.selectedAmenities.join(); 
    pub.Property = prop;

    var address: Address = new Address();
    address.City = this.myForm.controls.address.get("city").value;
    address.Neighbourhood = this.myForm.controls.address.get("neighbourhood").value;
    address.Street = this.myForm.controls.address.get("street").value;
    address.Number = this.myForm.controls.address.get("number").value;
    address.ApartmentNumber = this.myForm.controls.address.get("apartmentNumber").value;
    address.Country = this.myForm.controls.address.get("country").value;
    address.PostalCode = this.myForm.controls.address.get("postalCode").value;
    address.Location = new LatLng();
    address.Location.Lat = this.myForm.controls.address.get("location").get("latitude").value;
    address.Location.Lng = this.myForm.controls.address.get("location").get("longitude").value;
    prop.Address = address;
    
    var cInfo: ContactInformation = new ContactInformation();
    cInfo.Email = this.myForm.controls.contactInfo.get("email").value;
    cInfo.Name = this.myForm.controls.contactInfo.get("name").value;
    cInfo.PhoneNumber = this.myForm.controls.contactInfo.get("phone").value;
    pub.ContactInformation = cInfo;

    this.propertyService.createProperty(prop)

    //$('[href="#submit-property-3"]').tab('show');
    //$('.submit-property__steps > li').removeClass('active');
    //$('.submit-property__steps > li > a[href="'+currentTab+'"]').parent().addClass('active');
    // this.router.navigate(['']);
  }

  submitAddress(tab){
    console.log(tab)
    $('[href="'+tab+'"]').tab('show');
    this.switchTabActive(tab)
  }

  submitContactInfo(tab){
    console.log(tab)
    $('[href="'+tab+'"]').tab('show');
    this.switchTabActive(tab)
  }

  submitSaleInfo(tab){
    console.log(tab)
    $('[href="'+tab+'"]').tab('show');
    this.switchTabActive(tab)
  }

  submitPropertyInfo(tab){
    console.log(tab)
    $('[href="'+tab+'"]').tab('show');
    this.switchTabActive(tab)
  }

  switchTabActive(currentTab){
    $('.submit-property__steps > li').removeClass('active');
    $('.submit-property__steps > li > a[href="'+currentTab+'"]').parent().addClass('active');
  }


  ngAfterViewInit(){
    // $('.submit-property__button').on('shown.bs.tab', function (e) {
    //   var currentTab = $(e.target).attr('href');
  
    //   $('.submit-property__steps > li').removeClass('active');
    //   $('.submit-property__steps > li > a[href="'+currentTab+'"]').parent().addClass('active');
    // });
  };


  

}
