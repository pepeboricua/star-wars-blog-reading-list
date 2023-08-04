import React from "react"
import { Link } from "react-router-dom"

const PlanetCard = (props) => {
    return(
        <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.orange.name}</h5>
    <p class="card-text">Climate: {props.orange.climate}</p>
    <p class="card-text">Terrain: {props.orange.terrain}</p>
    <Link to={"/about/planets/" + props.id}>
      <span class="btn btn-primary">More Info</span>
    </Link>
  </div>
</div>
    )
}
export default PlanetCard