import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { TestFormComponent } from './components/test-form/test-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent, TestFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'interview-master';

  messageFromParent = 'I am your father!!!';

  messageFromChild = '';


}
