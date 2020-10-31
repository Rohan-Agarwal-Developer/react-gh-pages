import React, { useState } from "react";

const projects = [
    {
        id: 1,
        name: "Smart Bike",
        description: "A electic powered bike that uses the gyroscope to achive self balancing feature. It has its own GPS tracking and intelligent navigation. Other features like Fully Integrated - No Cables, No Wires, No External Components gives thrilling speed, a good battery life and comes with preloaded elevated features.",
        img: require("../images/smartbike.jpg")
    },
    {
        id: 2,
        name: "Self Driving",
        description: "Automobiles that can prevent accident to happen. Self-driving cars combine a variety of sensors to perceive their surroundings, such as radar, lidar, sonar, GPS, odometry and inertial measurement units.[1] Advanced control systems interpret sensory information to identify appropriate navigation paths, as well as obstacles and relevant signage.",
        img: require("../images/self-driving.jpg")
    },
    {
        id: 3,
        name: "E-ATV",
        description: "An Elecric All-terrain vehicle (E-ATV), also known as a quad, is a vehicle that travels on low-pressure tires, with a seat that is straddled by the operator, along with handlebars for steering control. As the name implies, it is designed to handle a wider variety of terrain than most other vehicles",
        img: require("../images/atv.jpg")
    }

];

function CardEntry(item) {
    //console.log(item.style);
    const [onHover, setHover] = useState(false);

    function ChangeStateOver() {
        setHover(true);
    }
    function ChangeStateAway() {
        setHover(false);
    }

    const animate = {
        animationName: "fadeInUp",
        animationDuration: "0.5s"
    }

    return (
        <div className="col-lg-4 project-box col-sm-12" >
            <div className="project-card" onMouseEnter={ChangeStateOver} onMouseLeave={ChangeStateAway}>
                <div className={"project-card-elements " + "project-card-elements-" + item.num} style={{ display: (!onHover ? "block" : "none") }} >
                    <img className="project-images" src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                </div>
                <div className={"project-card-elements " + "project-card-elements-" + item.num}
                    style={{ display: (!onHover ? "none" : "block"), ...animate }}>
                    <div style={{ padding: "5%", fontWeight: "600" }}>
                        <h3>{item.name}</h3>
                        <p style={{fontSize: "0.8rem"}}>{item.description.slice(0, 300)}........</p>
                        <button type="button" class="btn btn-dark btn-sm">Know more</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

// bouceOut

// bounce

// bounceIn

// bounceInDown

// bounceInLeft

// bounceInRight

// bounceInUp

// bounceOutDown

// bounceOutLeft

// bounceOutRight

// bounceOutUp

// fadeIn

// fadeInDown

// fadeInDownBig

// fadeInLeft

// fadeInLeftBig

// fadeInRight

// fadeInRightBig

// fadeInUp

// fadeInUpBig

// fadeOut

// fadeOutDown

// fadeOutDownBig

// fadeOutLeft

// fadeOutLeftBig

// fadeOutRight

// fadeOutRightBig

// fadeOutUp

// fadeOutUpBig

// flash

// flip

// flipInX

// flipInY

// flipOutX

// flipOutY

// headShake

// hinge

// jello

// lightSpeedIn

// lightSpeedOut

// pulse

// rollIn

// rollOut

// rotateIn

// rotateInDownLeft

// rotateInDownRight

// rotateInUpLeft

// rotateInUpRight

// rotateOut

// rotateOutDownLeft

// rotateOutDownRight

// rotateOutUpLeft

// rotateOutUpRight

// rubberBand

// shake

// slideInDown

// slideInLeft

// slideInRight

// slideInUp

// slideOutDown

// slideOutLeft

// slideOutRight

// slideOutUp

// swing

// tada

// wobble

// zoomIn

// zoomInDown

// zoomInLeft

// zoomInRight

// zoomInUp

// zoomOut

// zoomOutDown

// zoomOutLeft

// zoomOutRight

// zoomOutUp

function Projects() {

    var toReturn = (
        <section id="projects">
            <h2>ONGOING PROJECTS</h2>
            <div className="row">
                {projects.map(props =>
                    <CardEntry
                        key={props.id}
                        img={props.img}
                        name={props.name}
                        description={props.description}
                        num={props.id}
                    />
                )}
            </div>
        </section>
    );

    return toReturn;
}

export default Projects;