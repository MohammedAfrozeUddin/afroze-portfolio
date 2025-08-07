// src/components/Achievements.tsx
import React from 'react';
import './Achievements.scss';
import deloitteImg from '../assets/achievements/deloitte.jpg';
import javaImg from '../assets/achievements/java.jpg';
import jpImg from '../assets/achievements/JP-morgan.jpg';
import problemImg from '../assets/achievements/problem-solving.jpg';
import sparksImg from '../assets/achievements/sparks-foundation.jpg';
import stockImg from '../assets/achievements/stock-prediction.jpg';

type Achievement = {
  title: string;
  image: string;
  link: string;
};

const achievements: Achievement[] = [
  {
    title: 'Deloitte Virtual Experience',
    image: deloitteImg,
    link: 'https://drive.google.com/file/d/1zpA-Pvb5dW7lZrSYwj80ml2Y9aEkZsc2/view?usp=sharing',
  },
  {
    title: 'Java Programming Certificate',
    image: javaImg,
    link: 'https://drive.google.com/file/d/1orZ0D2yCUL3gMcgXIMhNmjDcU8Rv0DgM/view?usp=sharing',
  },
  {
    title: 'JP Morgan Virtual Experience',
    image: jpImg,
    link: 'https://drive.google.com/file/d/1z9RDB6G6pv-kVVnvnEcBxmeA6aQsDzt_/view?usp=sharing',
  },
  {
    title: 'Problem Solving Certificate',
    image: problemImg,
    link: 'https://drive.google.com/file/d/1yaXT3FcjV-VzxpyDQrOdxcyUq-_JueCI/view?usp=sharing',
  },
  {
    title: 'The Sparks Foundation Internship',
    image: sparksImg,
    link: 'https://drive.google.com/file/d/1DglF6EwBPmHYdd_YKNsTxxktRcR4ytcG/view?usp=sharing',
  },
  {
    title: 'Stock Price Prediction Project',
    image: stockImg,
    link: 'https://drive.google.com/file/d/1JVw0ov7Neg5rRTfe3mDh73DKkgJd9ja4/view?usp=sharing',
  },
];


const Achievements: React.FC = () => {
  return (
    <div id="achievements" className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-scroll"> {/* <-- changed here */}
        {achievements.map((achieve, index) => (
          <a
            key={index}
            className="achievement-card"
            href={achieve.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={achieve.image} alt={achieve.title} />
            <p>{achieve.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
