import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import hackerrankIcon from '../assets/icons/hackerrank.svg';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/MohammedAfrozeUddin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/mohammed-afroze-uddin/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
<a href="https://www.hackerrank.com/profile/afrozeuddinmau" target="_blank" rel="noreferrer">
  <img src={hackerrankIcon} alt="HackerRank" className="custom-icon white-bg-icon" />
</a>

      </div>
    </footer>
  );
}

export default Footer;