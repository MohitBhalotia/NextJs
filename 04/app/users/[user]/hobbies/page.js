import Link from "next/link";
export default async function page({ params }) {
  const { user } = await params;
  return (
    <div>
      <h1>Your hobbies</h1>
      <ul>
        <Link href={`../${user}/hobbies/wrestling`}>
          <li>Wrestling</li>
        </Link>
        <Link href={`../${user}/hobbies/boxing`}>
          <li>Boxing</li>
        </Link>
        <Link href={`../${user}/hobbies/calesthenics`}>
          <li>Calesthenics</li>
        </Link>
        <Link href={`../${user}/hobbies/matial-arts`}>
          <li>Martial Arts</li>
        </Link>
      </ul>
    </div>
  );
}
