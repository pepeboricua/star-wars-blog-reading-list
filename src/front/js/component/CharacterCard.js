import React from "react"
import { Link } from "react-router-dom"

const CharacterCard = (props) => {
    return(
        <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.banana.name}</h5>
    <p class="card-text">Gender: {props.banana.gender}</p>
    <p class="card-text">Mass: {props.banana.mass}</p>
    <p class="card-text">Height: {props.banana.height}</p>
    <Link to={"/about/people/" + props.id}>
      <span class="btn btn-primary">More Info</span>
    </Link>
  </div>
</div>
    )
}
export default CharacterCard