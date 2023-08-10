import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"

const CharacterCard = (props) => {
  const {store,actions} = useContext(Context)
    return(
        <div class="card" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.banana.name}</h5>
    <p class="card-text">Gender: {props.banana.gender}</p>
    <p class="card-text">Mass: {props.banana.mass}</p>
    <p class="card-text">Height: {props.banana.height}</p>
    <Link to={"/aboutPeople/people/" + props.id}>
      <span class="btn btn-primary">More Info</span>
    </Link>
    <button onClick={() => actions.addFavorite(props.banana.name)}>Fave</button>
  </div>
</div>
    )
}
export default CharacterCard