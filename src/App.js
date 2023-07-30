import Header from "./components/Header";
import Arrow from "./components/Arrow";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import { Paralla, Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";

export default function App(){
    return(
        <div className="Wrapper">
                <Header />
                <About />
                <Projects />
        </div>
    )
}