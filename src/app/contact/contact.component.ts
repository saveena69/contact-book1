import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  phone: string = '';
  searchTerm: string = '';
  contacts: { name: string; phone: string }[] = [];

  onSubmit() {
    if (this.name.trim() && this.phone.trim()) {
      this.contacts.push({ name: this.name, phone: this.phone });
      this.name = '';
      this.phone = '';
    }
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  get filteredContacts() {
    return this.contacts.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
