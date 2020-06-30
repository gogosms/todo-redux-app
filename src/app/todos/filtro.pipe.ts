import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({ name: 'filtroTodo' })
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'Completados':
        return todos.filter(todo => todo.completado);
      case 'Pendientes':
        return todos.filter(todo => !todo.completado);

      default:
        return todos;
    }
  }

}
