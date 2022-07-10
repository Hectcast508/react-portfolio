import React from "react";


export default function Footer(props) {
  return (
    <footer>
      <a href="https://github.com/Hectcast508">
        <img src={require("../assets/githubicon.png")} alt="githun-icon"/>
      </a>
      <a href="/">
        <img src={require("../assets/linkedinicon.png")} alt="githun-icon"/>
      </a>
      <a href="https://twitter.com/CapWonderBread">
        <img src={require("../assets/twittericon.png")} alt="githun-icon"/>
      </a>
    </footer>
  )
}
