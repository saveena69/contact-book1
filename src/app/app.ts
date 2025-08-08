import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component'; // yaha sahi path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('contact-app');
}
