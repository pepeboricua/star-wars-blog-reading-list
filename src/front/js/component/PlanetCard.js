import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"

const PlanetCard = (props) => {
  const {store,actions} = useContext(Context) 
    return(
        <div class="card" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.orange.name}</h5>
    <p class="card-text">Climate: {props.orange.climate}</p>
    <p class="card-text">Terrain: {props.orange.terrain}</p>
    <Link to={"/aboutPlanets/planets/" + props.id}>
      <span class="btn btn-primary">More Info</span>
    </Link>
    <button onClick={() => actions.addFavorite(props.orange.name)}>Fave</button>
  </div>
</div>
    )
}
export default PlanetCard