import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InternServiceService } from 'src/app/services/intern-service.service';
import { PositionsService } from 'src/app/services/positions.service';

@Component({
  selector: 'app-form-intern',
  templateUrl: './form-intern.component.html',
  styleUrls: ['./form-intern.component.scss'],
})
export class FormInternComponent implements OnInit {
  name: string;
  dateofBirth: Date;
  age: string;
  position: string = '';
  hireDate: Date = null;
  positions: string[];
  form: FormGroup;
  id: string;

  constructor(
    private _route: ActivatedRoute,
    private _positions: PositionsService,
    private _internService: InternServiceService
  ) {}

  ngOnInit(): void {
    this.positions = this._positions.getPositions();
    this.initialiseValidators();
  }

  initialiseValidators() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9]+[0-9]*'),
      ]),
      date: new FormControl('', [Validators.minLength(5)]),
      dateOfBirth: new FormControl('', [
        Validators.minLength(5),
        Validators.required,
      ]),
    });
  }

  addIntern() {
    let numberAge: number = +this.age;
    if (this.hireDate == null) {
      this.hireDate = new Date();
    }
    const newIntern = {
      name: this.name,
      position: this.position,
      age: numberAge,
      hireDate: this.hireDate,
      dateOfBirth: this.dateofBirth,
      id: this.id,
    };
    this._internService.addIntern(newIntern).subscribe();
  }
}
