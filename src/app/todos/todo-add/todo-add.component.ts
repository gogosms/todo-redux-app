import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as Actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl(null, Validators.required);
  }

  ngOnInit() {
  }

  public addTodo() {
    if (this.txtInput.invalid) {
      return;
    }
    this.store
    .dispatch(Actions.crear({ texto: this.txtInput.value }));
    this.txtInput.reset();

  }

}
