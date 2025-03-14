import Link from "next/link";

export default async function page({params}) {
    const {user}=await params
    console.log(user);
    
  return (
    <div>
        <p>User : {user}</p>
        <Link href={`/users/${user}/hobbies`}><button>Click me</button></Link>
    </div>
  )
}
