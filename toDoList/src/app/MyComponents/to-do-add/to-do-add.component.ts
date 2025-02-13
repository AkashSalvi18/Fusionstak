import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-add',
  imports: [FormsModule],
  templateUrl: './to-do-add.component.html',
  styleUrl: './to-do-add.component.css'
})
export class ToDoAddComponent implements OnInit{
  title!:string;
  desc!:string;
  
  onSubmit(){
    const todo={
      title:this.title,
      desc:this.desc,
      active:true
    }
  }
  ngOnInit(): void {
      
  }
}
