import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactinhome',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactinhome.html',
  styleUrls: ['./contactinhome.css'],
})
export class Contactinhome {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      subject: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
