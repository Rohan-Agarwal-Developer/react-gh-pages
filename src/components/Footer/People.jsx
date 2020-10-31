import React from "react";
//import CardEntry from "../CardEntry";

const people = [
    {
        id: 1,
        name: "Pragna Elavarthi",
        description: "Joint Secretary",
        img: require("../../images/lady-img.jpg"),
        link: "https://linkedin.com/in/harsh-vardhan-552838171/",
        mail: "pragnaelavarthi.mec18@iitbhu.ac.in"
    },
    {
        id: 2,
        name: "Harsh Vardhan",
        description: "Secretary",
        img: require("../../images/harsh.jpg"),
        link: "https://linkedin.com/in/harsh-vardhan-552838171/",
        mail: "harshvardhan.mec18@iitbhu.ac.in"
    },
    {
        id: 3,
        name: "Sudeep Kumar",
        description: "Joint Secretary",
        img: require("../../images/sudeep.jpg"),
        link: "https://linkedin.com/in/harsh-vardhan-552838171/",
        mail: "sudeepkumar.mec18@iitbhu.ac.in"
    }

];

function CardEntry(item) {
    //console.log(item.style);
    return (
        <div className={"col-lg-" + item.quantity + " " + item.mainStyle}>
        <a href={item.link}>
            <img className={item.imgStyle} src={item.img} alt={item.name} />
            <h4>{item.name}</h4>    
            <p className="footer-box-people-description">{item.description}</p>
        </a>
        <p className="footer-box-people-description">{item.mail}</p>
        </div>
    );
}

export default function People() {
    
    return (
        <div className="footer-box-people">
            <h5>People</h5>
            <div className="row footer-box-people">{
                people.map(props =>
                    <CardEntry
                        key={props.id}
                        img={props.img}
                        name={props.name}
                        description={props.description}
                        link={props.link}
                        quantity="4"
                        mail={props.mail}
                        //mainStyle="footer-box-people"
                        imgStyle="footer-box-people-image"
                    />
                )}</div>
        </div>
    );
}


