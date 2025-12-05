import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Business } from '../business/business';
import { Profile } from '../profile/profile';
import { Logoinhome } from '../logoinhome/logoinhome';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, Profile, Business,Logoinhome],
  templateUrl: './home.html',
  styleUrls: ['./home.css']  // ✅ fixed
})
export class Home {}
