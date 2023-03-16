import React from 'react'
import info1 from './info1.jpg';

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }


    return (
        
        <div class="card-group">
            <div class="card">
                <div class="card-body" style={{myStyle}}>
                    <h5 class="card-title">About Us</h5><br /><hr />
                    <p class="card-text">Shiksha Ki Ore is a initiative taken by AMGR foundation a non profitable organization Which conduct Scholarship Program for students.To reward and help deserving student by providing them Scholarship for their overall career development.AMGR foundation also help student with their career Counseling for higher studies.It is not only providing scholarship to the winner but also give reward points depending upon their academic performance. Here at Shiksha Ki Ore we believe in overall growth and development of students by providing better means for quality education. We believe in "PHADEGA INDIA TO BHADEGA INDIA" Aao Mil Kar Badaye Ek Kadam Shiksha Ki Ore.</p>
                </div>
            </div>
            <div class="card">
                <img src={info1} className="img1" alt="not found" />
            </div>
        </div>
    )
}