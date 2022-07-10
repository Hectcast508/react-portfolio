import React, { useState } from "react";

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
      title: 'GamePla',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://uhmammoth.github.io/GamePlatforms/',
      fileName: 'GamePlatformProject.png'
    },
    {
      title: 'GamePlat',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://uhmammoth.github.io/GamePlatforms/',
      fileName: 'GamePlatformProject.png'
    },
    {
      title: 'GamePlatf',
      descript: 'Description',
      github: 'https://github.com/uhMammoth/GamePlatforms',
      deploy: 'https://uhmammoth.github.io/GamePlatforms/',
      fileName: 'GamePlatformProject.png'
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
    <div>
      {projects.map((project, i) => (
        <a key={project.title} href={project.github}>
          <img src={require(`../assets/${project.fileName}`)} alt={project.title}/>
          <h2>{project.title}</h2>
          <p>{project.descript}</p>
        </a>
      ))}
    </div>
  )
}