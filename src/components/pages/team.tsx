import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { team as initialTeam } from '@/lib/data';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const STATUS_OPTIONS = ['All', 'Active', 'Inactive', 'Pending'];

export function Team() {
  const [team, setTeam] = useState(initialTeam);
  const [filter, setFilter] = useState('All');

  const updateStatus = (id: number, newStatus: string) => {
    setTeam((prevTeam) =>
      prevTeam.map((member) =>
        member.id === id ? { ...member, status: newStatus } : member
      )
    );
  };

  const filteredTeam = filter === 'All' ? team : team.filter(member => member.status === filter);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Team</h1>
      
      <div className="flex justify-between items-center">
        <p className="text-lg">Filter by status:</p>
        <Select onValueChange={setFilter} value={filter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map(status => (
              <SelectItem key={status} value={status}>{status}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTeam.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                {member.name}
              </TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Badge variant="secondary">{member.status}</Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {STATUS_OPTIONS.slice(1).map((status) => (
                      <DropdownMenuItem key={status} onClick={() => updateStatus(member.id, status)}>
                        {status}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}