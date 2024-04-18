import React, { useEffect, useState } from 'react'
import './survey.css'
import { useAuth } from '../context';
import { Navigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import clip from '../assets/clip2.png'
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase/firebase';

const AddSurvey = () => {
    const { userLoggedIn } = useAuth()
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [benefits, setBenefits] = useState('');
    const [requirements, setRequirements] = useState('');
    const [telecommuting, setTelecommuting] = useState('');
    const [hasQuestions, setHasQuestions] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [employment, setEmployment] = useState('');
    const [industry, setIndustry] = useState('');


    const handleAddDetails = async (e) => {
        e.preventDefault()
        const surveyId = uuidv4();

        const firestore = db;
        const jobDetails = {
            jobTitle,
            location,
            department,
            salary,
            company,
            description,
            benefits,
            requirements,
            telecommuting,
            hasQuestions,
            experience,
            education,
            employment,
            industry,
        };
        console.log(jobDetails)

        try {
            const surveyRef = doc(db, 'survey', surveyId);
            await setDoc(surveyRef, jobDetails);

            console.log('Job details added successfully to Firebase!');
        } catch (error) {
            console.error('Error adding job details to Firebase: ', error);
        }
    };
    return (
        <>
            {!userLoggedIn && (<Navigate to={'/login'} replace={true} />)}


            <div class="parent">

                <div class="child">
                    <div class="heading">
                        <img src={clip} alt="" />
                    </div>
                    <div class="white">
                        <form onSubmit={handleAddDetails}>
                            <div class="row1">
                                <input type="text" name="" id="" placeholder="Job Title" required onChange={(e) => { setJobTitle(e.target.value) }} />
                            </div>
                            <div class="row1">
                                <select name="location" id="location" required onChange={(e) => { setLocation(e.target.value) }}>
                                    <option value="" disabled selected>Job Location</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Karnataka">Karnataka</option>
                                </select>
                                <select name="department" id="department" required onChange={(e) => { setDepartment(e.target.value) }}>
                                    <option value="" disabled selected>Select a department</option>
                                    <option value="IT">Information Technology</option>
                                    <option value="HR">Human Resources</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                </select>

                            </div>
                            <div class="row1">
                                <select name="salary" id="salary" required onChange={(e) => { setSalary(e.target.value) }}>
                                    <option value="" disabled selected>Select a salary range</option>
                                    <option value="0-50000">0 - 50,000</option>
                                    <option value="50001-100000">50,001 - 100,000</option>
                                    <option value="100001-150000">100,001 - 150,000</option>
                                    <option value="150001-200000">150,001 - 200,000</option>
                                </select>

                                <select name="company" id="company" required onChange={(e) => { setCompany(e.target.value) }}>
                                    <option value="" disabled selected>Select a company profile</option>
                                    <option value="Tech">Technology</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Retail">Retail</option>
                                </select>


                            </div>
                            <div class="row1">
                                <textarea name="description" id="description" placeholder="Description" rows="2"
                                    draggable="false" required onChange={(e) => { setDescription(e.target.value) }}></textarea>

                            </div>
                            <div class="row1">
                                <textarea name="benefits" id="benefits" placeholder="benefits" rows="2"
                                    draggable="false" required onChange={(e) => { setBenefits(e.target.value) }}></textarea>
                                <textarea name="Requirements" id="Requirements" placeholder="Requirements" rows="2"
                                    draggable="false" required onChange={(e) => { setRequirements(e.target.value) }}></textarea>

                            </div>
                            <div class="row1">

                                <select name="telecommuting" id="telecommuting" required onChange={(e) => { setTelecommuting(e.target.value) }}>
                                    <option value="" disabled selected>Has company Logo</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                <select name="hasquestions" id="hasquestions" required onChange={(e) => { setHasQuestions(e.target.value) }}>
                                    <option value="" disabled selected>Has Questions</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>

                            </div>

                            <div class="row1">
                                <select name="experience" id="experience" required onChange={(e) => { setExperience(e.target.value) }}>
                                    <option value="" disabled selected>Select required experience</option>
                                    <option value="0-2">0 - 2 years</option>
                                    <option value="2-5">2 - 5 years</option>
                                    <option value="5-10">5 - 10 years</option>
                                    <option value="10+">10+ years</option>
                                </select>

                                <select name="education" id="education" required onChange={(e) => { setEducation(e.target.value) }}>
                                    <option value="" disabled selected>Select required education</option>
                                    <option value="High School">High School</option>
                                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                                    <option value="Master's Degree">Master's Degree</option>
                                    <option value="Ph.D.">Ph.D.</option>
                                </select>

                            </div>

                            <div class="row1">
                                <select name="employment" id="employment" required onChange={(e) => { setEmployment(e.target.value) }}>
                                    <option value="" disabled selected>Select employment type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Temporary">Temporary</option>
                                </select>


                                <select name="industry" id="industry" required onChange={(e) => { setIndustry(e.target.value) }}>
                                    <option value="" disabled selected>Select industry</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                </select>


                            </div>

                            <div class="row1">
                                <button type='submit'>Add Details 🔍</button>


                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>

    )
}

export default AddSurvey