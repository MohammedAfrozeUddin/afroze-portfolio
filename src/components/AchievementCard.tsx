import React from 'react';

type Props = {
  title: string;
  image: string;
  link: string;
};

const AchievementCard: React.FC<Props> = ({ title, image, link }) => {
  return (
    <a className="achievement-card" href={link} target="_blank" rel="noreferrer">
      <img src={image} alt={title} />
      <p>{title}</p>
    </a>
  );
};

export default AchievementCard;
