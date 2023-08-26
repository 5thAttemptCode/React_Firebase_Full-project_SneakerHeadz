
import "./css/skewDetails.css"


export default function SkewDetails({shoe}) {

  return (
    <div className='skew-details'>
      <p>{shoe.name}</p>
      <p>{shoe.price}</p>
    </div>
  )
}
