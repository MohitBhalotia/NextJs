
export default function Product({id,title,price}) {
  return (
    <div style={{border:'2px solid white',margin:'10px' , padding:'20px'}}>
      <h4>{title}</h4>
      <h4>{price}</h4>
    </div>
  )
}
  