import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-payment-service',
  templateUrl: './payment-service.component.html',
  styleUrls: ['./payment-service.component.css'],
})
export class PaymentServiceComponent implements OnInit {
  // paymentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.handlePaymentTypeChange();
  }
  paymentType: string = 'creditCard';

  paymentForm: FormGroup = this.formBuilder.group({
    cNumber: ['', Validators.required],
    password: ['', Validators.required],
  });

  get getPaymentType() {
    return this.paymentForm.get('paymentType') as FormControl;
  }

  handlePaymentTypeChange(e: any) {
    const value = e.target.value;
    this.paymentType = value;
    // this.getPaymentType.valueChanges.subscribe((res) => {

    if (value === 'netbanking') {
      this.paymentForm.removeControl('password');
    } else {
      this.paymentForm.addControl(
        'password',
        this.formBuilder.control('', [Validators.required])
      );
    }
    // });
  }

  onFormSubmit() {
    if (this.paymentForm.valid) {
      console.log('Form Data Valid');
      // this.personService.savePerson(this.paymentForm.value);
    }
  }
}
