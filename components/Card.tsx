import React from 'react';
import { Task } from '../types';

interface CardProps {
  task: Task;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string) => void;
  isDragging?: boolean;
}

const Card: React.FC<CardProps> = ({ task, onDragStart, isDragging }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      className={`
        flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark 
        bg-background-light dark:bg-background-dark p-4 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing
        transition-all duration-200 select-none
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${task.completed ? 'opacity-60' : ''}
      `}
    >
      <p className={`font-medium ${task.completed ? 'line-through' : ''}`}>{task.title}</p>
      
      <div className="flex items-center justify-between text-sm text-text-light-secondary dark:text-dark-secondary">
        <div className={`flex items-center gap-2 ${task.completed ? 'text-green-600 dark:text-green-400' : ''}`}>
          <span className="material-symbols-outlined !text-base">
            {task.completed ? 'task_alt' : 'calendar_today'}
          </span>
          <span>{task.date}</span>
        </div>
        
        {task.assigneeAvatar && (
          <div className="flex -space-x-1">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-background-light dark:ring-background-dark"
              src={task.assigneeAvatar}
              alt="Assignee"
            />
          </div>
        )}
      </div>

      {task.tags && task.tags.length > 0 && (
        <div className="flex gap-2">
          {task.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`rounded px-2 py-0.5 text-xs font-semibold ${tag.colorClass}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;