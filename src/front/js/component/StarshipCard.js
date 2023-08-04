import React from "react"
import { Link } from "react-router-dom"

const StarshipCard = (props) => {
    return(
        <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.apple.name}</h5>
    <p class="card-text">Model: {props.apple.model}</p>
    <p class="card-text">Passengers: {props.apple.passengers}</p>
    <Link to={"/about/starships/" + props.id}>
      <span class="btn btn-primary">More Info</span>
    </Link>
  </div>
</div>
    )
}
export default StarshipCard