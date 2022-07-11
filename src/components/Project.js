import React, { useState } from "react";
import github from "../assets/githubicon.svg"

export default function Project() {

  const [projects] = useState([
    {
      title: 'GamePlatforms',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://uhmammoth.github.io/GamePlatforms/',
      fileName: 'GamePlatformProject.png'
    },
    {
      title: 'Park Place',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://park-place-association.herokuapp.com/',
      fileName: 'park-place.png'
    },
    {
      title: 'Run Buddy',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://hectcast508.github.io/run-buddy/',
      fileName: 'run-buddy.png'
    },
    {
      title: 'Refactored Coded',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://hectcast508.github.io/horiseon-refactored-code/',
      fileName: 'heriseon.png'
    },
    {
      title: 'GamePlatfor',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://uhmammoth.github.io/GamePlatforms/',
      fileName: 'GamePlatformProject.png'
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
          <div>
          <h2>{project.title}</h2>
          <p>{project.descript}</p>
          <a href={project.github}>
            <img src={github} alt="githubicon"/>
          </a>
          </div>
          <img className="project-img" src={require(`../assets/${project.fileName}`)} alt={project.title}/>
        </a>
      ))}
    </div>
  )
}