import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './survey.css';
import { useAuth } from '../context';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import clip from '../assets/clip2.png';
import fake from '../assets/fake.jpg';
import genuine from '../assets/genuine.jpg';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = (props) => {
    const { userLoggedIn } = useAuth();
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    const [res, setRes] = useState(data.res.data['class']);
    const [title, setTitle] = useState(data.res.data['job_title']);
    const [description, setdescription] = useState(data.res.data['description']);
    const [companyProfile, setCompanyProfile] = useState(data.res.data['company_profile']);
    const [experience, setexperience] = useState(data.res.data['required_experience']);
    const [education, seteducation] = useState(data.res.data['required_education']);
    console.log("data.res")
    console.log(data.res.data['class'])
    const home = () => {
        navigate('/')
    }
    return (
        <div className="parent">
            {!userLoggedIn && <Navigate to="/login" replace={true} />}

            <div className="child">
                <div className="heading">
                    <img src={clip} alt="" />
                </div>
                <div className="white">
                    <div className="container">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="no-color">
                                        <h3>{title}</h3>
                                    </td>
                                    <td className="orange">
                                        {parseInt(res) ? <img src={fake} /> : <img src={genuine} />}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="orange">
                                        <h4>Required Education:</h4>
                                        {education}
                                    </td>
                                    <td className="no-color">
                                        <h4>Required Experience:</h4>
                                        {experience}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="no-color">
                                        <h4>Company Profile:</h4>
                                        <div className="profile">
                                            {companyProfile}
                                        </div>
                                    </td>
                                    <td className="orange">
                                        <h4>Description:</h4>
                                        <div className="profile">
                                            {description}
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <button onClick={home}>Check another job </button>

                </div>

            </div>
        </div>
    );
};

export default Result;
