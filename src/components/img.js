import React from "react";
import profileImg from '../images/profile.jpg';

export default function Img() {
    return (
        <div className="img">
            <img src={profileImg}/>
        </div>
    )
}