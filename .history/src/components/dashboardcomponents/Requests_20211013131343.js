import React, { Component } from 'react'
import style from '../styles/style.css'
import Reqno from './Reqno'

export class Requests extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Requests</h1>
                <a href="">View all</a>
                </div>

                <Reqno />
                <Reqno />
            </div>
        )
    }
}

export default Requests