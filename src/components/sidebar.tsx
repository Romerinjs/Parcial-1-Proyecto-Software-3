import {
  ListTodo,
  FolderKanban,
  Calendar as CalendarIcon,
  Users2,
  Settings as SettingsIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: 'tasks', label: 'Tasks', icon: ListTodo },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { id: 'team', label: 'Team', icon: Users2 },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="w-64 border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">Task Manager</h2>
      </div>
      <nav className="space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={currentPage === item.id ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-3',
                currentPage === item.id && 'bg-secondary'
              )}
              onClick={() => setCurrentPage(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}