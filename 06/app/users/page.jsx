import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import React from "react";

export default async function Users() {
  const users = await getAllUsers();
  
  return (
    <div>
      {users.map((user) => {
        return (
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
    </div>
  );
}
