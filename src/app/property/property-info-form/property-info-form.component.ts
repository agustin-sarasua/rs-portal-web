import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
declare var $ :any;

@Component({
  selector: 'app-property-info-form',
  templateUrl: './property-info-form.component.html',
  styleUrls: ['./property-info-form.component.css']
})
export class PropertyInfoFormComponent implements OnInit {

  @Input() property: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
