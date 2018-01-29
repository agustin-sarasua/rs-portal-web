import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { AllValidationErrors, getFormValidationErrors, getErrors } from './../../util/validation-util'
import { CatalogService } from '../../services/catalog.service';
declare var $ :any;

@Component({
  selector: 'app-sale-info',
  templateUrl: './sale-info.component.html',
  styleUrls: ['./sale-info.component.css']
})
export class SaleInfoComponent implements OnInit, AfterViewInit {

  @Input() saleInfo: FormGroup;

  @Output() formSubmit: EventEmitter<string> = new EventEmitter();
  @Input() selectedGuarantees: Array<string>;

  currencyValue = "UY";
  selectedOperation = "ANUAL_RENT";

  constructor(private catalogService: CatalogService) { 
    this.currencyValue = "UY";
  }

  ngOnInit() {
    this.saleInfo.controls['operation'].setValue("ANUAL_RENT");
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

  change(event){
    if (event.target.checked) {
      //Add
      this.selectedGuarantees.push(event.target.value);
    } else{
      //Remove
      var index = this.selectedGuarantees.indexOf(event.target.value, 0);
      if (index > -1) {
        this.selectedGuarantees.splice(index, 1);
      }
    }
  }

  isSelected(guarantee){
    return this.selectedGuarantees.indexOf(guarantee, 0) != -1;
  }

  ngAfterViewInit(){
    $('#selectOperation').on(
      'change',
      (e) => this.setOperation($(e.target).val())
    );
  };

  setOperation(operationCode){
    if(operationCode == 'ANUAL_RENT'){
      $("#guarantee-container").show();
    }else if(this.selectedOperation == 'ANUAL_RENT'){
      $("#guarantee-container").hide();
    }

    this.selectedOperation = operationCode;
    this.saleInfo.controls['operation'].setValue(operationCode);
  }

}
