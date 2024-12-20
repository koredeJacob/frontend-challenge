import { atom,AtomEffect } from 'recoil';
import { Todo } from 'src/app/types';

const localStorageEffect = <T>(key:string):AtomEffect<T> => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const todoListState = atom<Todo[]>({
  key: 'TodoList',
  default: [],
  effects: [
    localStorageEffect<Todo[]>('todolist'),
  ]
});

export const todoListFilterState=atom<string>({
  key: 'TodoListFilter',
  default:'show all'
})
