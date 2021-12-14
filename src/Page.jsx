import React from 'react';

import Input from './Input';
import List from './List';

export default function Page({
  taskTitle, onChangeTitle, onClickAddTask, tasks, onClickDeleteTask,
}) {
  return (
    <div>
      <h1>To-do</h1>
      {
        tasks.length === 0 && <p>할 일이 없어요!</p>
      }
      <Input value={taskTitle} onChange={onChangeTitle} onClick={onClickAddTask} />
      <List tasks={tasks} onClickDelete={onClickDeleteTask} />
    </div>
  );
}
