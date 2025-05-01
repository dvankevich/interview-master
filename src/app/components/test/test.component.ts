import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  title = 'Це інтерполяція';
  firstName = 'FirstName';
  lastName = 'LastBame';

  users = ['Alpha', 'Beta', 'Gamma', 'Zeta'];

  isEnabled: boolean = true;
  // isEnabled: boolean = false;

  // isActive: boolean = true;
  // isDisabled: boolean = false;
  isActive: boolean = false;
  isDisabled: boolean = true;

  imageUrl = 'https://picsum.photos/200';

  isClickedState: boolean = false;

  inputText: string = 'default text';

  //----------------------------
  @Input() childMessage: string = '';
  @Output() messageFromChild = new EventEmitter<string>();

  //----------------------------

  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = !this.isClickedState;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('I am your son!');
  }
}
