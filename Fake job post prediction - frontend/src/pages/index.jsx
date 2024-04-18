import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './survey.css';
import { useAuth } from '../context';
import { Navigate, useNavigate } from 'react-router-dom';
import clip from '../assets/clip2.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
    const { userLoggedIn } = useAuth();

    const [jobTitle, setJobTitle] = useState("");
    const [hasLogo, setHasLogo] = useState("");
    const [department, setDepartment] = useState("");
    const [companyProfile, setCompanyProfile] = useState("");
    const [description, setDescription] = useState("");
    const [benefits, setBenefits] = useState("");
    const [requirements, setRequirements] = useState("");
    const [telecommuting, setTelecommuting] = useState("");
    const [hasQuestions, setHasQuestions] = useState("");
    const [experience, setExperience] = useState("");
    const [education, setEducation] = useState("");
    const [employment, setEmployment] = useState("");
    const [industry, setIndustry] = useState("");
    const [functiondata, setFunctiondata] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {

        const formData = {
            jobTitle,
            hasLogo,
            department,
            companyProfile,
            description,
            benefits,
            requirements,
            telecommuting,
            hasQuestions,
            experience,
            education,
            employment,
            industry,
            functiondata
        };


        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network error');
                }
                return response.json();
            })
            .then(data => {
                console.log('Prediction result:', data);
                navigate('/result', { state: { res: data } })
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });


    };

    return (
        <div className="parent">
            {!userLoggedIn && <Navigate to="/login" replace={true} />}

            <div className="child">
                <div className="heading">
                    <img src={clip} alt="" />
                </div>
                <div className="white">
                    <div className="row1">
                        <input
                            type="text"
                            name="jobTitle"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            placeholder="Job Title"
                        />
                    </div>
                    <div className="row1">
                        <select
                            name="hasLogo"
                            value={hasLogo}
                            onChange={(e) => setHasLogo(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Has company Logo
                            </option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <select
                            name="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Select a department
                            </option>
                            ```html
                            <option value="Sales">Sales</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Operations">Operations</option>
                            <option value="IT">IT</option>
                            <option value="Development">Development</option>
                            <option value="Product">Product</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Design">Design</option>
                            <option value="Technology">Technology</option>
                            <option value="Customer Service">Customer Service</option>
                            <option value="Finance">Finance</option>
                            <option value="HR">HR</option>
                            <option value="tech">tech</option>
                            <option value="R&D">R&D</option>
                            <option value="Creative">Creative</option>
                            <option value="Retail">Retail</option>
                            <option value="Client Services">Client Services</option>
                            <option value="Product Development">Product Development</option>
                            <option value="Production">Production</option>
                            <option value="Business Development">Business Development</option>
                            <option value="Oil and Gas">Oil and Gas</option>
                            <option value="CSD Relay">CSD Relay</option>
                            <option value="Administrative">Administrative</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Tech">Tech</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Technical">Technical</option>
                            <option value="Administration">Administration</option>
                            <option value="Clerical">Clerical</option>
                            <option value="Editorial">Editorial</option>
                            <option value="Oil & Energy">Oil & Energy</option>
                            <option value="IT Services">IT Services</option>
                            <option value="Department">Department</option>
                            <option value="Legal">Legal</option>
                            <option value="Performance Marketing">Performance Marketing</option>
                            <option value="Squiz">Squiz</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Content">Content</option>
                            <option value="Admin">Admin</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Creative Services">Creative Services</option>
                            <option value="QA">QA</option>
                            <option value="Didactics">Didactics</option>
                            <option value="International Growth">International Growth</option>
                            <option value="Support">Support</option>
                            <option value="Customer Support">Customer Support</option>
                            <option value="Management">Management</option>
                            <option value="Customer Success">Customer Success</option>
                            <option value="Marketing">Marketing</option>
                            <option value="All">All</option>
                            <option value="CS">CS</option>
                            <option value="Warehouse">Warehouse</option>
                            <option value="Product Team">Product Team</option>
                            <option value="Sales">Sales</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Education">Education</option>
                            <option value="Account Management">Account Management</option>
                            <option value="Product Innovation">Product Innovation</option>
                            <option value="Permanent">Permanent</option>
                            <option value="Business">Business</option>
                            <option value="Digital">Digital</option>
                            <option value="customer service">customer service</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Art Studio">Art Studio</option>
                            <option value="Voyageur Medical Transportation">Voyageur Medical Transportation</option>
                            <option value="Sales and Marketing">Sales and Marketing</option>
                            <option value="sales">sales</option>
                            <option value="Services">Services</option>
                            <option value="Reservations">Reservations</option>
                            <option value="Product Management">Product Management</option>
                            <option value="Growth">Growth</option>
                            <option value="Merchandising">Merchandising</option>
                            <option value="Communications">Communications</option>
                            <option value="Media">Media</option>
                            <option value="Professional Services">Professional Services</option>
                            <option value="Esri">Esri</option>
                            <option value="BDC">BDC</option>
                            <option value="Connectivity">Connectivity</option>
                            <option value="EC">EC</option>
                            <option value="Business:Sales">Business:Sales</option>
                            <option value="Provisions">Provisions</option>
                            <option value="DEV">DEV</option>
                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Expert Services">Expert Services</option>
                            <option value="Client Service">Client Service</option>
                            <option value="Campaign Management">Campaign Management</option>
                            <option value="Analytics">Analytics</option>
                            <option value="Installers">Installers</option>
                            <option value="Research">Research</option>
                            <option value="Online Marketing">Online Marketing</option>
                            <option value="Internships">Internships</option>
                            <option value="Nursing">Nursing</option>
                            <option value="IW">IW</option>
                            <option value="African Program">African Program</option>
                            <option value="Marketing & Sales">Marketing & Sales</option>
                            ```
                        </select>
                    </div>
                    <div className="row1">
                        <textarea
                            name="companyProfile"
                            value={companyProfile}
                            onChange={(e) => setCompanyProfile(e.target.value)}
                            placeholder="company profile"
                            rows="2"
                            draggable="false"
                        ></textarea>
                    </div>
                    <div className="row1">
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            rows="2"
                            draggable="false"
                        ></textarea>
                        <select
                            name="function"
                            value={functiondata}
                            onChange={(e) => setFunctiondata(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Select function
                            </option>
                            <option value="Sales">Sales</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Operations">Operations</option>
                            <option value="IT">IT</option>
                            <option value="Development">Development</option>
                            <option value="Product">Product</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Design">Design</option>
                            <option value="Technology">Technology</option>
                            <option value="Customer Service">Customer Service</option>
                            <option value="Finance">Finance</option>
                            <option value="HR">HR</option>
                            <option value="tech">tech</option>
                            <option value="R&D">R&D</option>
                            <option value="Creative">Creative</option>
                            <option value="Retail">Retail</option>
                            <option value="Client Services">Client Services</option>
                            <option value="Product Development">Product Development</option>
                            <option value="Production">Production</option>
                            <option value="Business Development">Business Development</option>
                            <option value="Oil and Gas">Oil and Gas</option>
                            <option value="CSD Relay">CSD Relay</option>
                            <option value="Administrative">Administrative</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Tech">Tech</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Technical">Technical</option>
                            <option value="Administration">Administration</option>
                            <option value="Clerical">Clerical</option>
                            <option value="Editorial">Editorial</option>
                            <option value="Oil & Energy">Oil & Energy</option>
                            <option value="IT Services">IT Services</option>
                            <option value="Department">Department</option>
                            <option value="Legal">Legal</option>
                            <option value="Performance Marketing">Performance Marketing</option>
                            <option value="Squiz ">Squiz </option>
                            <option value="Project Management">Project Management</option>
                            <option value="Content">Content</option>
                            <option value="Admin">Admin</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Creative Services">Creative Services</option>
                            <option value="QA">QA</option>
                            <option value="Engineering ">Engineering </option>
                            <option value="Didactics">Didactics</option>
                            <option value="International Growth">International Growth</option>
                            <option value="Support">Support</option>
                            <option value="Customer Support">Customer Support</option>
                            <option value="Management">Management</option>
                            <option value="Customer Success">Customer Success</option>
                            <option value="Marketing ">Marketing </option>
                            <option value="All">All</option>
                            <option value="CS">CS</option>
                            <option value="Warehouse">Warehouse</option>
                            <option value="Information Technology ">Information Technology </option>
                            <option value="Product Team">Product Team</option>
                            <option value="Sales ">Sales </option>
                            <option value="Engagement">Engagement</option>
                            <option value="Education">Education</option>
                            <option value="Account Management">Account Management</option>
                            <option value="Product Innovation">Product Innovation</option>
                            <option value="Permanent">Permanent</option>
                            <option value="Business">Business</option>
                            <option value="Digital">Digital</option>
                            <option value="customer service">customer service</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Art Studio">Art Studio</option>
                            <option value="Voyageur Medical Transportation">Voyageur Medical Transportation</option>
                            <option value="Sales and Marketing">Sales and Marketing</option>
                            <option value="sales">sales</option>
                            <option value="Services">Services</option>
                            <option value="Reservations">Reservations</option>
                            <option value="Product Management">Product Management</option>
                            <option value="Growth">Growth</option>
                            <option value="Merchandising ">Merchandising </option>
                            <option value="Communications">Communications</option>
                            <option value="Media">Media</option>
                            <option value="Professional Services">Professional Services</option>
                            <option value="Esri">Esri</option>
                            <option value="BDC">BDC</option>
                            <option value="Connectivity">Connectivity</option>
                            <option value="EC">EC</option>
                            <option value="Business:Sales">Business:Sales</option>
                            <option value="Provisions">Provisions</option>
                            <option value="DEV">DEV</option>
                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Expert Services">Expert Services</option>
                            <option value="Client Service">Client Service</option>
                            <option value="Campaign Management">Campaign Management</option>
                            <option value="Analytics">Analytics</option>
                            <option value="Installers">Installers</option>
                            <option value="Research">Research</option>
                            <option value="Online Marketing">Online Marketing</option>
                            <option value="Internships">Internships</option>
                            <option value="Nursing">Nursing</option>
                            <option value="IW">IW</option>
                            <option value="African Program">African Program</option>
                            <option value="Marketing & Sales">Marketing & Sales</option>
                        </select>
                    </div>
                    <div className="row1">
                        <textarea
                            name="benefits"
                            value={benefits}
                            onChange={(e) => setBenefits(e.target.value)}
                            placeholder="benefits"
                            rows="2"
                            draggable="false"
                        ></textarea>
                        <textarea
                            name="requirements"
                            value={requirements}
                            onChange={(e) => setRequirements(e.target.value)}
                            placeholder="Requirements"
                            rows="2"
                            draggable="false"
                        ></textarea>
                    </div>
                    <div className="row1">
                        <select
                            name="telecommuting"
                            value={telecommuting}
                            onChange={(e) => setTelecommuting(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Telephone communication
                            </option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <select
                            name="hasQuestions"
                            value={hasQuestions}
                            onChange={(e) => setHasQuestions(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Has Questions
                            </option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className="row1">
                        <select
                            name="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Select required experience
                            </option>

                            <option value="Mid-Senior level">Mid-Senior level</option>
                            <option value="Entry level">Entry level</option>
                            <option value="Associate">Associate</option>
                            <option value="Director">Director</option>
                            <option value="Internship">Internship</option>
                            <option value="Executive">Executive</option>
                            <option value="Not Applicable">Not Applicable</option>
                        </select>
                        <select
                            name="education"
                            value={education}
                            required
                            onChange={(e) => setEducation(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Select required education
                            </option>

                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                            <option value="High School or equivalent">High School or equivalent</option>
                            <option value="Unspecified">Unspecified</option>
                            <option value="Master's Degree">Master's Degree</option>
                            <option value="Associate Degree">Associate Degree</option>
                            <option value="Certification">Certification</option>
                            <option value="Some College Coursework Completed">Some College Coursework Completed</option>
                            <option value="Professional">Professional</option>
                            <option value="Vocational">Vocational</option>
                            <option value="Some High School Coursework">Some High School Coursework</option>
                            <option value="Doctorate">Doctorate</option>
                            <option value="Vocational - HS Diploma">Vocational - HS Diploma</option>
                            <option value="Vocational - Degree">Vocational - Degree</option>
                        </select>
                    </div>
                    <div className="row1">
                        <select
                            name="employment"
                            value={employment}
                            onChange={(e) => setEmployment(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Select employment type
                            </option>
                            <option value="Full-time">Full-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Other">Other</option>
                        </select>
                        <select
                            name="industry"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Select industry
                            </option>
                            <option value="Information Technology and Services">Information Technology and Services</option>
                            <option value="Computer Software">Computer Software</option>
                            <option value="Internet">Internet</option>
                            <option value="Marketing and Advertising">Marketing and Advertising</option>
                            <option value="Education Management">Education Management</option>
                            <option value="Financial Services">Financial Services</option>
                            <option value="Hospital & Health Care">Hospital & Health Care</option>
                            <option value="Consumer Services">Consumer Services</option>
                            <option value="Telecommunications">Telecommunications</option>
                            <option value="Oil & Energy">Oil & Energy</option>
                            <option value="Retail">Retail</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Construction">Construction</option>
                            <option value="E-Learning">E-Learning</option>
                            <option value="Management Consulting">Management Consulting</option>
                            <option value="Design">Design</option>
                            <option value="Health, Wellness and Fitness">Health, Wellness and Fitness</option>
                            <option value="Staffing and Recruiting">Staffing and Recruiting</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Logistics and Supply Chain">Logistics and Supply Chain</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Online Media">Online Media</option>
                            <option value="Apparel & Fashion">Apparel & Fashion</option>
                            <option value="Legal Services">Legal Services</option>
                            <option value="Facilities Services">Facilities Services</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Computer Games">Computer Games</option>
                            <option value="Banking">Banking</option>
                            <option value="Building Materials">Building Materials</option>
                            <option value="Leisure, Travel & Tourism">Leisure, Travel & Tourism</option>
                            <option value="Nonprofit Organization Management">Nonprofit Organization Management</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Electrical/Electronic Manufacturing">Electrical/Electronic Manufacturing</option>
                            <option value="Food & Beverages">Food & Beverages</option>
                            <option value="Cosmetics">Cosmetics</option>
                            <option value="Airlines/Aviation">Airlines/Aviation</option>
                            <option value="Consumer Goods">Consumer Goods</option>
                            <option value="Consumer Electronics">Consumer Electronics</option>
                            <option value="Medical Practice">Medical Practice</option>
                            <option value="Public Relations and Communications">Public Relations and Communications</option>
                            <option value="Civic & Social Organization">Civic & Social Organization</option>
                            <option value="Market Research">Market Research</option>
                            <option value="Transportation/Trucking/Railroad">Transportation/Trucking/Railroad</option>
                            <option value="Restaurants">Restaurants</option>
                            <option value="Warehousing">Warehousing</option>
                            <option value="Events Services">Events Services</option>
                            <option value="Broadcast Media">Broadcast Media</option>
                            <option value="Computer & Network Security">Computer & Network Security</option>
                            <option value="Environmental Services">Environmental Services</option>
                            <option value="Media Production">Media Production</option>
                            <option value="Computer Networking">Computer Networking</option>
                            <option value="Food Production">Food Production</option>
                            <option value="Pharmaceuticals">Pharmaceuticals</option>
                            <option value="Gambling & Casinos">Gambling & Casinos</option>
                            <option value="Publishing">Publishing</option>
                            <option value="Biotechnology">Biotechnology</option>
                            <option value="Mechanical or Industrial Engineering">Mechanical or Industrial Engineering</option>
                            <option value="Computer Hardware">Computer Hardware</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Printing">Printing</option>
                            <option value="Security and Investigations">Security and Investigations</option>
                            <option value="Research">Research</option>
                            <option value="Venture Capital & Private Equity">Venture Capital & Private Equity</option>
                            <option value="Information Services">Information Services</option>
                            <option value="Aviation & Aerospace">Aviation & Aerospace</option>
                            <option value="Farming">Farming</option>
                            <option value="Mental Health Care">Mental Health Care</option>
                            <option value="Sports">Sports</option>
                            <option value="Chemicals">Chemicals</option>
                            <option value="Government Administration">Government Administration</option>
                            <option value="Writing and Editing">Writing and Editing</option>
                            <option value="Law Practice">Law Practice</option>
                            <option value="Outsourcing/Offshoring">Outsourcing/Offshoring</option>
                            <option value="Medical Devices">Medical Devices</option>
                            <option value="Business Supplies and Equipment">Business Supplies and Equipment</option>
                            <option value="Fund-Raising">Fund-Raising</option>
                            <option value="Professional Training & Coaching">Professional Training & Coaching</option>
                            <option value="Wholesale">Wholesale</option>
                            <option value="Government Relations">Government Relations</option>
                            <option value="Semiconductors">Semiconductors</option>
                            <option value="Machinery">Machinery</option>
                            <option value="Higher Education">Higher Education</option>
                            <option value="Law Enforcement">Law Enforcement</option>
                            <option value="Translation and Localization">Translation and Localization</option>
                            <option value="Architecture & Planning">Architecture & Planning</option>
                            <option value="Music">Music</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Defense & Space">Defense & Space</option>
                            <option value="Renewables & Environment">Renewables & Environment</option>
                            <option value="Program Development">Program Development</option>
                            <option value="Individual & Family Services">Individual & Family Services</option>
                            <option value="International Trade and Development">International Trade and Development</option>
                            <option value="Veterinary">Veterinary</option>
                            <option value="Executive Office">Executive Office</option>
                            <option value="Photography">Photography</option>
                            <option value="Industrial Automation">Industrial Automation</option>
                            <option value="Public Safety">Public Safety</option>
                            <option value="Investment Management">Investment Management</option>
                            <option value="Motion Pictures and Film">Motion Pictures and Film</option>
                            <option value="Primary/Secondary Education">Primary/Secondary Education</option>
                            <option value="Religious Institutions">Religious Institutions</option>
                            <option value="Import and Export">Import and Export</option>
                            <option value="Packaging and Containers">Packaging and Containers</option>
                            <option value="Package/Freight Delivery">Package/Freight Delivery</option>
                            <option value="Capital Markets">Capital Markets</option>
                            <option value="Animation">Animation</option>
                            <option value="Investment Banking">Investment Banking</option>
                            <option value="Luxury Goods & Jewelry">Luxury Goods & Jewelry</option>
                            <option value="Fishery">Fishery</option>
                            <option value="Commercial Real Estate">Commercial Real Estate</option>
                            <option value="Philanthropy">Philanthropy</option>
                            <option value="Wireless">Wireless</option>
                            <option value="Public Policy">Public Policy</option>
                            <option value="Performing Arts">Performing Arts</option>
                            <option value="Plastics">Plastics</option>
                            <option value="Mining & Metals">Mining & Metals</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Maritime">Maritime</option>
                            <option value="Libraries">Libraries</option>
                            <option value="Nanotechnology">Nanotechnology</option>
                            <option value="Textiles">Textiles</option>
                            <option value="Military">Military</option>
                            <option value="Alternative Dispute Resolution">Alternative Dispute Resolution</option>
                            <option value="Shipbuilding">Shipbuilding</option>
                            <option value="Sporting Goods">Sporting Goods</option>
                            <option value="Museums and Institutions">Museums and Institutions</option>
                            <option value="Wine and Spirits">Wine and Spirits</option>
                            <option value="Ranching">Ranching</option>

                        </select>
                    </div>

                    <div className="row1">
                        <button onClick={handleSubmit}>Predict Job 🔍</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
