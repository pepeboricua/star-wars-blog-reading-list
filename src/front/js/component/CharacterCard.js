import React from "react"

const CharacterCard = (props) => {
    return(
        <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.banana.name}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac blandit justo, vitae condimentum ligula. Proin ut risus pulvinar, commodo sapien sit amet, ultrices orci. Morbi placerat sit amet velit ac accumsan. Pellentesque blandit mattis imperdiet. Donec aliquam dapibus neque, eu scelerisque libero molestie in.</p>
    <a href="#" class="btn btn-primary">More Info</a>
  </div>
</div>
    )
}
export default CharacterCard