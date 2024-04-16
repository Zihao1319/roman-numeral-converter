import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-numeral-to-roman',
  templateUrl: './numeral-to-roman.component.html',
  styleUrls: ['./numeral-to-roman.component.scss']
})
export class NumeralToRomanComponent {

  numeralForm !: FormGroup
  romanValue!: string

  constructor(){}

  ngOnInit(): void {
    this.numeralForm = new FormGroup({
      numeralValue: new FormControl("", {
        validators: [Validators.required, Validators.pattern(/^[0-9]+$/)],
      }),
    });
  }

  onValueChange(event: any){
    this.convertNumeralToRoman(event.target.value)
  }

  convertNumeralToRoman(value: any){

    const numeralValues: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumerals: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    const convertRecursive = (n: number): string => {
      if (n===0) return ""; //base case

      for (let i = 0; i < numeralValues.length; i++){
        if (n >= numeralValues[i]) {
          return romanNumerals[i] + convertRecursive(n - numeralValues[i]) //loop through the array until it finds a value that is higher or equal to itself, then find the corresponding roman numerals, then recurisvely minus the remainign numbers..
        }
      }
      return "" //should not happen as validators in front will make sure numbers are allowed
    }
    this.romanValue = convertRecursive(value)
  }

}
