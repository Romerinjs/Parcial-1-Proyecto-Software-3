export interface Task {
  id: number;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Todo' | 'In Progress' | 'Completed';
  dueDate: string;
  projectId?: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  status: 'Not Started' | 'In Progress' | 'Almost Done' | 'Completed';
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  status: string;
  avatar: string;
}