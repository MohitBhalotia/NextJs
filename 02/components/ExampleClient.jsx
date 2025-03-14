'use client'
import ExampleServer from "./ExampleServer";
const ExampleClient = () => {
    console.log("I am client component");
    
  return (
    <div>
        <p>This is Client Component</p>
        <ExampleServer/>
    </div>
  )
}

export default ExampleClient