import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  title = 'Це інтерполяція';
  firstName = 'FirstName';
  lastName = 'LastBame';

  isEnabled: boolean = true;
  // isEnabled: boolean = false;

  // isActive: boolean = true;
  // isDisabled: boolean = false;
  isActive: boolean = false;
  isDisabled: boolean = true;

  imageUrl = 'https://picsum.photos/200';

  isClickedState: boolean = false;

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = !this.isClickedState;
  }
}
