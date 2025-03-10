import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { projects, tasks } from '@/lib/data';
import { getProjectStats } from '@/lib/utils';

export function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const stats = getProjectStats(project.id, tasks);
          return (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{project.name}</CardTitle>
                  <Badge variant="secondary">{project.status}</Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{stats.progress}%</span>
                    </div>
                    <Progress value={stats.progress} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stats.completed} of {stats.total} tasks completed
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}