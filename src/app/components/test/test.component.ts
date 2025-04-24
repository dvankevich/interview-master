import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  title = 'Це інтерполяція';
  firstName = 'FirstName';
  lastName = 'LastBame';

  isEnabled: boolean = true;
  // isEnabled: boolean = false;
  imageUrl = 'https://picsum.photos/200';

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}
