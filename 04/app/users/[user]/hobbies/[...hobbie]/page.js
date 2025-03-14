
export default async function page({params}) {
    const {user,hobbie}=await params;
    
  return (
    <div>
        <h1>User id: {user}</h1>
        <span>Hobbie: {hobbie[0]}</span>
    </div>
  )
}
