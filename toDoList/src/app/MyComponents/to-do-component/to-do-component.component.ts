import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../ToDo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { ToDoAddComponent } from "../to-do-add/to-do-add.component";

@Component({
  selector: 'app-to-do-component',
  imports: [CommonModule, TodoItemComponent, ToDoAddComponent],
  templateUrl: './to-do-component.component.html',
  styleUrl: './to-do-component.component.css'
})
export class ToDoComponentComponent implements OnInit {

  public todos:ToDo[]; 
  constructor(){
    this.todos=[
      {
        sno:1,
        title:"ToDos",
        desc:"To do list app1",
        active:true
      },
      {
        sno:2,
        title:"ToDos",
        desc:"To do list app2",
        active:true
      },
      {
        sno:3,
        title:"ToDos",
        desc:"To do list app3",
        active:true
      }
    ]
  }
  ngOnInit(): void {
      
  }

  deleteTodo(todo:ToDo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

}
