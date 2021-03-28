import { AbstractControl } from '@angular/forms';

export function creditCardValidator(control: AbstractControl) {
    if (control && control.value !== null && control.value !== undefined) {
        if (control.value !== '') {
            const value = creditCardType(control.value.toString());
            console.log('value: ', value );
            if (!value.isValid) {
                return { invalidCreditCard: true, message: value.message };
            }
        }
    }

    return null;
}

export function creditCardType(cardNumber: string) {
    const result = {
        cardNumber: '',
        cardType: 'Unknown',
        isValid: false,
        message: '',
    };

    // if input is not a string return false
    if (typeof cardNumber !== 'string') {
        result.isValid = false;
        result.message = 'input is not of type string';
        return result;
    } else {
        // remove spacing
        cardNumber = cardNumber.replace(/\s/g, '');
        // overcome loophole
        // tslint:disable-next-line: radix
        const intCardNumber = parseInt(cardNumber);
        if (intCardNumber === 0) {
            result.isValid = false;
            result.message =
                'An input of all zeroes is not a valid credit card number';
            return result;
        }
    }

    result.cardNumber = cardNumber.toString().replace(/(\d{4}(?!\s))/g, '$1 ');
    let sum = 0;
    let toggle = false;

    const length = cardNumber.length;

    // tslint:disable-next-line: radix
    const firstDigit = parseInt(cardNumber.toString().charAt(0));
    // tslint:disable-next-line: radix
    const twoDigits = parseInt(cardNumber.toString().substring(0, 2));
    // tslint:disable-next-line: radix
    const threeDigits = parseInt(cardNumber.toString().substring(0, 3));
    // tslint:disable-next-line: radix
    const fourDigits = parseInt(cardNumber.toString().substring(0, 4));
    // tslint:disable-next-line: radix
    const sixDigits = parseInt(cardNumber.toString().substring(0, 6));
/*     console.log(twoDigits);
    console.log(length); */
    if ((twoDigits === 34 || twoDigits === 37) && length === 15) {
        result.cardType = 'Amex';
    } else if (firstDigit === 4 && length >= 16 && length <= 19) {
        result.cardType = 'Visa';
    } else if ((twoDigits >= 51 && twoDigits <= 55) || (twoDigits >= 22 && twoDigits <= 27)) {
        if (length === 16) {
            result.cardType = 'MasterCard';
        }
    } else if (
        sixDigits === 622126 ||
        sixDigits === 622925 ||
        fourDigits === 6011 ||
        threeDigits === 644 ||
        threeDigits === 645 ||
        threeDigits === 646 ||
        threeDigits === 647 ||
        threeDigits === 648 ||
        threeDigits === 649 ||
        twoDigits === 65
    ) {
        if (length >= 16 && length <= 19) {
            result.cardType = 'Discover';
        }
    } else if (fourDigits >= 3528 && fourDigits <= 3589) {
        if (length >= 16 && length <= 19) {
            result.cardType = 'JCB';
        }
    } else if (
        fourDigits === 5018 ||
        fourDigits === 5020 ||
        fourDigits === 5038 ||
        fourDigits === 5893 ||
        fourDigits === 6304 ||
        fourDigits === 6759 ||
        fourDigits === 6761 ||
        fourDigits === 6762 ||
        fourDigits === 6763
    ) {
        if (length >= 16 && length <= 19) {
            result.cardType = 'Maestro';
        }
    } else if (
        (sixDigits >= 300000 && sixDigits <= 305999) ||
        (sixDigits >= 309500 && sixDigits <= 309599) ||
        (sixDigits >= 360000 && sixDigits <= 369999) ||
        (sixDigits >= 380000 && sixDigits <= 399999)
    ) {
        result.cardType = 'Diners';
    }

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        const currentNumber = parseInt(cardNumber.charAt(i), 10);
        if (toggle === true) {
            if (currentNumber * 2 > 9) {
                const digitOne = (currentNumber * 2) % 10;
                const digitTwo = Math.floor((currentNumber * 2) / 10);
                sum += digitOne + digitTwo;
            } else {
                sum += currentNumber * 2;
            }
        } else {
            sum += currentNumber;
        }
        toggle = !toggle;
    }

    if (length < 13 || length > 19) {
        result.isValid = false;
        result.message = 'credit card number entered is not valid';
        return result;
    } else {
        result.isValid = sum % 10 === 0;
        result.message = 'credit card number entered is valid';
        return result;
    }
}
