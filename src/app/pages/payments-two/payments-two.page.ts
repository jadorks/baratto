import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PickerController } from '@ionic/angular';
import {
  creditCardValidator,
  creditCardType,
} from 'src/app/validators/credit-card.validator';

@Component({
  selector: 'app-payments-two',
  templateUrl: './payments-two.page.html',
  styleUrls: ['./payments-two.page.scss'],
})
export class PaymentsTwoPage implements OnInit, OnDestroy {
  cardForm: FormGroup;
  cardNumber = '0000';
  typeCard = 'basic';
  expires = '00/00';
  indexMonth = 0;
  indexYear = 0;
  unsubscribe$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private pickerController: PickerController
  ) {}

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      cardholder: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ,.]+$')],
      ],
      number: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(13),
          Validators.maxLength(19),
          creditCardValidator
        ],
      ],
      expMonth: [null, [Validators.required]],
      expYear: [null, [Validators.required]],
      cvc: [
        null,
        [Validators.required, Validators.min(100), Validators.max(999)],
      ],
      default: [false],
    });
    this.changeCardNumber();
  }

  async openPicker(info: string) {
    const data =
      info === 'month'
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
            if (info == 'month') {
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

  changeCardNumber() {
    this.cardForm
      .get('number')
      .valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: string) => {
        if (this.cardForm.controls.number.value) {
          const cardNumberValue = this.cardForm.controls.number.value.toString();
          if (this.cardForm.controls.number.status === 'VALID') {
            const objAux = creditCardType(cardNumberValue);
            this.typeCard = objAux.cardType.toLowerCase();
          } else {
            this.typeCard = 'basic';
          }
          this.cardNumber =
            cardNumberValue.length > 12
              ? cardNumberValue.substr(cardNumberValue.length - 4)
              : '0000';
        }
      });

    this.cardForm
      .get('expMonth')
      .valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: string) => {
        this.addMonthAndYear(res, true);
      });

    this.cardForm
      .get('expYear')
      .valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: string) => {
        this.addMonthAndYear(res, false);
      });
  }

  addMonthAndYear(value: string, month: boolean) {
    this.expires = month
      ? value + '/' + this.expires.split('/')[1]
      : this.expires.split('/')[0] + '/' + value;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
