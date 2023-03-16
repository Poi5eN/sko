import React from 'react'
import logo from './logo.png';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className='left'>
                    <img src={logo} className="img-fluid" alt="..." />
                </div>

                <div class="card-body1">
                    <Link className="nav-right" to="/login" ><button type="button" class="btn btn-danger">Log In</button></Link>
                </div>
            </div>
        </header>
    )
}
