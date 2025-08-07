import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBrain, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
"Python",
"Machine Learning",
"Deep Learning",
"Computer Vision",
"YOLO",
"NLP",
"OpenAI",
"Streamlit",
"LLMs",
"Generative AI (GenAI)",
"Information Retrieval Systems",
"OpenCV",
"NumPy",
"Pandas",
"Matplotlib"
];

const labelsSecond = [
"MS SQL",
"Microsoft Excel",
"Power BI",
"Pandas",
"Matplotlib",
"Statistical Analysis",
"Exploratory Data Analysis (EDA)",
"Customer Segmentation Strategy",
"Data Visualization",
"Dashboards",
"Business Analytics"
];

const labelsThird = [
    "Java",
"Python",
"Git",
"Linux",
"DBMS",
"Operating Systems",
"Software Engineering",
"Data Structures",
"Algorithms",
"Object-Oriented Programming (OOP)",
"Distributed Systems",
"Computer Networks",
"Information Security",
"Project Management",
"Web3",
"Blockchain Technology"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>I am passionate about creating AI-driven solutions that solve complex problems using real-world data. My core strengths lie in applying machine learning models, deep learning frameworks, and computer vision techniques such as YOLO. I’ve also explored natural language processing for text-based applications. With hands-on experience in Python-based ML libraries, I bring a solid understanding of model training, evaluation, and optimization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Data Science & Analytics</h3>
                    <p>I specialize in extracting insights from structured and unstructured data through statistical analysis and visualization. I have worked on customer segmentation strategies, EDA, and interactive dashboards using Power BI and Excel. My projects focus on translating data into actionable intelligence that supports business growth and efficiency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Software Engineering & Systems</h3>
                    <p>I have a strong foundation in software engineering, object-oriented programming, and system design. My knowledge spans across Java and Python, along with a good grasp of core subjects like DBMS, operating systems, algorithms, and distributed systems. I also follow version control and development best practices using Git and Linux.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;