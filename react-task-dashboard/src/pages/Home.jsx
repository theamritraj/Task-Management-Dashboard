import React, { useState } from 'react';
import Column from '../Components/Column/Column';
import './Home.css';
import { initialData } from '../data/initialData';

function Home() {
  const [columns, setColumns] = useState(initialData);

  const moveTask = (sourceCol, targetCol, task) => {
    if (sourceCol === targetCol) return;

    const updatedColumns = { ...columns };
    updatedColumns[sourceCol].tasks = updatedColumns[sourceCol].tasks.filter(t => t.id !== task.id);
    updatedColumns[targetCol].tasks.push(task);
    setColumns(updatedColumns);
  };

  return (
    <div className="home">
      {Object.entries(columns).map(([colId, column]) => (
        <Column
          key={colId}
          colId={colId}
          column={column}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
}

export default Home;
