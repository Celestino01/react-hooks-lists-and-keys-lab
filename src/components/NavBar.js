import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const application = links.map((link) => {
    return <a key = {link} href = {link}>{link}</a>
  })

  return <nav>{application}</nav>
}

export default NavBar;
