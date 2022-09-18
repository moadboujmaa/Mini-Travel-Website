import React from "react";
import twitterIco from "../images/twitter.svg"
import facebookIco from "../images/facebook.svg"
import instaIco from "../images/insta.svg"
import githubIco from "../images/github.svg"

export default function Social() {
    return (
        <div className="social">
            <img src={twitterIco} alt=""/>
            <img src={facebookIco} alt=""/>
            <img src={instaIco} alt=""/>
            <img src={githubIco} alt=""/>
        </div>
    )
}