import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  positions: string[] = [
    'Backend junior',
    'Backend senior',
    'Frontend junior',
    'Frontend senior',
    'Full-Stack',
  ];
  constructor() { }
  getPositions()
  {
return this.positions;
  }
}
