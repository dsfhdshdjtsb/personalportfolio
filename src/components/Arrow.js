import arrow from "../images/arrow.png"
export default function Arrow(props){
    
    return(
        <div className={`arrow${props.title.replace(/\s/g, '')}`}>
            <p>{props.title}</p>
            <img src={arrow}></img>
        </div>
    )
}