import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 1,
    taskTitle: '',
    tasks: [],
  });

  const { newId, taskTitle, tasks } = state;

  function handleClickAddTask() {
    setState({
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  function handleChangeTitle(e) {
    setState({
      ...state,
      taskTitle: e.target.value,
    });
  }

  function handleClickDelete(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  return (
    <Page
      taskTitle={taskTitle}
      tasks={tasks}
      onClickAddTask={handleClickAddTask}
      onChangeTitle={handleChangeTitle}
      onClickDeleteTask={handleClickDelete}
    />
  );
}
