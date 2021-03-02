import React from 'react';
import './SocialCard.css'
import Location from './Location'
import Phone from './Phone'

const SocialCard = (props) => {
    return (
        <div className="card">
            <div className="card-title">
                {props.userdata.name.first} {props.userdata.name.last}
            </div>
            <div className="card-body">
                <Location location={props.userdata.location}></Location>
                <Phone type='home' number ={props.userdata.phone}></Phone>
                <Phone type='mobile' number ={props.userdata.cell}></Phone>
                <div className="card-img"><img src={props.userdata.picture.medium} alt=""/></div>
            </div>
        </div>
    );
};

export default SocialCard;