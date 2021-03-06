import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al Mundo'),
  new Todo('vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar el escudo del capitan America')
];

const _todoReducer = createReducer(initialState,
  on(actions.crear,
    (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.limpiarTodos,
    (state) => state.filter(todo => !todo.completado)),
  on(actions.toggle,
    (state, { id }) => {
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completado: !todo.completado
          };
        } else {
          return todo;
        }
      });
    }),
  on(actions.toggleAll,
    (state, { completado }) => {
      return state.map(todo => {
        return {
          ...todo,
          completado
        };
      });
    }),
  on(actions.editar,
    (state, { id, texto }) => {
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            texto
          };
        } else {
          return todo;
        }
      });
    })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
