import React from 'react'
import benefits from './benefits.png'



export default function Benefits(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    return (
        <div class="card-group">
            <div class="card">
                <div class="card-body" style={{ myStyle }}>
                    <h5 class="card-title">SCHOOL BENEFITS</h5><br /><hr />
                    <p class="card-text">It is a pleasure and privilege to invite the multi skilled and adept scholars of your venerated institution to participate in Inter School Quiz Competition 2023-2024 organized by SHIKSHA KI ORE - EK KADAM AAGE in association with INFOTECH SOFTWARE SOLUTION , NOIDA,to encourage talent , foster a quest for knowledge and provide an opportunity to students of Classes 1st to 12th to come forward on a common platform in a spirit of healthy competition. These competitions are held every year to honur the intrinsic and latent abilities in pupils and demonstrate their inherent talents and diverse faculties.</p>
                </div>
            </div>
            <div class="card">
                <img src={benefits} className="img1" alt="not found" />
            </div>
        </div>
    )
}
