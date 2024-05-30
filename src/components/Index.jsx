import React from "react";
import './css/style.css';

export const Index = () => {
    return(
        <div className="index">
        <div className="header">
            {/* <!-- <div className="round"></div> --> */}
            <div className="deshbord">
                <div className="dash-desc">
                    <div className="head-lines">
                        <h1>Best Health & cure service <br/> You can Trust.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, nam a iure, nihil ad
                            similique exercitationem magni rem sit voluptatum modi? Placeat voluptatibus autem quo iusto
                            fugiat harum, et deserunt.</p>
                        <div className="btn">Book an Appointment</div>
                    </div>
                </div>
                <div className="dash-img">
                    <img src="./images/od.jpg" alt="" />
                </div>
            </div>
        </div>
        <section>
            <div className="aboutus">
                <div className="about-img">
                    <img src="./images/certified.jpg" alt="" />
                </div>
                <div className="about-desc">
                    <div className="desc">
                        <h3>About Us</h3>
                        <h1>Certified Doctors Committed to Excellence</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi at fugit, rem ut
                            consectetur? Eveniet reiciendis inventore animi beatae aliquam vitae voluptates, molestias
                            rerum officia possimus</p>
                        <div className="btn">Read More</div>
                    </div>
                </div>
            </div>
        </section>
        <div className="services">
            <h3>Our Services</h3>
            <h1>All Your Health Needs at One Place</h1>
            <div className="service-bloks">
                <div className="bloks">
                    <div className="blok1">
                        <div className="blok-img-desc">
                            <div className="blok-img">
                                <img src="./images/d1.jpg" alt="" />
                            </div>
                            <div className="blok-heading">
                                Surgeon
                            </div>
                            <div className="blok-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima ea inventore
                                et magni ad.
                            </div>
                        </div>
                    </div>
                    <div className="blok2">
                        <div className="blok-img-desc">
                            <div className="blok-img">
                                <img src="./images/d2.jpg" alt="" />
                            </div>
                            <div className="blok-heading">
                                Internal medicine
                            </div>
                            <div className="blok-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a reiciendis inventore
                                dignissimos soluta rem?
                            </div>
                        </div>
                    </div>
                    <div className="blok3">
                        <div className="blok-img-desc">
                            <div className="blok-img">
                                <img src="./images/d3.jpg" alt="" />
                            </div>
                            <div className="blok-heading">
                                Neurologist
                            </div>
                            <div className="blok-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a reiciendis inventore
                                dignissimos soluta rem?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">View All Services</div>
            <div className="book-your-slot">
                <div className="book-sloat">
                    <div className="book-desc">
                        <h1>Book an Appointment & You're Done!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta fugiat voluptates
                            aspernatur praesentium corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla dolorum </p>
                        <div className="btn">Reserve My Slot!</div>
                    </div>
                    <div className="book-img">
                        <img src="./images/appointment.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="client-says">
            <h1>What Our Clients Say</h1>
            <div className="client-says-blok">
                <div className="client_blok1 cbloks">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quaerat eos ea fugiat veritatis
                        exercitationem id ipsam quo! Assumenda, voluptates!</p>
                    <div className="client-desc">
                        <div className="client-img"><img src="./images/c1.jpg" alt="" /></div>
                        <span>Grace Hill</span>
                    </div>
                </div>
                <div className="client_blok2 cbloks">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto magni explicabo necessitatibus
                        vitae cum molestias inventore quod.</p>
                    <div className="client-desc">
                        <div className="client-img"><img src="./images/c2.jpg" alt="" /></div>
                        <span>Jamie Carter</span>
                    </div>
                </div>
                <div className="client_blok3 cbloks">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae distinctio voluptate
                        repudiandae dolore aliquam corporis.</p>
                    <div className="client-desc">
                        <div className="client-img"><img src="./images/c3.jpg" alt="" /></div>
                        <span>Robert Ownes</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="treat-fun-blok">
            <h1>We Make Treatements Fun!</h1>
            <div className="treat-blok">
                <div className="treat-img"><img src="./images/doctor.jpg" alt="" /></div>
                <div className="treat-desc">
                    <h1>Meet Dr. Ram Patel</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis praesentium qui vitae tenetur dignissimos?</p>
                    <p>15+ Uears Experience</p>
                    <p>Highly Equipped Clinic</p>
                    <p>Good quality car & services</p>
                    <div className="btn">book an Appointment</div>
                </div>
            </div>
        </div>
    </div>
    )
}