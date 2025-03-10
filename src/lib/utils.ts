import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Task, Project } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateProjectProgress(projectId: number, tasks: Task[]): number {
  const projectTasks = tasks.filter((task) => task.projectId === projectId);
  if (projectTasks.length === 0) return 0;

  const completedTasks = projectTasks.filter(
    (task) => task.status === 'Completed'
  ).length;
  return Math.round((completedTasks / projectTasks.length) * 100);
}

export function getProjectStats(projectId: number, tasks: Task[]) {
  const projectTasks = tasks.filter((task) => task.projectId === projectId);
  const completedTasks = projectTasks.filter(
    (task) => task.status === 'Completed'
  ).length;
  return {
    total: projectTasks.length,
    completed: completedTasks,
    progress: calculateProjectProgress(projectId, tasks),
  };
}

export function getDashboardStats(tasks: Task[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    total: tasks.length,
    completed: tasks.filter((task) => task.status === 'Completed').length,
    inProgress: tasks.filter((task) => task.status === 'In Progress').length,
    overdue: tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      return (
        dueDate < today && task.status !== 'Completed'
      );
    }).length,
    completedThisWeek: tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return (
        task.status === 'Completed' &&
        dueDate >= weekAgo &&
        dueDate <= today
      );
    }).length,
    dueToday: tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      return dueDate.getTime() === today.getTime();
    }).length,
  };
}