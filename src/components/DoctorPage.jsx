import React, { useEffect, useState } from "react";
import axios from 'axios';
import './css/style.css';

export const DoctorPage = () => {

    let [doc, setdoc] = useState([]);
    useEffect(() => {
        getAllDoctor();
    }, []);

    let getAllDoctor = async() => {
        let res = await axios.get("http://localhost:3001/doctor/doctor");
        setdoc(res.data.data);
    }

    console.log(doc);

    return(
        <div className="doctor-page">
            <h1>Our Doctors</h1>
            {
                doc?.map((doc) => {
                    return(
         <div className="doctor-prof">
            <div className="doc-img"><img src="./images/ourdoctor2.png" alt="" /></div>
            <div className="doc-desc">
                 <h2 className="doc-name">Dr. {doc.First_name} {doc.Last_name}</h2>
                <p className="doc-qualification">Qualification: <span className="about-doc">{doc.Qualification}</span> </p>
                <p className="doc-exp">Experience: <span className="about-doc">{doc.Experience}</span> </p>
                <p className="doc-exp">Specialization: <span className="about-doc">{doc.Specialization}</span> </p>
                <p className="doc-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, aspernatur! Eius quisquam totam ratione. Modi vitae cupiditate eos ratione saepe.</p>
                <p className="doc-reting">Rating: <span className="about-doc">{doc.Rating}</span></p>
            </div>
            <div className="doc-btn"> View Details</div>
         </div>
                    )
                })
            }
    </div>
    )
}