import portrait from "../images/portrait.jpg"
import Socials from "./Socials"

export default function Header(){
    return(
        <div className="Header">
            <div className="Background">
                <div className="Text">
                    <h1>Hey, I'm Nick Suh</h1>
                    <p>CS student at Georgia Tech</p>
                </div>
                <div className="imageAndSocials">
                    <img src= {portrait}></img>
                    <Socials />
                </div>
                
            </div>
            
            <div class="Diagonal"></div>
        </div>
        
    )
}