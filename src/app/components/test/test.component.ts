import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  newTask: string = '';
  tasks: string[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(){
    this.tasks = this.todoService.getTasks();
  }
  
  addTask(){
    if (this.newTask.trim() !== '') {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = ''; // reset input field
      this.updateTasks();
    }
  }

  removeTask(index: number){
    this.todoService.removeTask(index);
    this.updateTasks();
  }


  private updateTasks(){
    this.tasks = this.todoService.getTasks();
  }
}
