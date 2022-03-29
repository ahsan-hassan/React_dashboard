import React, { Component } from 'react'
import style from '../styles/style.css'
import Reqno from './Reqno'

export class Requests extends Component {
    render() {
        return (
            <div>
                <h1>Requests</h1>
                <a href="">View all</a>
                <Reqno />
                <Reqno />
            </div>
        )
    }
}

export default Requests