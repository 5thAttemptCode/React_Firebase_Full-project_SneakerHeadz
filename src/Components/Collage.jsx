import Button from "./Button"
import "./css/collage.css"

export default function Collage() {
  return (
    <div className="collage-container container">
        <img src="../public/24.svg" alt="" />
        <p className="collage-header">ALL YOU SNEAKER HEADS <br /> BE QUIET! CHOOSE A PAIR <br /> AND BUY IT!</p>
        <Button />
    </div>
  )
}
