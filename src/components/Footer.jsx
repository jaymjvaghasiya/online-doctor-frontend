import React from "react";
import './css/style.css';


export const Footer = () => {
    return(
        <div className="footer">
        <div className="location-details">
            <div className="details-bloks dblok1">
                <div className="dlogo"></div>
                <span>Call Today +123 456 7890</span>
            </div>
            <div className="details-bloks dblok2">
                <div className="dlogo"></div>
                <span>Shop no. 23, Saradar Patel Complex, Bapunagar, Ahmedabad, Gujarat, India</span>
            </div>
            <div className="details-bloks dblok3">
                <span>Schedule a Virtual Appointment</span>
                <div className="btn">Schedule Now</div>
            </div>
        </div>
        <div className="links-details"></div>
    </div>
    )
}