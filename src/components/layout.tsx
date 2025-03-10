import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/sidebar';
import { Tasks } from '@/components/pages/tasks';
import { Projects } from '@/components/pages/projects';
import { Calendar } from '@/components/pages/calendar';
import { Team } from '@/components/pages/team';
import { Settings } from '@/components/pages/settings';

export function Layout() {
  const [currentPage, setCurrentPage] = useState('tasks');

  const renderPage = () => {
    switch (currentPage) {
      case 'tasks':
        return <Tasks />;
      case 'projects':
        return <Projects />;
      case 'calendar':
        return <Calendar />;
      case 'team':
        return <Team />;
      case 'settings':
        return <Settings />;
      default:
        return <Tasks />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="container mx-auto py-6">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}