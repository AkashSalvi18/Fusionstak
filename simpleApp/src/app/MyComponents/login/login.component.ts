import { Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { merge } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [MatCardModule,MatFormFieldModule,MatLabel,ReactiveFormsModule,MatIconModule,MatButtonModule,MatInputModule,MatIcon],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  readonly email=new FormControl('',[Validators.required,Validators.email]);
  errorMessage=signal('');
  constructor() {
    merge(this.email.statusChanges,this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(()=>this.updateErrorMessage());
   }

   updateErrorMessage(){
    if(this.email.hasError('required')){
      this.errorMessage.set('You must enter a email');
    }
    else if(this.email.hasError('email')){
      this.errorMessage.set('Not a valid email address.');
    }
    else{
      this.errorMessage.set('')
    }
   }
   hide=signal(true);
   clickEvent(event:MouseEvent){
    this.hide.set(!this.hide());
    event.stopPropagation();
  
   }

}
