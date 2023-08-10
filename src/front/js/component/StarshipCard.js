import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"

const StarshipCard = (props) => {
  const {store,actions} = useContext(Context)
    return(
        <div class="card" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/starships/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.apple.name}</h5>
    <p class="card-text">Model: {props.apple.model}</p>
    <p class="card-text">Passengers: {props.apple.passengers}</p>
    <Link to={"/aboutStarships/starships/" + props.id}>
      <span class="btn btn-primary">More Info</span>
    </Link>
    <button onClick={() => actions.addFavorite(props.apple.name)}>Fave</button>
  </div>
</div>
    )
}
export default StarshipCard