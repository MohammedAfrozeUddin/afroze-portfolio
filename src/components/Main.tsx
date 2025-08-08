import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatarLight from '../assets/my_profile01.jpg';
import avatarDark from '../assets/my_profile02.jpg';

type MainProps = {
  theme: 'light' | 'dark';
};

function Main({ theme }: MainProps) {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={theme === 'dark' ? avatarDark : avatarLight}
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MohammedAfrozeUddin" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mohammed-afroze-uddin/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Mohammed Afroze Uddin</h1>
          <p>AI Engineer on the Rise | Building Intelligent Solutions with ML, Data, and Code</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/MohammedAfrozeUddin" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mohammed-afroze-uddin/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
