import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Amit Kumar Jha</p>
    </footer>
  );
}

export default Footer;
