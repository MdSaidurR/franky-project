import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg'
  ];
}
