import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Contactinhome } from './contactinhome/contactinhome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, NgbAlertModule, RouterOutlet,Contactinhome],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // <-- fixed
})
export class App {
  protected readonly title = signal('franky');
}
