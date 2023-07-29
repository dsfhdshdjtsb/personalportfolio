

import Instagram from "../images/Instagram.png"
import Discord from "../images/Discord.png"
import Github from "../images/Github.png"
import Linkedin from "../images/Linkedin.png"
import Outlook from "../images/Outlook.png"

export default function Socials(){
    return(
        <div className="Socials">
            <a href='https://github.com/dsfhdshdjtsb' target="_blank"><img src={Github}/></a>
            <a href='https://www.linkedin.com/in/nicholas-suh-5ba013274/' target="_blank"><img src={Linkedin}/></a>
            <img src={Outlook} onClick={()=>window.location = 'mailto:nicksuh@gatech.edu'}/>
            <a href='https://www.instagram.com/nick_suh/' target="_blank"><img src={Instagram}/></a>
            <a href='https://discordapp.com/users/395005138000936960' target="_blank"><img src={Discord}/></a>
        </div>
    )
}