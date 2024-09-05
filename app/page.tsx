"use client";
import React, { useState } from 'react';
import Input from '../components/Input.'
import List from '../components/List';
import './globals.css';

interface ListItem {
  name: string;
}

const HomePage: React.FC = () => {
  const [todoList, setTodoList] = useState<ListItem[]>([]);
  const [doneList, setDoneList] = useState<ListItem[]>([]);
  const [currentInputValue, setCurrentInputValue] = useState<string>('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInputValue(e.target.value);
  };

  const addToTodoList = () => {
    setTodoList([...todoList, { name: currentInputValue }]);
    setCurrentInputValue('');
  };

  const moveToDone = (index: number) => {
    const newTodoList = [...todoList];
    const newDoneList = [...doneList];
    const item = newTodoList[index];
    newDoneList.push(item);
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    setDoneList(newDoneList);
  };

  const moveToTodo = (index: number) => {
    const newDoneList = [...doneList];
    const newTodoList = [...todoList];
    const item = newDoneList[index];
    newTodoList.push(item);
    newDoneList.splice(index, 1);
    setDoneList(newDoneList);
    setTodoList(newTodoList);
  };

  const removeFromTodo = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const removeFromDone = (index: number) => {
    const newDoneList = [...doneList];
    newDoneList.splice(index, 1);
    setDoneList(newDoneList);
  };

  return (
    <div className="App">
      <div className="list-wrapper">
        <div className="list">
          <p>Todo List</p>
          <List
            list={todoList}
            buttonClick={moveToDone}
            removeClick={removeFromTodo}
            listType="todo"
          />
        </div>

        <div className="list">
          <p>Done List</p>
          <List
            list={doneList}
            buttonClick={moveToTodo}
            removeClick={removeFromDone}
            listType="done"
          />
        </div>
      </div>

      <div>
        <p className="title">
          Hi, let's have fun and test the functionality of this to-do list application.
          <br />
          Caution: there is no database for storing data. Once you refresh the page, the data will be removed.
        </p>
      </div>

      <Input value={currentInputValue} changed={inputChangeHandler} addToTodoList={addToTodoList} />
    </div>
  );
};

export default HomePage;
