import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponentComponent } from "./MyComponents/to-do-component/to-do-component.component";
import { ToDoAddComponent } from "./MyComponents/to-do-add/to-do-add.component";

@Component({
  selector: 'app-root',
  imports: [ToDoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoList';
}
