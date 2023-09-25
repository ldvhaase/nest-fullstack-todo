import { ITodo } from '@lvh/shared/domain';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ServerFeatureTodoService {
    private todos$$ = new BehaviorSubject<ITodo[]>([
      {
          id: 'something-something-dark-side',
          title: 'Add a route to create todo items!',
          description: 'Yes, this is foreshadowing a POST route introduction',
          completed: false
      }
  ]);

    getAll(): ITodo[] {
        return this.todos$$.value;
    }

    getOne(id: string): ITodo | undefined {
        const todo = this.todos$$.value.find(td => td.id === id);
        if(!todo) {
          throw new NotFoundException(`Todo could not be found!`);
        }
        return todo;
    }

    create(todo: Pick<ITodo, 'title' | 'description'>): ITodo {
      const current = this.todos$$.value;
      const newTodo: ITodo = {
        ...todo,
        id: `todo-${Math.floor(Math.random() * 10000)}`,
        completed: false,
      };
      this.todos$$.next([...current, newTodo]);
      return newTodo;
    }
}
