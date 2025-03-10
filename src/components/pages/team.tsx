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
import { team } from '@/lib/data';

export function Team() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Team</h1>

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
          {team.map((member) => (
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
                <Badge variant="secondary">{member.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}