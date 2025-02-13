import { CommonModule } from '@angular/common';
import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() todo!:ToDo;
  @Output() todoDelete:EventEmitter<ToDo>=new EventEmitter();
  constructor(){

  }
  ngOnInit(): void {
      
  }
  onClick(todo:ToDo){
    this.todoDelete.emit(todo);
    console.log('OnClick Triggerred');
  }
}
