import "./Main.scss"
import {data} from "../../helper/data"
import Card from "../card/Card"


const Main = () => {
  return (
    <div className="card-container">
        {data.map((item) => <Card {...item}/> )}
    </div>
  )
}

export default Main