import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Link from "next/link";

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

function UserRow({ user }: { user: User }) {
  return (
    <TableRow>
      <TableCell className="font-medium text-white">{user.name}</TableCell>
      <TableCell className=" text-white">{user.email}</TableCell>
      <TableCell className=" text-white">{user.username}</TableCell>
      <TableCell>
        <Link href={`/admin/${user.id}`}>
          <Button className="w-full" size="medium" variant="outlined">
            Edit
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}

export function UsersTable({
  users,
  offset,
}: {
  users: User[];
  offset: number | null;
}) {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="max-w-[150px] text-white font-bold">
              Name
            </TableCell>
            <TableCell className="text-white font-bold">Email</TableCell>
            <TableCell className="text-white font-bold">Username</TableCell>
            <TableCell /> {/* Empty cell, for other actions */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
