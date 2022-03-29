import React, { Component } from 'react'
import Stylesheet from '../../stylesheet/mystyle.css'
export class Availability extends Component {
    render() {
        return (
            <div className='availability'>
                <p>Availability: 12:00 AM to 9:00 PM</p>
                <p>Duration: 15 minutes</p>
                <a href="#">Set Availability</a>
            </div>
        )
    }
}

export default Availability