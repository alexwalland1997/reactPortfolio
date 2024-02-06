import React from "react";
import './style.css';

export const ProjectGallery = ({ project }) => {
    return (
        <div className="carousel">
        <h1>My Projects</h1>    
    {project.map((item, index) => {
       return (
        <>
        <img
        src= {item.image}
        alt= {item.projectName}
        key={index}
        />
        <a href={item.deployedLink}><button>Deployed Project</button></a>
        </>
       )
       })}
    </div>
    )
} 