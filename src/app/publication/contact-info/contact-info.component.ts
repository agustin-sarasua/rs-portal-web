import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { AllValidationErrors, getFormValidationErrors, getErrors } from './../../util/validation-util'

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input() contactInfo: FormGroup;
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit(tab) {
    let errorStrings: Array<string> = [];
    if (this.contactInfo.invalid) {
      const errors: AllValidationErrors[] = getFormValidationErrors(this.contactInfo.controls);
      errorStrings = getErrors(errors)
      alert(errorStrings);
      return;
    }
    this.formSubmit.emit(tab);
  }
}
