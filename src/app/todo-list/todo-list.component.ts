import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  /**
   * 新增代辦事項
   *
   * @param {HTMLInputElement} inputRef - 輸入框的元素實體
   * @memberof TodoListComponent
   */
  constructor(private todoListService: TodoListService) {}

  ngOnInit() {}

  /**
   * 新增代辦事項
   *
   * @param {HTMLInputElement} inputRef - 輸入框的元素實體
   * @memberof TodoListComponent
   */
  addTodo(event: KeyboardEvent): void {
    const todoThing = event.target as HTMLInputElement;
    if (!todoThing) {
      return;
    }
    if (event.key === 'Enter') {
      const todo = todoThing.value.trim();
      this.todoListService.add(todo);
      todoThing.value = '';
    }
  }
  /**
   * 取得待辦事項清單
   *
   * @returns {string[]}
   * @memberof TodoListComponent
   */
  getList(): string[] {
    return this.todoListService.getList();
  }
}
