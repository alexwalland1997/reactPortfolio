import React from "react";
import './style.css';
import { RiGithubFill } from "@remixicon/react";

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
        <h2>{item.projectName}</h2>
        <a href={item.deployedLink} target="_blank"><button><RiGithubFill/>Deployed Project</button></a>
        <a href={item.githubLink} target="_blank"><button><RiGithubFill/>Repo Link</button></a>
        </>
       )
       })}
    </div>
    )
} 