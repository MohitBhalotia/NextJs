import Link from "next/link";
export default function page() {
  return (
    <div>
      <Link href="users/1">
        <div>User 1</div>
      </Link>
      <Link href="users/2">
        <div>User 2</div>
      </Link>
      <Link href="users/3">
        <div>User 3</div>
      </Link>
      <Link href="users/4">
        <div>User 4</div>
      </Link>
      <Link href="users/5">
        <div>User 5</div>
      </Link>
    </div>
  );
}
