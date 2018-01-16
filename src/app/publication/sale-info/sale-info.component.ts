import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sale-info',
  templateUrl: './sale-info.component.html',
  styleUrls: ['./sale-info.component.css']
})
export class SaleInfoComponent implements OnInit {

  @Input() saleInfo: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
