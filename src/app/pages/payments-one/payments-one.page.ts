import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { PickerController } from '@ionic/angular';
import { Subject, Observable, Observer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { creditCardType } from 'src/app/validators/credit-card.validator';

@Component({
  selector: 'app-payments-one',
  templateUrl: './payments-one.page.html',
  styleUrls: ['./payments-one.page.scss'],
})
export class PaymentsOnePage implements OnInit, OnDestroy {
  cardForm: FormGroup;

  typeCard = 'basic';

  indexMonth = 0;
  indexYear = 0;

  unsubscribe$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private pickerController: PickerController
  ) {}

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      cardholder: ['', [Validators.required,  Validators.pattern('^[a-zA-Z ,.]+$')]],
      number: [null, [Validators.required,  Validators.pattern('^[0-9]+$'), Validators.minLength(13), Validators.maxLength(19)]],
      expMonth: [null, [Validators.required]],
      expYear: [null, [Validators.required]],
      cvc: [null, [Validators.required]],
      default: [false],
    });

    this.formChange();
  }

  async openPicker(info: string) {
    const data = info === 'month'
        ? {
            name: 'month',
            selectedIndex: this.indexMonth,
            options: [
              { text: 'Jan', value: '01' },
              { text: 'Feb', value: '02' },
              { text: 'Mar', value: '03' },
              { text: 'Apr', value: '04' },
              { text: 'May', value: '05' },
              { text: 'Jun', value: '06' },
              { text: 'Jul', value: '07' },
              { text: 'Aug', value: '08' },
              { text: 'Sep', value: '09' },
              { text: 'Oct', value: '10' },
              { text: 'Nov', value: '11' },
              { text: 'Dec', value: '12' },
            ],
          }
        : {
            name: 'year',
            selectedIndex: this.indexYear,
            options: [
              { text: '2018', value: 2018 },
              { text: '2019', value: 2019 },
              { text: '2020', value: 2020 },
              { text: '2021', value: 2021 },
              { text: '2022', value: 2022 },
              { text: '2023', value: 2023 },
              { text: '2024', value: 2024 },
              { text: '2025', value: 2025 },
              { text: '2026', value: 2026 },
              { text: '2027', value: 2027 },
            ],
          };
    const picker = await this.pickerController.create({
      columns: [data],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            if (info === 'month') {
              this.cardForm.get('expMonth').setValue(value.month.value);
              this.indexMonth = data.selectedIndex;
            } else {
              this.cardForm.get('expYear').setValue(value.year.value);
              this.indexYear = data.selectedIndex;
            }
          },
        },
      ],
    });

    await picker.present();
  }

  formChange() {
    this.cardForm
      .get('number')
      .valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: string) => {
        if (this.cardForm.controls.number.value) {
          const cardNumberValue = this.cardForm.controls.number.value.toString();
          const objAux = creditCardType(cardNumberValue);
          this.typeCard = objAux.isValid
            ? objAux.cardType.toLowerCase()
            : 'basic';
        } else {
          this.typeCard = 'basic';
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
