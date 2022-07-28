import React, { useState } from "react";
import github from "../assets/githubicon.svg"

export default function Project() {

  const [projects] = useState([
    {
      title: 'Mern School Website',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/school-website.git',
      deploy: 'https://mern-school-website.herokuapp.com/',
      fileName: 'mern-school-website.png'
    },
    {
      title: 'Park Place',
      descript: 'Handlebars/CSS/node/SQL/Express',
      github: 'https://github.com/SalvadorBanuelos424/Park-Place-master-planned-community.git',
      deploy: 'https://park-place-association.herokuapp.com/',
      fileName: 'park-place.png'
    },
    {
      title: 'GamePlatforms',
      descript: 'HTML/CSS/JS/JQuery/API',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://uhmammoth.github.io/GamePlatforms/',
      fileName: 'GamePlatformProject.png'
    },
    {
      title: 'Run Buddy',
      descript: 'HTML/CSS',
      github: 'https://github.com/Hectcast508/run-buddy.git',
      deploy: 'https://hectcast508.github.io/run-buddy/',
      fileName: 'run-buddy.png'
    },    
    {
      title: 'Refactored Coded',
      descript: 'HTML/CSS',
      github: 'https://github.com/Hectcast508/horiseon-refactored-code.git',
      deploy: 'https://hectcast508.github.io/horiseon-refactored-code/',
      fileName: 'heriseon.png'
    },    
    {
      title: 'GamePlatform',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://uhmammoth.github.io/GamePlatforms/',
      fileName: 'GamePlatformProject.png'
    }
  ])


  return (
    <div className="projects">
      {projects.map(project => (
        <a className="project" key={project.title} href={project.deploy}>
          <div className="card-info">
            <div className="pro-text">
              <h2>{project.title}</h2>
              <p>{project.descript}</p>
            </div>
            <a href={project.github}>
              <img className="github-icon" src={github} alt="githubicon"/>
            </a>
          </div>
          <img className="project-img" src={require(`../assets/${project.fileName}`)} alt={project.title}/>
        </a>
      ))}
    </div>
  )
}