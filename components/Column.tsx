import React, { useState } from 'react';
import { Task, Column as ColumnType } from '../types';
import Card from './Card';

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
  onDrop: (columnId: string) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string) => void;
  onAddTask: (columnId: string, title: string) => void;
}

const Column: React.FC<ColumnProps> = ({ column, tasks, onDrop, onDragStart, onAddTask }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDrop(column.id);
  };

  const handleSubmitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      onAddTask(column.id, newTaskTitle.trim());
      setNewTaskTitle('');
      setIsAdding(false);
    }
  };

  // Determine border color based on column type for visual flair
  const borderColor = column.title === 'In Progress' ? 'border-primary' : 'border-transparent';
  const borderClass = column.title === 'In Progress' ? 'border-l-4' : '';

  return (
    <div 
      className="flex w-80 flex-shrink-0 flex-col rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm h-full max-h-full transition-colors"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex flex-none items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
        <h3 className="font-semibold">{column.title}</h3>
        <span className="text-sm font-medium bg-background-light dark:bg-background-dark px-2 py-1 rounded-md text-text-light-secondary dark:text-dark-secondary">
          {tasks.length}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 min-h-[100px]">
        {tasks.length === 0 && column.title === 'Code Review' ? (
             <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center h-32 opacity-50">
                <span className="material-symbols-outlined !text-5xl text-text-light-secondary dark:text-dark-secondary">work_history</span>
                <p className="text-sm text-text-light-secondary dark:text-dark-secondary">Drag cards here when they are ready for review.</p>
            </div>
        ) : (
             tasks.map((task) => (
                <div key={task.id} className={`${borderClass} ${borderColor}`}>
                     <Card 
                        task={task} 
                        onDragStart={(e) => onDragStart(e, task.id)}
                     />
                </div>
            ))
        )}
       
       {isAdding && (
          <form onSubmit={handleSubmitTask} className="flex flex-col gap-2 rounded-lg border border-primary p-3 bg-background-light dark:bg-background-dark animate-pulse-once">
            <textarea
              autoFocus
              className="w-full resize-none rounded bg-transparent p-1 text-sm focus:outline-none dark:text-white"
              placeholder="Enter task title..."
              rows={2}
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmitTask(e);
                }
              }}
            />
            <div className="flex items-center gap-2 justify-end">
                <button
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="px-2 py-1 text-xs font-medium text-text-light-secondary hover:text-text-light-primary dark:text-dark-secondary dark:hover:text-white"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded bg-primary px-3 py-1 text-xs font-medium text-white hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
          </form>
       )}
      </div>

      {!isAdding && (
        <div className="p-4 pt-0">
            <button 
                onClick={() => setIsAdding(true)}
                className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary hover:bg-primary/10 hover:text-primary transition-colors"
            >
            <span className="material-symbols-outlined !text-lg">add</span>
                Add Card
            </button>
        </div>
      )}
    </div>
  );
};

export default Column;