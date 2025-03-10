import { Task, Project, TeamMember } from './types';

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Update landing page',
    priority: 'High',
    status: 'In Progress',
    dueDate: '2024-03-25',
    projectId: 1,
  },
  {
    id: 2,
    title: 'Fix navigation bug',
    priority: 'Medium',
    status: 'Todo',
    dueDate: '2024-03-26',
    projectId: 1,
  },
  {
    id: 3,
    title: 'Write documentation',
    priority: 'Low',
    status: 'Completed',
    dueDate: '2024-03-24',
    projectId: 1,
  },
  {
    id: 4,
    title: 'Design mobile wireframes',
    priority: 'High',
    status: 'In Progress',
    dueDate: '2024-03-27',
    projectId: 2,
  },
  {
    id: 5,
    title: 'Implement authentication',
    priority: 'High',
    status: 'Todo',
    dueDate: '2024-03-28',
    projectId: 2,
  },
  {
    id: 6,
    title: 'Create marketing assets',
    priority: 'Medium',
    status: 'Completed',
    dueDate: '2024-03-23',
    projectId: 3,
  },
  {
    id: 7,
    title: 'Social media campaign',
    priority: 'High',
    status: 'Completed',
    dueDate: '2024-03-22',
    projectId: 3,
  },
  {
    id: 8,
    title: 'SEO optimization',
    priority: 'Medium',
    status: 'In Progress',
    dueDate: '2024-03-29',
    projectId: 3,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Redesign and implement new company website',
    status: 'In Progress',
  },
  {
    id: 2,
    name: 'Mobile App',
    description: 'Develop mobile application for iOS and Android',
    status: 'In Progress',
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    description: 'Q2 Digital Marketing Campaign',
    status: 'Almost Done',
  },
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Project Manager',
    email: 'alex@example.com',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Developer',
    email: 'sarah@example.com',
    status: 'In Meeting',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Designer',
    email: 'michael@example.com',
    status: 'Away',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];