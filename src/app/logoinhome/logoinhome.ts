import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logoinhome',
  imports: [CommonModule],
  templateUrl: './logoinhome.html',
  styleUrl: './logoinhome.css',
})
export class Logoinhome {
    icons = [
    {
      id: 1,
      name: '40 Years of Experience',
      image: '/img/icon1.png',

      },

      {
      id: 2,
      name: '+1000 Employees',
      image: '/img/icon2.png',

      },

       {
      id: 3,
      name: '+3.5 Billion Value Project Completions',
      image: '/img/icon3.png',

      },
        {
      id: 4,
      name: '+100km Highway',
      image: '/img/icon4.png',

      },
         {
      id: 5,
      name: '+180km Railway',
      image: '/img/icon5.png',

    }
  ]
}
