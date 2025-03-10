import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

interface Task {
  title: string;
  date: Date;
}

export function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (date) {
      setTasks([...tasks, { title, date }]);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-3xl font-bold text-center">Calendar</h1>
      
      <div className="grid gap-6 md:grid-cols-[2fr,1fr] w-full max-w-4xl">
        <Card className="mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mx-auto"
            />
            <div className="mt-4">
              <input
                type="text"
                placeholder="Task title"
                className="border rounded p-2 w-full"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addTask((e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = '';
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {task.date.toDateString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}