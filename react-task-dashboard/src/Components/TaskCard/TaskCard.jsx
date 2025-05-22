import React from 'react';
import { useDrag } from 'react-dnd';
import './TaskCard.css';

function TaskCard({ task, colId }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { task, colId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className="task-card"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="task-tags">
        {task.tags.map((tag, index) => (
          <span className="tag" key={index}>{tag}</span>
        ))}
      </div>
      <div className="task-title">{task.title}</div>
      <div className="task-desc">{task.description}</div>
      <div className="task-footer">
        <span>{task.time}</span>
      </div>
    </div>
  );
}

export default TaskCard;
