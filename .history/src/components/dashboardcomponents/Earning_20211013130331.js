import React, { Component } from 'react'
import style from '../styles/style.css';

export class Earning extends Component {
    render() {
        return (
            <div className='earning'>
                <h4>Earnings</h4>
                <p>Total Received Payments<br></br>
                $ 12,312
                </p>
                
                <p>Todays Payments</p>
                $ 12,312
            </div>
        )
    }
}

export default Earning