import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imageUrls: string[] = [
    '../assets/man (2).png',
    '../assets/man.png',
    '../assets/man (1).png',
    '../assets/profile.png',
    '../assets/woman.png',
  ];
  constructor() { }

  getImages()
  {
    return this.imageUrls;
  }
}
