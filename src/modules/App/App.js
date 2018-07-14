import React from 'react';
import Todo from '../Todo';

type Props = {
  todo: string,
  todos: Array<string>,
  handleChange: void,
  handleClickAdd: void,
  handleClickDelete: void
};

export default ({ todo, todos, handleChange, handleClickAdd, handleClickDelete }: Props) => (
  <div className="todo-list">
    <h1>
      todos
    </h1>
    <p>
      <span id="counter">
        {todos.length}
      </span>
      {' remaining'}
    </p>
    <div>
      {
        todos.length
          ? todos.map((toDo, index) => <Todo key={toDo.id} onClickDelete={() => handleClickDelete(index)} text={toDo.text} />)
          : 'You\'re all done 🌴'
      }
    </div>
    <div className="todo-input">
      <input
        onChange={handleChange}
        placeholder="..."
        type="text"
        value={todo}
      />
      <button type="button" onClick={handleClickAdd}>
        Add
      </button>
    </div>
  </div>
);
