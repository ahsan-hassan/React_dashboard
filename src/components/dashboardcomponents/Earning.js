import React, { Component } from 'react'
import Styles from '../../Styles/Styles.css'

export class Earning extends Component {
    render() {
        return (
            <div className='earning'>
                <h4>Earnings</h4>
                <p>Total Received Payments<br></br>
                $ 12,312
                </p>
                
                <p>Todays Payments<br></br>
                $ 12,312
                </p>
                
            </div>
        )
    }
}

export default Earning