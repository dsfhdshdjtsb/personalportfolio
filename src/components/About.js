import CSSIcon from "../images/CSSIcon.png"
import HTMLIcon from "../images/HTMLIcon.png"
import GitIcon from "../images/GitIcon.png"
import JavaIcon from "../images/JavaIcon.png"
import JavascriptIcon from "../images/JavascriptIcon.png"
import ReactIcon from "../images/ReactIcon.png"

export default function About(){
    return(
        <div className="About">
            <h2>About me</h2>
            <p>I am a first year student studying Computer Science. I Have a passion
            for game design, web development, web3, and machine learning. Basically anything
            related to programming</p>
            <h2>My Skills</h2>
            <div className="LogoImages">
                <img src={JavaIcon} id="javaIcon"></img>
                <img src={HTMLIcon}></img>
                <img src={CSSIcon}></img>
                <div id= "lineBreak"></div>
                <img src={JavascriptIcon}></img>
                <img src={ReactIcon}></img>
                <img src={GitIcon}></img>
            </div>
        </div>
    )
}