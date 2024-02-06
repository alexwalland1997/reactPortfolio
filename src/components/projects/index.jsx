import React from "react";
import {ProjectGallery} from '../projectGallery';
import {projects} from '../../Data/projects.json';
import Header from '../header';


function Projects() {
    return (
    <>
    <Header />
     <ProjectGallery project={projects}/>
    </>
    );
};

export default Projects;


    