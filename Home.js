import React from "react";
// import HeroSlider, {Slider} from "hero-slider/dist/HeroSlider";
import HeroSlider, { Slide } from "hero-slider";
import Media from './Media';
import About from "./About";
import Benefits from "./Benefits";
import Quiz from "./Quiz";

const image1 = "https://scontent.fdel1-5.fna.fbcdn.net/v/t1.18169-9/22519526_869985343178581_3270053551082887684_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1gNIMpbu-VQAX9BXWa2&_nc_oc=AQmVjuzxGO9laYjuPWEz9B7tL8SzKvwVBsfKnrrHymT5XlMU4EOJzpOFxoEcuGtN6BI&_nc_ht=scontent.fdel1-5.fna&oh=00_AfB9-EAXH4JTPcK08dpNj0HHBibzLI-Uqe5BvJyY3Hm8Hw&oe=642A74AA";
const image2 = "https://scontent.fdel1-2.fna.fbcdn.net/v/t1.18169-9/22549571_869985133178602_1089242241427629072_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=99YPSC2-iAoAX86V0Gc&_nc_ht=scontent.fdel1-2.fna&oh=00_AfDwAjbf5IPtwBzr582txbuQM0FTyiKUUjYTrVM3k_96Zw&oe=642A7908";
const image3 = "https://scontent.fdel1-2.fna.fbcdn.net/v/t1.18169-9/22310502_869984496511999_5046786692009223786_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yjxzyqrV-tkAX9Pzufu&_nc_ht=scontent.fdel1-2.fna&oh=00_AfCVzam_jR9YijqO76sT-EO37ShaiDuZJwLoxYVDL9hxpA&oe=642A77D5";
const image4 = "https://scontent.fdel1-4.fna.fbcdn.net/v/t1.18169-9/22449737_869985956511853_6492845325998258023_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AveOUbJSgRwAX-qe6O-&_nc_ht=scontent.fdel1-4.fna&oh=00_AfAWrA_enLLojKE-2HDzqb8a31lg10S0aX1vxwNSs1Ucbg&oe=642A5143";
const image5 = "https://scontent.fdel1-2.fna.fbcdn.net/v/t1.18169-9/22449963_869985556511893_1387663593985269317_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=46jG15PcDpYAX_SnP_s&_nc_ht=scontent.fdel1-2.fna&oh=00_AfCcCtFaaUvZzh0dNhXuLwyB_5VZo3-k5-pbXOAQ1FR-xg&oe=642A75AF";

const App = () => {
    return (
        <div className="container">
            <HeroSlider
                slidingAnimation="left_to_right"
                orientation="horizontal"
                initialScale={1}
                onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
                onChange={nextSlide => console.log("onChange", nextSlide)}
                onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.33)"
                }}
                settings={{
                    duration: 2000,
                    transitionDuration: 500,
                    infinite: true,
                    indicators: true,
                    arrows: true
                }}
            >
                <Slide
                    background={{
                        backgroundImageSrc: image1,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: image2,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: image3,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: image4,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: image5,
                        backgroundAttachment: "fixed"
                    }}
                />
            </HeroSlider><br /><br /><br /><hr /><br /><br /><br />
            <About /><br /><br /><br /><hr /><br /><br /><br />
            <Benefits/><br /><br /><br /><hr /><br /><br /><br />
            <Quiz/><br /><br /><br /><hr /><br /><br /><br />
            <Media /><br /><br /><br /><hr /><br /><br /><br />
        </div>


    )
}


export default App;