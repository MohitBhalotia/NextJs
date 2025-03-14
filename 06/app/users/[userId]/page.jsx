import getAllUsers from "@/lib/getAllUsers";
import getUser from "@/lib/getUser";

export default async function User({ params }) {
  const { userId } = await params;
  const user = await getUser(userId);

  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await getAllUsers();

  return users.map((user) => ({ userId: user.id.toString() }));
}
