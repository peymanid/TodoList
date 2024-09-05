import React from 'react';

interface InputProps {
  value: string;
  changed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addToTodoList: () => void;
}

const Input: React.FC<InputProps> = ({ value, changed, addToTodoList }) => {
  return (
    <div>
      <input type="text" value={value} onChange={changed} />
      <button onClick={addToTodoList}>Add new</button>
    </div>
  );
};

export default Input;

