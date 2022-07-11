import React from "react";
import github from "../assets/githubicon.svg"
import linkedin from "../assets/linkedinicon.svg"
import twitter from "../assets/twittericon.svg"


export default function Footer(props) {
  return (
    <footer>
      <a href="https://github.com/Hectcast508">
        <img src={github} alt="github-icon"/>
      </a>
      <a href="/">
        <img src={linkedin} alt="linkedin-icon"/>
      </a>
      <a href="https://twitter.com/CapWonderBread">
        <img src={twitter} alt="twitter-icon"/>
      </a>
    </footer>
  )
}
