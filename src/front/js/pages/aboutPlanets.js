import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const AboutPlanets = () => {
    const {store, actions} = useContext(Context)
    let params=useParams()
    console.log(params)
    let item=store[`${params.type}`][`${params.id}`]
    console.log(item)
    return(
        <div className="about-container">
            <div className="about-info">
                <div className="about-info-top">
                    <img src="" />
                    <div>
                        <h2>{item.name}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus justo et nibh hendrerit viverra. Phasellus eu est lorem. Quisque vitae leo eu est aliquet ultrices. Suspendisse potenti. Integer diam odio, suscipit vitae tempor nec, varius eget odio. Quisque cursus vitae felis sed sodales. Vestibulum dictum aliquam tellus id efficitur. Nulla facilisi. In aliquam risus vitae orci fermentum ultrices.
                            <br />
                            Curabitur sodales turpis id ipsum gravida, et auctor nisi maximus. Nullam quis porttitor elit. Ut ipsum nunc, varius a nisi sit amet, aliquam accumsan nibh. Cras sed libero condimentum diam maximus vulputate. Nulla ornare dignissim dolor, ac auctor libero. Morbi congue ipsum consectetur ipsum ultricies accumsan. Quisque vel augue vitae metus ullamcorper dignissim ut ac elit. Duis in vehicula metus. Duis in interdum risus.
                        </p>
                    </div>
                </div>
                <div className="about-info-bottom">
                    <p>
                        Height: {item.height}
                    </p>
                    <p>
                        Mass: {item.mass}
                    </p>
                    <p>
                        Gender: {item.gender}
                    </p>
                    <p>
                        Skin Color: {item.skin_color}   
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPlanets