import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>My Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/MohammedAfrozeUddin/RetailIQ-Analytics/tree/main/RetailIQ-Analytics" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MohammedAfrozeUddin/RetailIQ-Analytics/tree/main/RetailIQ-Analytics" target="_blank" rel="noreferrer"><h2>Retail IQ</h2></a>
                <p>End-to-End Retail Analytics Dashboard. A complete business intelligence project involving data cleaning, EDA, SQL logic, and interactive dashboards for strategic insights in retail.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MohammedAfrozeUddin/Traffic-Violation-Detection" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MohammedAfrozeUddin/Traffic-Violation-Detection" target="_blank" rel="noreferrer"><h2>Traffic Signal Violation Detection System</h2></a>
                <p>Developed a real-time computer vision system to detect red light violations using YOLOv3 and OpenCV. The system can classify vehicles and track violations with video feedback and GUI.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MohammedAfrozeUddin/Next-Gen-Crowdfunding-on-Web3.0-frontier" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MohammedAfrozeUddin/Next-Gen-Crowdfunding-on-Web3.0-frontier" target="_blank" rel="noreferrer"><h2>Next Gen Crowdfunding Platform on Web 3.0</h2></a>
                <p>Engineered a decentralized crowdfunding platform using Ethereum, Solidity, and MetaMask. Includes smart contract logic for secure fund release.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MohammedAfrozeUddin/COVID19-Dashboard" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MohammedAfrozeUddin/COVID19-Dashboard" target="_blank" rel="noreferrer"><h2>COVID-19 Real-Time Dashboard</h2></a>
                <p>Built a global COVID tracker with Dash and Plotly, pulling API data and offering filterable insights for 200+ countries.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MohammedAfrozeUddin/Retail-Sales-Dashboard-Excel" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MohammedAfrozeUddin/Retail-Sales-Dashboard-Excel" target="_blank" rel="noreferrer"><h2>Retail Sales Dashboard</h2></a>
                <p>Designed an Excel-based retail dashboard with dynamic charts and slicers for real-time KPI analysis.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MohammedAfrozeUddin/Banking-Transaction-System" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MohammedAfrozeUddin/Banking-Transaction-System" target="_blank" rel="noreferrer"><h2>Banking Transaction System</h2></a>
                <p>Created a secure banking system using Flask and SQL for account management, transfers, and transaction history.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;