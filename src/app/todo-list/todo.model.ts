export class Todo {
  /**
   * 事項名稱
   *
   * @private
   * @memberof Todo
   */
  private title = '';

  /**
   * 完成與否
   *
   * @private
   * @memberof Todo
   */
  private completed = false;
  /**
   * Creates an instance of Todo.
   *
   * @param {string} title - 待辦事項的名稱
   * @memberof Todo
   */
  constructor(title: string) {
    this.title = title || ''; // 為避免傳入的值為 Falsy 值，稍作處理
  }
}
