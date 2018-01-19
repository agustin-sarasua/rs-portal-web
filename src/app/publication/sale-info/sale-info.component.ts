import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { AllValidationErrors, getFormValidationErrors, getErrors } from './../../util/validation-util'

@Component({
  selector: 'app-sale-info',
  templateUrl: './sale-info.component.html',
  styleUrls: ['./sale-info.component.css']
})
export class SaleInfoComponent implements OnInit {

  @Input() saleInfo: FormGroup;

  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  currencyValue = "UY";

  constructor() { 
    this.currencyValue = "UY";
  }

  ngOnInit() {
    this.saleInfo.controls['currency'].setValue("UY");
  }

  setCurrency(val){
    this.currencyValue = val;
    this.saleInfo.controls['currency'].setValue(val);
  }

  submit(tab) {
    let errorStrings: Array<string> = [];
    if (this.saleInfo.invalid) {
      const errors: AllValidationErrors[] = getFormValidationErrors(this.saleInfo.controls);
      errorStrings = getErrors(errors)
      alert(errorStrings);
      return;
    }
    this.formSubmit.emit(tab);
  }

}
