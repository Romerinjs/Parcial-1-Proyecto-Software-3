import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Calendar</h1>
      
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Website Redesign</h3>
                <p className="text-sm text-muted-foreground">Due in 3 days</p>
              </div>
              <div>
                <h3 className="font-medium">Team Meeting</h3>
                <p className="text-sm text-muted-foreground">Tomorrow at 10:00 AM</p>
              </div>
              <div>
                <h3 className="font-medium">Project Review</h3>
                <p className="text-sm text-muted-foreground">Next week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}