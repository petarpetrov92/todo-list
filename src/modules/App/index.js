import { compose, pure, withStateHandlers, withHandlers } from 'recompose';
import { uniqueId } from 'lodash';
import App from './App';

export default compose(
  pure,
  withStateHandlers(
    () => ({
      todo: '',
      todos: [
        { text: 'Add your first todo', id: uniqueId() },
      ],
    }),
    {
      handleChange: () => event => ({ todo: event.target.value }),
      handleAddTodo: ({ todos }) => newTodo => ({ todos: [...todos, { text: newTodo, id: uniqueId() }], todo: '' }),
      handleDeleteTodo: ({ todos }) => index => ({ todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1),
      ] }),
    },
  ),
  withHandlers({
    handleClickAdd: ({ todo, handleAddTodo }) => () => {
      if (todo) handleAddTodo(todo);
    },
    handleClickDelete: ({ handleDeleteTodo }) => (index) => {
      handleDeleteTodo(index);
    },
  }),
)(App);
