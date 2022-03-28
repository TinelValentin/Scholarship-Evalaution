import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Intern } from 'src/app/intern';
import { InternServiceService } from 'src/app/services/intern-service.service';
import { PositionsService } from 'src/app/services/positions.service';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.scss'],
})
export class InternListComponent implements OnInit, OnChanges {
  imageUrls: string[] = [
    '../assets/man (2).png',
    '../assets/man.png',
    '../assets/man (1).png',
    '../assets/profile.png',
    '../assets/woman.png',
  ];
  name: string;
  dateofBirth: Date;
  age: string;
  position: string = '';
  hireDate: Date;
  positions: string[];
  id: string;
  show = false;
  internList: Intern[];
  dateFormat: string = 'shortDate';
  @Input() selectedFilter: string;

  constructor(
    private internService: InternServiceService,
    private _positions: PositionsService
  ) {}

  ngOnInit(): void {
    this.positions = this._positions.getPositions();
    this.getInterns();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getInterns();
    switch (this.selectedFilter) {
      case '1':
        this.getBackendInterns();
        break;
      case '2':
        this.getAscendingInterns();
        break;
      case '3':
        this.getDescendingInterns();
        break;
      case '4':
        this.dateFormat = 'shortDate';
        break;
      case '5':
        this.dateFormat = 'mediumDate';
        break;
      case '6':
        this.dateFormat = 'fullDate';
        break;
    }
  }

  getBackendInterns() {
    this.internService.getBackendInterns().subscribe((interns: Intern[]) => {
      this.internList = interns;
    });
  }
  getAscendingInterns() {
    this.internService.getAscendingInterns().subscribe((interns: Intern[]) => {
      this.internList = interns;
    });
  }
  getDescendingInterns() {
    this.internService.getDescendingInterns().subscribe((interns: Intern[]) => {
      this.internList = interns;
    });
  }
  getInterns() {
    this.internService.getInterns().subscribe((interns: Intern[]) => {
      this.internList = interns;
    });
  }
  deleteIntern(id: string) {
    this.internService.deleteIntern(id).subscribe(() => {
      this.getInterns();
    });
  }

  editIntern(id: string) {
    this.id = id;
    this.show = !this.show;
    this.internService.getOneIntern(id).subscribe((intern: Intern) => {
      this.name = intern.name;
      this.age = intern.age.toString();
      this.dateofBirth = intern.dateOfBirth;
      this.hireDate = intern.hireDate;
      this.position = intern.position;
    });
  }

  editInternForm() {
    let numberAge: number = +this.age;
    const newIntern = {
      name: this.name,
      position: this.position,
      age: numberAge,
      hireDate: this.hireDate,
      dateOfBirth: this.dateofBirth,
      id: this.id,
    };
    this.internService.editIntern(this.id, newIntern).subscribe(() => {
      this.getInterns();
      this.show = !this.show;
    });
  }
}
