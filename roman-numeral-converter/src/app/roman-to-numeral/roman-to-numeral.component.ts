import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roman-to-numeral',
  templateUrl: './roman-to-numeral.component.html',
  styleUrls: ['./roman-to-numeral.component.scss']
})
export class RomanToNumeralComponent implements OnInit {

  romanForm !: FormGroup
  numericalValue!: number

  constructor(){}

  ngOnInit(): void {
    this.romanForm = new FormGroup({
      romanValue: new FormControl("", {
        validators: [Validators.required, Validators.pattern(/^[IVXLCDM]+$/)],
      }),
    });
  }

  convertRomanToNumeral(romans: string){
    const romanNumerals: { [key: string]: number } = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    const convertRecursive = (s: string): number => {
      if (s.length === 0) return 0; //base case

      const curr = romanNumerals[s[0]]; //get the current numeral value based on 1st roman numeral
      const next = romanNumerals[s[1]] || 0; //if the 2nd one is none, return 0

      if (curr < next) {
        return next - curr + convertRecursive(s.slice(2)) //if the curr value is lesser than next value, recursively call the remaining one after subtracting
      } else {
        return curr + convertRecursive(s.slice(1)); //else add them up and recursively call the remaining string
      }
    }
    this.numericalValue = convertRecursive(romans)
  }

  onValueChange(event: any){
    this.convertRomanToNumeral(event.target.value)
  }

}
