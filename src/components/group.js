import React from "react";
import linkImg from "../images/linkedin.svg"
import mailImg from "../images/mail.svg"

function Info() {
    return (
        <div className="info">
            <h1>Laura Smith</h1>
            <p className="p1">Web developer</p>
            <p className="p2">laurasmith.website</p>
        </div>
    )
}

function Btns() {
    return (
        <div className="btns">
            <a href="#" className="aOne">
                <img src={mailImg} alt="mail"/>
                <span>Email</span>
            </a>
            <a href="#" className="aTwo">
                <img src={linkImg} alt="linkedin"/>
                <span>Linkedin</span>
            </a>
        </div>
    )
}

function About() {
    return (
        <div className="About">
            <h1>About</h1>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
        </div>
    )
}

function Interest() {
    return (
        <div className="Interest">
            <h1>Interests</h1>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}

export default function Group() {
    return (
        <div className='group'>
            <Info />
            <Btns/>
            <About/>
            <Interest/>
        </div>
    )
}