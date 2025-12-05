import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-business',
   imports: [CommonModule, RouterModule],
  templateUrl: './business.html',
  styleUrl: './business.css',
})
export class Business {
  cards = [
    {
      id: 1,
      title: 'CONSTRUCTION',
      description: `Franky Construction Sdn. Bhd. is an integrated construction company
                    registered with CIDB G7 with Government Procurement Working Certificate (SPKK).`,
      image: '/img/a.jpg',
      postimg: '/img/s1.jpg',
      longdescription:`FRANKY ventured into property development in the 1990’s and has built a reputation as a premier property developer in Pahang. Today, the group has expanded its presence throughout the peninsula with a proven track record in residential and commercial projects, industrial parks and integrated mixed-use developments. Apart from directly engaging in property development and investment, FRANKY also provides turnkey design-and-build services for unique purpose-built properties, such as commercial buildings, hotels and institutional buildings. FRANKY believes corporate responsibility is a virtuous cycle and is committed to environmental rehabilitation efforts through its continuous endeavour in transforming abandoned land into a green and sustainable environment.`
    },
    {
      id: 2,
      title: 'MINING',
      description: `FRANKY has a solid foothold in East Malaysia as a reputable and reliable operator in coal mining and trading.`,
      image: '/img/b.jpg',
      postimg: '/img/s2.jpg',
       longdescription:`FRANKY ventured into property development in the 1990’s and has built a reputation as a premier property developer in Pahang. Today, the group has expanded its presence throughout the peninsula with a proven track record in residential and commercial projects, industrial parks and integrated mixed-use developments. Apart from directly engaging in property development and investment, FRANKY also provides turnkey design-and-build services for unique purpose-built properties, such as commercial buildings, hotels and institutional buildings. FRANKY believes corporate responsibility is a virtuous cycle and is committed to environmental rehabilitation efforts through its continuous endeavour in transforming abandoned land into a green and sustainable environment.`
    },
    {
      id: 3,
      title: 'MATERIALS',
      description: `FRANKY has a solid foothold in East Malaysia as a reputable and reliable operator in coal mining and trading.`,
      image: '/img/c.jpg',
      postimg: '/img/s3.jpg',
       longdescription:`FRANKY ventured into property development in the 1990’s and has built a reputation as a premier property developer in Pahang. Today, the group has expanded its presence throughout the peninsula with a proven track record in residential and commercial projects, industrial parks and integrated mixed-use developments. Apart from directly engaging in property development and investment, FRANKY also provides turnkey design-and-build services for unique purpose-built properties, such as commercial buildings, hotels and institutional buildings. FRANKY believes corporate responsibility is a virtuous cycle and is committed to environmental rehabilitation efforts through its continuous endeavour in transforming abandoned land into a green and sustainable environment.`
    },
    {
      id: 4,
      title: 'PROPERTY',
      description: `FRANKY is a premier property developer in Pahang with a proven track record in residential and commercial projects, industrial parks and integrated mixed-use developments.`,
      image: '/img/d.jpg',
      postimg: '/img/s4.jpg',
       longdescription:`FRANKY ventured into property development in the 1990’s and has built a reputation as a premier property developer in Pahang. Today, the group has expanded its presence throughout the peninsula with a proven track record in residential and commercial projects, industrial parks and integrated mixed-use developments. Apart from directly engaging in property development and investment, FRANKY also provides turnkey design-and-build services for unique purpose-built properties, such as commercial buildings, hotels and institutional buildings. FRANKY believes corporate responsibility is a virtuous cycle and is committed to environmental rehabilitation efforts through its continuous endeavour in transforming abandoned land into a green and sustainable environment.`
    },
    {
      id: 5,
      title: 'HOSPITALITY',
      description: `FRANKY developed an award-winning 5-star eco-resort, the Mangala Resort & Spa, and a 3-star city hotel, Rocana Hotel Kuantan. Both properties are located at the East Coast of Peninsular Malaysia in the state of Pahang.`,
      image: '/img/e.png',
      postimg: '/img/s5.jpg',
       longdescription:`FRANKY ventured into property development in the 1990’s and has built a reputation as a premier property developer in Pahang. Today, the group has expanded its presence throughout the peninsula with a proven track record in residential and commercial projects, industrial parks and integrated mixed-use developments. Apart from directly engaging in property development and investment, FRANKY also provides turnkey design-and-build services for unique purpose-built properties, such as commercial buildings, hotels and institutional buildings. FRANKY believes corporate responsibility is a virtuous cycle and is committed to environmental rehabilitation efforts through its continuous endeavour in transforming abandoned land into a green and sustainable environment.`
    }
  ];
}
