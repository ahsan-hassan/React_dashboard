import React, { Component } from 'react'
import style from '../styles/style.css';
import Earning from './Earning';
import Request from './Requests'

export class Dashboard extends Component {
    render() {
        return (   
            <div>
                <Earning />
                <Request />
            </div>
        )
    }
}

export default Dashboard