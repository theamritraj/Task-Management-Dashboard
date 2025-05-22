import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import { useDrop } from 'react-dnd';
import './Column.css';

function Column({ colId, column, moveTask }) {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => moveTask(item.colId, colId, item.task),
  });

  return (
    <div className="column" ref={drop}>
      <div className="column-title">{column.name}</div>
      <div className="task-list">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} colId={colId} />
        ))}
      </div>
      <button className="add-task-btn">+ Add Task</button>
    </div>
  );
}

export default Column;
