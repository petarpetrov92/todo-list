import React from 'react';

type Props = {
  text: string,
  onClickDelete: void,
};

export default ({ text, onClickDelete }: Props) => (
  <div className="todo-item">
    {text}
    <span onClick={onClickDelete}>
      &times;
    </span>
  </div>
);
