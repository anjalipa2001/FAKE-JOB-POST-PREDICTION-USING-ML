import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './survey.css'
import { useAuth } from '../context';
import { Navigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};



const Survey = () => {
    const { userLoggedIn } = useAuth()

    const [locationCounts, setLocationCounts] = useState({});
    const [departmentCounts, setDepartmentCounts] = useState({});
    const [salaryCounts, setSalaryCounts] = useState({});
    const [companyProfileCounts, setCompanyProfileCounts] = useState({});
    const [experienceCounts, setExperienceCounts] = useState({});
    const [educationCounts, setEducationCounts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'survey'));

                const counts = {};
                const deparmentcounts = {};
                const salarycounts = {};
                const companyprofilecounts = {};
                const experiencecounts = {};
                const educationcounts = {};

                querySnapshot.forEach((doc) => {
                    console.log(doc)
                    const location = doc.data().location;
                    const department = doc.data().department;
                    const salary = doc.data().salary;
                    const companyprofile = doc.data().company;
                    const experience = doc.data().experience;
                    const education = doc.data().education;

                    if (location) {
                        counts[location] = (counts[location] || 0) + 1;
                    }
                    if (department) {
                        deparmentcounts[department] = (deparmentcounts[department] || 0) + 1;
                    }
                    if (salary) {
                        salaryCounts[salary] = (salaryCounts[salary] || 0) + 1;
                    }
                    if (companyprofile) {
                        companyProfileCounts[companyprofile] = (companyProfileCounts[companyprofile] || 0) + 1;
                    }
                    if (experience) {
                        experienceCounts[experience] = (experienceCounts[experience] || 0) + 1;
                    }
                    if (education) {
                        educationCounts[education] = (educationCounts[education] || 0) + 1;
                    }
                });

                setLocationCounts(counts);
                setDepartmentCounts(deparmentcounts);
                setSalaryCounts(salaryCounts);
                setCompanyProfileCounts(companyProfileCounts);
                setExperienceCounts(experienceCounts);
                setEducationCounts(educationCounts);

            } catch (error) {
                console.error('Error fetching data from Firebase: ', error);
            }
        };

        fetchData();
    }, []);
    const locationdata = {
        labels: Object.keys(locationCounts),
        datasets: [
            {
                data: Object.values(locationCounts),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const departmentdata = {
        labels: Object.keys(departmentCounts),
        datasets: [
            {
                data: Object.values(departmentCounts),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    const salarydata = {
        labels: Object.keys(salaryCounts),
        datasets: [
            {
                data: Object.values(salaryCounts),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    const companyprofiledata = {
        labels: Object.keys(companyProfileCounts),
        datasets: [
            {
                data: Object.values(companyProfileCounts),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const experiencedata = {
        labels: Object.keys(experienceCounts),
        datasets: [
            {
                data: Object.values(experienceCounts),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const educationdata = {
        labels: Object.keys(educationCounts),
        datasets: [
            {
                data: Object.values(educationCounts),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <>
            {!userLoggedIn && (<Navigate to={'/login'} replace={true} />)}
            <div class="parent">

                <div className="row">
                    <div className="pie">
                        <Pie data={locationdata} />;
                    </div>
                    <div className="pie">
                        <Pie data={departmentdata} />;
                    </div>
                    <div className="pie">
                        <Pie data={salarydata} />;
                    </div>
                </div>
                <div className="row">
                    <div className="pie">
                        <Pie data={companyprofiledata} />;
                    </div>
                    <div className="pie">
                        <Pie data={experiencedata} />;
                    </div>
                    <div className="pie">
                        <Pie data={educationdata} />;
                    </div>
                </div>
            </div>
        </>

    )
}

export default Survey