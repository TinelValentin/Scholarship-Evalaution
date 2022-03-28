import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  positions: string[] = [
    'Backend junior',
    'Backend ',
    'Frontend junior',
    'Frontend ',
    'Full-Stack',
  ];
  constructor() { }
  getPositions()
  {
return this.positions;
  }
}
