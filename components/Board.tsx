import React, { useState, useEffect } from 'react';
import { BoardData, Task } from '../types';
import Column from './Column';

interface BoardProps {
  data: BoardData;
  setData: React.Dispatch<React.SetStateAction<BoardData>>;
  searchTerm: string;
}

const Board: React.FC<BoardProps> = ({ data, setData, searchTerm }) => {
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  // Filter tasks based on search term
  const filterTasks = (taskIds: string[]) => {
    return taskIds
      .map((id) => data.tasks[id])
      .filter((task) => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string) => {
    setDraggedTaskId(taskId);
    // Required for Firefox to allow dragging
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (targetColumnId: string) => {
    if (!draggedTaskId) return;

    const sourceColumnId = Object.keys(data.columns).find((colId) =>
      data.columns[colId].taskIds.includes(draggedTaskId)
    );

    if (!sourceColumnId || sourceColumnId === targetColumnId) {
      setDraggedTaskId(null);
      return;
    }

    const sourceColumn = data.columns[sourceColumnId];
    const targetColumn = data.columns[targetColumnId];

    // Remove from source
    const newSourceTaskIds = sourceColumn.taskIds.filter((id) => id !== draggedTaskId);
    
    // Add to target
    const newTargetTaskIds = [...targetColumn.taskIds, draggedTaskId];

    // Update state
    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [sourceColumnId]: { ...sourceColumn, taskIds: newSourceTaskIds },
        [targetColumnId]: { ...targetColumn, taskIds: newTargetTaskIds },
      },
    };

    // If moving to "Done", mark as completed
    if (targetColumn.title === 'Done') {
        newData.tasks[draggedTaskId].completed = true;
        newData.tasks[draggedTaskId].date = `Completed ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    } else if (sourceColumn.title === 'Done') {
        // If moving out of done, unmark
        newData.tasks[draggedTaskId].completed = false;
        // Reset date to generic or keep previous (simplified here)
        newData.tasks[draggedTaskId].date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    setData(newData);
    setDraggedTaskId(null);
  };

  const handleAddTask = (columnId: string, title: string) => {
    const newTaskId = `task-${Date.now()}`;
    const newTask: Task = {
      id: newTaskId,
      title,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      tags: [],
      assigneeAvatar: '', // No avatar for new tasks in this simple demo
    };

    const newData = {
      ...data,
      tasks: {
        ...data.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...data.columns,
        [columnId]: {
          ...data.columns[columnId],
          taskIds: [...data.columns[columnId].taskIds, newTaskId],
        },
      },
    };

    setData(newData);
  };

  return (
    <div className="flex flex-1 overflow-x-auto overflow-y-hidden p-4 md:p-6 bg-background-light dark:bg-background-dark">
      <div className="inline-flex h-full gap-6">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = filterTasks(column.taskIds);

          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              onAddTask={handleAddTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;